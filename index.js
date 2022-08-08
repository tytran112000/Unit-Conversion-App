/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const meterToFeet = 3.281
const literToGallon = 0.264
const kilogramToPound =  2.2046
const feetToMeter = 0.3048
const gallonToLiter = 3.785
const poundToKilogram = 0.453
const convertBtn = document.getElementById("convert-btn")
const inputEl = document.getElementById("input-el")
const containerEl = document.getElementById("result-container")
const lengthEl = document.getElementById("length")
const volumeEl = document.getElementById("volume")
const massEl = document.getElementById("mass")

convertBtn.addEventListener("click", function(){
    render()
})

function render(){
    let inputValue = inputEl.value
    let resultmeterToFeet = inputEl.value * meterToFeet
    let resultfeetToMeter = inputEl.value * feetToMeter
    let resultliterToGallon =inputEl.value * literToGallon
    let resultgallonToLiter = inputEl.value * gallonToLiter
    let resultkilogramToPound = inputEl.value * kilogramToPound
    let resultpoundToKilogram = inputEl.value * poundToKilogram
    let result = `
    <div class="length-Meter-to-Feet">
        <p id="length">Length(Meter/Feet)</p>
        <p id="length-convert">${inputValue} meters = ${resultmeterToFeet.toFixed(3)} feet | ${inputValue} feet = ${resultfeetToMeter.toFixed(3)} meters</p>
    </div>
    <div class="volume-Liters-to-Gallons">
        <p id="volume">Volume(Liters/Gallons)</p>
        <p id="volume-convert">${inputValue} liters = ${resultliterToGallon.toFixed(3)} gallons | ${inputValue} gallons = ${resultgallonToLiter.toFixed(3)} liters</p>
    </div>
    <div class="mass-Kilograms-to-Pounds">
        <p id="mass">Mass(Kilograms/Pounds)</p>
        <p id="mass-convert">${inputValue} kilograms = ${resultkilogramToPound.toFixed(3)} pounds | ${inputValue} pounds = ${resultpoundToKilogram.toFixed(3)} kilograms</p>
    </div>
    `
    containerEl.innerHTML = result
}

    
    
    
    
    
    
    
    
    
    
    
    //     value += inputEl.value * convertUnit[i].meter + "feet"
    //     let convertedUnit = `
    //     <h3>Length(Meter/Feet)</h3>
    //     <p>`${baseValue} meter = ${baseValue * meterToFeet} feet`</p> 
    // `

    // lengthEl.innerHTML = convertUnit

