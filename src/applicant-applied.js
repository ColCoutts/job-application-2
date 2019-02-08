const json = window.localStorage.getItem('Allapplicants');
// double check that this isn't applicant
let allApplicants = [];

let applicant = null;

//if json statement to parse into empty array 
if(json) {
    allApplicants = JSON.parse(json);
} else {
    window.location = '/';
}
//set search params to window.location.search
const searchParam = new URLSearchParams(window.location.search);
const nameToFind = searchParam.get('name');
//for loop to access array of local storgage
for(let i = 0; i < allApplicants.length; i++) {
    const singleApplicant = allApplicants[i];
}
//if statement to match search params of name with array of data

const name = document.getElementById('name');
const city = document.getElementById('city');
const state = document.getElementById('state');
const pranks = document.getElementById('prank');
const weapon = document.getElementById('weapon');
const slider = document.getElementById('slider');


// const hydratedName = JSON.parse(json);

name.textContent = applicant.name;
city.textContent = applicant.city;
state.textContent = applicant.state;
pranks.textContent = applicant.prank;
weapon.textContent = applicant.weapon.join(', ');
slider.textContent = applicant.slider;











// if(json) {
//     const allApplicants = JSON.parse(json);
//     // applicant = allApplicants[allApplicants.length - 1];//will not need
// } else {
//     window.location = '/';
// }

// const searchParam = new URLSearchParams(window.location.search);
// const nameToFind = searchParam.get('name');

// for(let i = 0; i < allApplicants.length; i++) {
//     const currentApplicant = allApplicants[i];

//     if(currentApplicant === nameToFind) {
//         applicant = currentApplicant;
//         break;
//     }
// }