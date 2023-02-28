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
        [0,1,2,5,5,0],
        [3,4,5,5,15,0],
        [6,7,8,5,25,0],
        [0,3,6,-5,5,90],
        [1,4,7,5,15,90],
        [2,5,8,5,25,90],
        [0,4,8,5,15,45],
        [2,4,6,5,15,135]
    ]

    wins.forEach((e) => {
        if((boxTexts[e[0]].innerText === boxTexts[e[1]].innerText) && (boxTexts[e[1]].innerText === boxTexts[e[2]].innerText) && (boxTexts[e[0]].innerText !== '')){
            document.querySelector('.info').innerText = boxTexts[e[0]].innerText + " Won"
            gameOver = true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = '200px';
            document.querySelector('.line').style.width = '20vw';
            document.querySelector('.line').style.transform = `translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`
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

reset.addEventListener('click',() => {
    let boxTexts = document.querySelectorAll('.boxtext');

    Array.from(boxTexts).forEach((element) => {
        element.innerText = "";
    })
    turn = "X";
    gameOver = false;
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = '0px';
    document.querySelector('.line').style.width = '0px';
})







