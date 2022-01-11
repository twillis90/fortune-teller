import FortuneTeller from "./fortune-teller";

renderPage();

function renderPage() {
    addAPerson();
}

function addAPerson() {
    const createBtn = document.querySelector('#submit');
    const firstNameInput = document.querySelector('#firstName');
    const lastNameInput = document.querySelector('#lastName');
    const ageInput = document.querySelector('#age');
    const numOfBirthMonthInput = document.querySelector('#numOfBirthMonth');
    const faveROYGBIVInput = document.querySelector('#faveROYGBIVDropdown');
    const numOfSiblingsInput = document.querySelector('#numOfSiblings');

    console.log(createBtn);

    createBtn.addEventListener('click', () => {
        console.log('Get My Fortune Button Firing');

        const firstName = firstNameInput.value;
        const lastName = lastNameInput.value;
        const age = ageInput.value;
        const numOfBirthMonth = numOfBirthMonthInput.value;
        const faveROYGBIV = faveROYGBIVInput.value;
        const numOfSiblings = numOfSiblingsInput.value;

        const newPersonFortune = new FortuneTeller(firstName, lastName, age, numOfBirthMonth, faveROYGBIVInput, numOfSiblings);

        const fortuneInfoSection = document.createElement('section');
        const fortuneInfoPara = document.createElement('p');
        const firstNamePara = document.createElement('p');
        const lastNamePara = document.createElement('p');
        const agePara = document.createElement('p');
        const numOfBirthMonthPara = document.createElement('p');
        const faveROYGBIVPara = document.createElement('p');
        const numOfSiblingsPara = document.createElement('p');


        // Favorite Color
        if (faveROYGBIV === 'red') {
            faveROYGBIVPara.innerText = ' \'97 Nissan Altima. Noice.';
        } else if (faveROYGBIV === 'orange') {
            faveROYGBIVPara.innerText = ' Porché!';
        } else if (faveROYGBIV === 'yellow') {
            faveROYGBIVPara.innerText = ' chariot!';
        } else if (faveROYGBIV === 'green') {
            faveROYGBIVPara.innerText = ' Taxi! Haha!';
        } else if (faveROYGBIV === 'blue') {
            faveROYGBIVPara.innerText = ' Bugatti Veyron!';
        } else if (faveROYGBIV === 'indigo') {
            faveROYGBIVPara.innerText = ' motor scooter! Woot woot!';
        } else {
            faveROYGBIVPara.innerText = ' FLYING SAUCER!';
        }
        console.log(faveROYGBIVPara.innerText);


        // Age
        if ((age % 2) === 0) {
            agePara.innerText = ' 20 years.';
        } else {
            agePara.innerText = ' 5 years.';
        }
        console.log(agePara.innerText);



        // Siblings
        if (numOfSiblings < 0) {
            numOfSiblingsPara.innerText = ' Chernobyl';
        }
        else if (numOfSiblings === 0) {
            numOfSiblingsPara.innerText = ' Santorini.';
        }
        else if (numOfSiblings === 1) {
            numOfSiblingsPara.innerText = ' Portland, OR!';
        }
        else if (numOfSiblings === 2) {
            numOfSiblingsPara.innerText = ' Bahamas!';
        }
        else if (numOfSiblings === 3) {
            numOfSiblingsPara.innerText = ' Brazil!';
        }
        else {
            numOfSiblingsPara.innerText = ' Baton Rouge.';
        }


        // Birth Month Number
        if (numOfBirthMonth < 5) {
            numOfBirthMonthPara.innerText = ' $456,951.00';
        }
        else if (numOfBirthMonth > 4 && numOfBirthMonth < 9) {
            numOfBirthMonthPara.innerText = ' $3.50';
        } 
        else {
            numOfBirthMonthPara.innerText = ' BEZOS MONEY!';
        }


        fortuneInfoSection.appendChild(fortuneInfoPara);
        // fortuneInfoSection.appendChild(firstNamePara);
        // fortuneInfoSection.appendChild(lastNamePara);
        // fortuneInfoSection.appendChild(agePara);
        // fortuneInfoSection.appendChild(faveROYGBIVPara);
        // fortuneInfoSection.appendChild(numOfBirthMonthPara);
        // fortuneInfoSection.appendChild(numOfSiblingsPara);     

        fortuneInfoPara.innerText = 'The fortune for ' + firstName + ' is as follows: You will retire in ' + agePara.innerText + ' You will be driving a ' + faveROYGBIVPara.innerText + ' Your vacation home will be in ' + numOfSiblingsPara.innerText + ' And your bank account will have a balance of ' + numOfBirthMonthPara.innerText;

        myFortuneDiv.appendChild(fortuneInfoSection);

    });
} 