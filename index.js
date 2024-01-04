/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const lengthEl = document.getElementById("length-result");
const volumeEl = document.getElementById("volume-result");
const massEl = document.getElementById("mass-result");
const convertEL = document.getElementById("convert-btn");
let inputValue = document.getElementById("num-input");

function convert(){
    let entry = parseFloat(inputValue.value);
    let feet = (3.281 * entry).toFixed(3);
    let gallons = (0.264 * entry).toFixed(3);
    let pounds = (2.204 * entry).toFixed(3);

    let meters = (0.305 * entry).toFixed(3)
    let liters = (3.788 * entry).toFixed(3)
    let kilos = (0.454 * entry).toFixed(3)
    console.log(entry)
    console.log(entry === 0)

    if (entry === 0 || entry > 1){
        lengthEl.textContent = `${entry} meters = ${feet} feet | ${entry} feet = ${meters} meters`
        volumeEl.textContent = `${entry} liters = ${gallons} gallons | ${entry} gallons = ${liters} liters`
        massEl.textContent = `${entry} kilos = ${pounds} pounds | ${entry} pounds = ${kilos} kilos`
    } else{
        lengthEl.textContent = `${entry} meter = ${feet} feet | ${entry} foot = ${meters} meters`
        volumeEl.textContent = `${entry} liter = ${gallons} gallons | ${entry} gallon = ${liters} liters`
        massEl.textContent = `${entry} kilo = ${pounds} pounds | ${entry} pound = ${kilos} kilos`
    }

    function wait(){
        inputValue.value = ""
    }
   
    setTimeout( wait,1000)
}
convertEL.addEventListener("click",convert)