const form = document.getElementById('form');

const slider = document.getElementById('badness');
const badScale = document.getElementById('badScale');

slider.addEventListener('change', function(){
    badScale.textContent = slider.value;
});

form.addEventListener('submit', function(event){
    event.preventDefault();

    const name = form.elements.name.value;
    const city = form.elements.city.value;
    const state = form.elements.state.value;
    const prank = form.elements.prank.value;

    const weaponAll = form.elements.weapon;
    let weaponSelect = [];

    for(let i = 0; i < weaponAll.length; i++) {
        const weaponPref = weaponAll[i];
        if(weaponPref.checked) {
            // weaponSelect[i] = weaponPref.value;
            weaponSelect.push(weaponPref.value);
        }
    }

    const applicant = {
        name: name,
        city: city,
        state: state,
        prank: prank,
        weapon: weaponSelect,
        slider: slider.value
    };
    // console.log(applicant);
    //define empty array for applicant object
    const allApplicants = [];
    //const json string to set up looking for array
    const jsonString = window.localStorage.getItem(allApplicants);
    //if statement to parse json string
    if(jsonString) {
        jsonString = JSON.parse(jsonString);
    }
    //push statement to append applicant into empty array
    allApplicants.push(applicant);
    //const serialize stringify
    const serialize = JSON.stringify(allApplicants);
    // set item in local storage
    window.localStorage.setItem('allApplicants', serialize);
    //window.location
    window.location = 'hello.html';
    
});















// let applicants = [];
// const jsonString = window.localStorage.getItem('applicants');

// if(jsonString) {
//     applicants = JSON.parse(jsonString);
// }

// applicants.push(applicant);
// const serialize = JSON.stringify(applicants);
// window.localStorage.setItem('applicants', serialize);
// window.location = 'hello.html';