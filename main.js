let maxRollsInput =document.querySelector('#max-rolls');
let rollButton = document.querySelector('#roll-submit');
let resultsContainer= document.querySelector('#results-container');
let sum = document.querySelector('#totalRoll')
let resetButton = document.querySelector('#reset-button')
let resultsButton = document.querySelector('#roll-results')
let dieRollsArray = [];


function rollRandomNumber() {
    return Math.floor(Math.random() * 6) +1;
}
 


rollButton.addEventListener("click", function() {
    let maxRolls =maxRollsInput.value;
    let count = 0;
    // dieRollsArray = []
    if (sum > 0) {
        dieRollsArray = [];
        console.log(sum)
    }
    
console.log(maxRolls);
    
    while (count < maxRolls) {
        //run this
        dieRollsArray.push(rollRandomNumber())
        count ++;
    }
    console.log(dieRollsArray)
    sum = dieRollsArray.reduce(function (a, b){
        return a + b;
    }, 0)
    console.log(sum)
    document.querySelector("#totalRoll").innerHTML = sum
})

resultsButton.addEventListener("click", function() {
    let count =0;
    resultsContainer.innerHTML= "";

    while (count < dieRollsArray.length) {
        resultsContainer.innerHTML += '<li>The roll: ' + (count + 1) + ' landed on: ' + dieRollsArray[count] + '</li>'
        count ++
        
    }
})

resetButton.addEventListener("click", function() {
    document.getElementById("max-rolls").value = ''
    document.getElementById('results-container').innerHTML = ''
    document.getElementById('totalRoll').innerHTML = '_'
    dieRollsArray= []

    
})
