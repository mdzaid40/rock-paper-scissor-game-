let userScore =0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const uScore = document.querySelector("#user-score");
const cScore = document.querySelector("#comp-score");

const genCompChoice = ()=>{
    const option = ["rock","paper","scissors"];
    const randomIdx = Math.floor(Math.random() * 3);
    return option[randomIdx];
}

const drawGame = ()=>{
    // for draw game
    console.log("Game was draw");
    msg.innerText = "Game Was Draw. Play Again";
    msg.style.backgroundColor = "black";
};

const showWinner = (userWin,userChoice, compChoice) =>{
    if(userWin){
        userScore++;
        uScore.innerText=userScore;
        console.log("You won");
        msg.innerText = `You won! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        cScore.innerText=compScore;
        console.log("You lose");
        msg.innerText = `You lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice)=>{
    console.log("user-choice = ",userChoice);
    const compChoice = genCompChoice();
    console.log("comp-choice = ",compChoice);

    if(userChoice===compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice==="rock"){
            // scissor, paper
            userWin = compChoice==="paper" ? false : true;
        }
        else if(userChoice==="paper"){
            userWin = compChoice==="scissors" ? false : true;
        }
        else{
            userWin = compChoice==="rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id");
        // console.log("choice was clicked", userChoice)
        playGame(userChoice);
    });
});