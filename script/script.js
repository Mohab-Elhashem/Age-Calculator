function getDetailedAge(birthDateString) {
    const birthDate = new Date(birthDateString);   // index date
    const now = new Date();   // current date

    // check tha age correct
    if (isNaN(birthDate)) return null;

    let years = now.getFullYear() - birthDate.getFullYear();  // get year
    let months = now.getMonth() - birthDate.getMonth();     // get month
    let days = now.getDate() - birthDate.getDate();     // get day

    // fix day
    if (days < 0) {
        const lastMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += lastMonth.getDate();
        months--; 
    }

    // fix month
    if (months < 0) {
        years--;
        months += 12;
    }

    return { years, months, days };
}

function displayAge() {
    const calculator = document.getElementById("calculator");
    const dateInput = document.getElementById('data');
    const dateValue = dateInput.value;

    if (!dateValue) {       // if date empty
        alert("You must choose full date");
        return;
    }

    let resultDiv = document.querySelector(".result");

    if (!resultDiv) {           // create element as a container to date 
        resultDiv = document.createElement("div");
        resultDiv.classList.add("result");
        calculator.appendChild(resultDiv);
    }

    const age = getDetailedAge(dateValue);

    if (age.years < 0) {       // if date in the future
        resultDiv.innerHTML = "The date is in the future";
        return;
    }

    resultDiv.innerHTML = `You  have ${age.years} years , And ${age.months} month, And ${age.days} day`;
}