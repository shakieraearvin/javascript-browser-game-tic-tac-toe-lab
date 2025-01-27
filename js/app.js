//1) Define the required variables used to track the state of the game.

//2) Store cached element references.

//3) Upon loading, the game state should be initialized, and a function should 
//   be called to render this game state.

//4) The state of the game should be rendered to the user.

//5) Define the required constants.

//6) Handle a player clicking a square with a `handleClick` function.

//7) Create Reset functionality.



/*-------------------------------- Constants --------------------------------*/
const squaredEls = document.querySelectorAll('.sqr')
const messageEls = document.querySelector('#message')

/*---------------------------- Variables (state) ----------------------------*/
let board = ['', '', '', '', '', '', '', '', '',]
let turn = 'X'; 
let winner = 'false';
let tie = 'false';

/*------------------------ Cached Element References ------------------------*/



/*-------------------------------- Functions --------------------------------*/
function render() {

};

function init() {



render()
};

function updateBoard() {
    board.forEach((boardGame, index) => {
    squaredEls[index]
    console.log(squaredEls[index])
    });
};

updateBoard()

/*----------------------------- Event Listeners -----------------------------*/



init()