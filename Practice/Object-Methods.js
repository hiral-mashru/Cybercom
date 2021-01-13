var heer = {
    fname: 'heer',
    lname: 'mashru',
    birthyr: 2000,
    family: ['harsh','mummy','papa'],
    job: 'developer',
    isMarried: false,
    age: function(){ //object-methods
        this.age = 2020 - this.birthyr;
    }
}
// heer.age = heer.age()
heer.age()
console.log(heer.age)

