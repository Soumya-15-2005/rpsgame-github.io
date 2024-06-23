
let userScore = 0;
let compScore = 0;
let cscore = document.getElementById("comp-score");
let uscore = document.getElementById("userscore");

const choices = document.querySelectorAll(".box");
const gencompchoice = () => {
    const options = ["rock", "paper", "scissor"];
    let random = options[Math.floor(Math.random() * options.length)];
    return random;
}
let x = function(e) {
    let userchoice = e.target.getAttribute("id");
    // console.log("userchoice:",e.target.getAttribute("id"));
    playgame(userchoice);
}
// // let userchoice=x;
choices.forEach((choice) => {
    choice.addEventListener("click", x);
});

const playgame = (userchoice) => {
    console.log("userchoice:", userchoice);
    let computerchoice = gencompchoice();
    console.log("computerchoice:", computerchoice);

    if (userchoice == computerchoice) {
        console.log("It's a draw!");
        msg.style.backgroundColor = "black";
        msg.innerText = "It's a draw!";
    }
    else if (userchoice == 'rock' && computerchoice == 'scissor') {
        console.log("You win!");
        msg.innerText = "You win!";
        msg.style.backgroundColor = "green";
        uscore.innerText = ++userScore;

    }
    else if (userchoice == 'rock' && computerchoice == 'paper') {
        console.log("Computer win");
        msg.style.backgroundColor = "red"
        msg.innerText = "Computer win!";
        cscore.innerText = ++compScore;

    }
    else if (userchoice == 'paper' && computerchoice == 'scissor') {
        console.log("Computer win");
        msg.style.backgroundColor = "red"
        msg.innerText = "Computer win!";
        cscore.innerText = ++compScore;

    }
    else if (userchoice == 'paper' && computerchoice == 'rock') {
        console.log("You win");
        msg.style.backgroundColor = "green";
        msg.innerText = "You win!";
        uscore.innerText = ++userScore;;


    }
    else if (userchoice == 'scissor' && computerchoice == 'rock') {
        console.log("Computer win");
        msg.style.backgroundColor = "red";
        msg.innerText = "Computer win!";
        cscore.innerText = ++compScore;

    }
    else if (userchoice == 'scissor' && computerchoice == 'paper') {
        console.log("You win");
        msg.style.backgroundColor = "green";
        msg.innerText = "You win!";
        uscore.innerText = ++userScore;;

    }

};
playgame();





