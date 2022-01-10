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
    const faveROYGBIVInput = document.querySelector('#faveROYGBIV');
    const numOfSiblingsInput = document.querySelector('#numOfSiblings');
    const faveROYGBIV = document.querySelector('#faveROYGBIVDropdown');
    console.log(createBtn);
    createBtn.addEventListener('click', () => {
        console.log('Get My Fortune Button Firing');
        const firstName = firstNameInput.value;
        const lastName = lastNameInput.value;
        const age = ageInput.value;
        const numOfBirthMonth = numOfBirthMonthInput.value;
        // const faveROYGBIV = faveROYGBIVInput.value;
        const numOfSiblings = numOfSiblingsInput.value;
        let fortuneCarPara = '';
        const newPersonFortune = new FortuneTeller(firstName, lastName, age, numOfBirthMonthInput, faveROYGBIVInput, numOfSiblings);
        console.log(faveROYGBIV.value);
        if (newPersonFortune.faveROYGBIV === 'red') {
            fortuneCarPara.innerHTML = 'Maserati';
            fortunePara.appendChild(fortuneCarPara);
            console.log('Maserati');
            console.log(fortuneCarPara);
        }
        const fortuneResultPara = document.createElement('p');
        fortuneResultPara.innerText = firstNameInput.value + '\'s car will be ' + fortuneCarPara;
        const newFortuneSection = document.createElement('section');
        const fortunePara = document.createElement('p');
        newFortuneSection.appendChild(fortunePara);
    });
}