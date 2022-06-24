const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorBtn = document.querySelector('.scissor');
const userSide = document.querySelector('.user');
const comSide = document.querySelector('.computer');
const textSelect = document.querySelector('.text-select');
const box = document.querySelector('.subcon1');
const comSelect= document.querySelector('.com-select')
const result = document.querySelector('.result');
let scoreUser = document.querySelector('.user');
let scoreComputer = document.querySelector('.computer');
const userChoice = [rockBtn, paperBtn, scissorBtn];
const computerChoice = ['rock', 'paper', 'scissor'];
let userScore = 0;
let computerScore = 0;

//ROCK PAPER SCISSOR
//ROCK -> SCISSOR
//PAPER -> ROCK
//SCISSOR -> PAPER

//create an eventlistener while click will display 
box.addEventListener('click', (e) => {
    const random = () => {
        return Math.floor(Math.random() * computerChoice.length)
    }
    const select1 = e.target.getAttribute('value')
    let select2 = computerChoice[random()]
    textSelect.textContent = "You Selected : " + select1.toUpperCase()
    comSelect.textContent = "Computer Selected : " + select2.toUpperCase()
    console.log(select1)
    //random number function to use in random gesture
    //random gesture function
    console.log(select2)
    main(select1, select2)
    return select1, select2
});


function main(select1, select2) {
    if (select1 === select2) {
        console.log("tie")
        return result.textContent = "tie"
     } else if ( select1 == 'rock' && select2 == 'scissor') {
        console.log('user won')
        userScore++
        scoreUser.textContent = userScore
        console.log(scoreUser)
        return result.textContent = "user won"
     } else if ( select1 === 'paper' && select2 === 'rock') {
        console.log('user won')
        userScore++
        return result.textContent = 'user won',userScore
     } else if ( select1 === 'scissor' && select2 === 'paper') {
        console.log('user won')
        userScore++
        return result.textContent = 'user won'
     } else {
        computerScore++
        scoreComputer.textContent = computerScore
        console.log('user lose')
        return result.textContent = 'computer won'
     };
}
