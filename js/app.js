//1) Define the required variables used to track the state of the game.

//2) Store cached element references.

//3) Upon loading, the game state should be initialized, and a function should 
//   be called to render this game state.

//4) The state of the game should be rendered to the user.

//5) Define the required constants.

//6) Handle a player clicking a square with a `handleClick` function.

//7) Create Reset functionality.



/*-------------------------------- Constants --------------------------------*/
const choices = ['X', 'O', ' ']
const winningCombos = [
[0, 1, 2,],
[3, 4, 5,],
[6, 7, 8,],
[0, 3, 6,],
[1, 4, 7,],
[2, 5, 6,],
[0, 4, 8,],
[2, 4, 6,],
]

/*---------------------------- Variables (state) ----------------------------*/
let board = ['X', 'O', '', '', '', '', '', '', '',]
let turn = 'X'; 
let winner = true;
let tie = true;

/*------------------------ Cached Element References ------------------------*/

const squaredEls = document.querySelectorAll('.sqr')
const messageEls = document.querySelector('#message')

/*-------------------------------- Functions --------------------------------*/
function init() {


    render()
    };


function render() {
    updateBoard()
    updateMessage()
};


function updateBoard() {
    board.forEach((square, index) => { 
    squaredEls[index]
    console.log(squaredEls[index])
    console.log(square)
    if (square === 'X') {
        squaredEls[index].innerText = 'X'
    } else if (square === 'O') {
        squaredEls[index].innerText = 'O'
    }
})
}

function updateMessage() {
if (winner === false && tie === false)
   messageEls.innerText = 'it is X turn'
    else if (winner === false && tie === true)
        messageEls.innerText = 'tie game'
    else {
        messageEls.innerText = 'you are the winner'
    }
}

function handleClick(event) {
    squaredEls.forEach((square, index) => {
        square.addEventListener('click', () => {
            // Add your click handling logic here
        });
    });
}


/*----------------------------- Event Listeners -----------------------------*/
squaredEls.document.querySelector('.sqr').forEach(square => {
    square.addEventListener('click', handleClick);
});

init()