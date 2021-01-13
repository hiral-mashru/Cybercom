var Mark = {
    name: 'Mark',
    weight: 80,
    height: 100,
    bmi: function(){
        this.bmi = this.weight / (this.height**2)
        console.log(this)
    }
}
Mark.bmi()
console.log(Mark.bmi)

var John = {
    name: 'John',
    weight: 60,
    height: 160,
    bmi: function(){
        this.bmi = this.weight / (this.height**2)
    }
}
// John.bmi = Mark.bmi
John.bmi()
console.log(John.bmi)

console.log(Mark.name +' : '+Mark.bmi)
console.log(John.name+ ' : '+John.bmi)

if(Mark.bmi > John.bmi){
    console.log("Mark's BMI greater than John's BMI")
} else if(Mark.bmi<John.bmi){
    console.log("John's BMI greater than Mark's BMI")
} else {
    console.log("Both BMI are same")
}