//Object.create

var personProto = {
    calculateAge: function(){
        console.log(2020 - this.yearofBirth)
    }
}

var heer = Object.create(personProto)
heer.name = 'heer'
heer.yearofBirth = 2020
heer.job = 'developer'

var harsh = Object.create(personProto,{
    name: {value: 'harsh'},
    yearofBirth: { value: 2000 },
    job: { value: 'designer' }
})