//JSON.stringify example (object to stringify)

const obj = {
    name: 'ryan'
};

const json = JSON.stringify(obj); // puts quote marks around the key and value
console.log(json);

const numbers = [1, 2, 3, 4, 5];
const jsonNumbers = JSON.stringify(numbers);
console.log(numbers);

//JSON.parse (string to objectify) PRIMARILY USED FOR ARRAYS AND OBJECTS
const mySelf = JSON.parse('{"name" : "ryan")');
console.log(mySelf);

// window.localStorage - stored in key value pairs, can then be looked up by the key

// window.localStorage.setItem(key, value);
window.localStorage.setItem('ryan', JSON.stringify(mySelf));
// OR
const writableSelf = JSON.stringify(mySelf);
window.localStorage.setItem('ryan', writableSelf);
// OOOORRRRR

window.localStorage.setItem('numbers', JSON.stringify([1, 2, 3, 4, 5]));


// window.localStorage.getItem(key)

const ryanObject = window.localStorage.getItem('ryan');
const ryan = JSON.parse(ryanObject);
console.log(ryan.name);

// window.localStorage.removeItem(key);

window.localStorage.removeItem('ryan');

//window.localStorage.clear()
// removes all entries from local storage
window.localStorage.clear();

// CRUD 
// create, read, update, delete = localStorage main properties

// array .push
// .push(item) puts item at the end of an array and returns the new length of array

const largeNumbers = [100, 101, 102, 103];
largeNumbers.push(104);

for(let num = 1000; num < 10000; num++) {
    largeNumbers.push(num);
}

// window.location - gives access to info currently in URL search bar
window.location.pathname 
window.location.hostname
window.location.search
// can add another identifier to url ex. ?name=ryan&hi=there - known as querystring
// window.location = '/hi.html' and would open in that html page

// URL search params
// new URLSearchParams('?name=ryan')
const searchParams = new URLSearchParams(window.location.search);
searchParams.get('name');

