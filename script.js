console.log('Welcome to Tic Tac Toe');

// let music = new Audio('');
// let turn = new Audio('');
// let gameover = new Audio('');
let turn = "X";
let gameOver = false;

//Function to change the turn
const changeTurn = () => {
    return turn === "X" ? "0" : "X"
}


//Function to check for a win
const checkWin = () => {
    let boxTexts = document.getElementsByClassName('boxtext');
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    wins.forEach((e) => {
        if((boxTexts[e[0]].innerText === boxTexts[e[1]].innerText) && (boxTexts[e[1]].innerText === boxTexts[e[2]].innerText) && (boxTexts[e[0]].innerText !== '')){
            document.querySelector('.info').innerText = boxTexts[e[0]].innerText + "Won"
            gameOver = true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = '150px';
        }
})
}

//Game Logic
let boxes = document.getElementsByClassName("box");

Array.from(boxes).forEach((element) => {
    let boxText = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if(boxText.innerText === ''){
            boxText.innerText = turn;
            turn = changeTurn();
            checkWin();
            if(!gameOver){
                document.getElementsByClassName('info')[0].innerText = "Turn for " + turn;
            }
        }
    })
})





