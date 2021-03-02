//Object.create

var personProto = {
    calculateAge: function(){
        console.log(2020 - this.yearofBirth)
        return 1
    }
}

var heer = Object.create(personProto)
heer.name = 'heer'
heer.yearofBirth = 2020
heer.job = 'developer'
console.log(heer.calculateAge())

var harsh = Object.create(personProto,{
    name: {value: 'harsh'},
    yearofBirth: { value: 2000 },
    job: { value: 'designer' }
})
console.log(harsh.calculateAge())