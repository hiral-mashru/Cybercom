var scores, roundScore, activePlayer,dice;

scores = [0,0];
roundScore = 0;
activePlayer = 0;

// document.querySelector('#current-'+activePlayer).textContent = dice //to select stuffs
// document.querySelector('#current-'+activePlayer).innerHTML = '<em>'+dice+'</em>' //to use html at particular space
// document.querySelector('#current-'+activePlayer).textContent = '<em>'+dice+'</em>'

// var x = document.querySelector('#score-0').textContent; //get value from html page
// console.log(x)

document.querySelector('.dice').style.display = 'none'


document.getElementById('score-0').textContent = '0'
document.getElementById('score-1').textContent = '0'
document.getElementById('current-0').textContent = '0'
document.getElementById('current-1').textContent = '0'

//search MDN on google

// function btn(){
//     //do something here
// }
// // btn();

// document.querySelector('.btn-roll').addEventListener('click',btn) //we won't use () bcz we want addListener to call btn().
//a function that we pass as an argument in another function is called callback function. btn is callback function.
//anonymous function means we don't use function name, just directly write the function.

document.querySelector('.btn-roll').addEventListener('click',function(){

    var dice = Math.floor(Math.random()*6)+1
    //display the result 
    var diceDOM = document.querySelector('.dice')
    diceDOM.style.display = 'block'
    diceDOM.src = 'dice-'+dice+'.jpg'

    
}) //anonymous function