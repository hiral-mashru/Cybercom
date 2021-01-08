var massM = 80;
var massJ = 60;

var heightM = 170;
var heightJ = 160

var bmiM = massM / (heightM**2)
var bmiJ = massJ / (heightJ**2)

var higherBMI = bmiM > bmiJ
console.log("Is Mark's BMI higher than John's?",higherBMI)