const cells = document.querySelectorAll('.cell');
const statustxt = document.querySelector('.status');
const resetbtn = document.querySelector('.reset');


const winconditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

let options = ["", "", "", "", "", "", "", "", "",];

let currentPlayer = "X";
let running = false;

initializeGame();

function initializeGame() {
    cells.forEach(e => e.addEventListener('click', cellcliked));
    resetbtn.addEventListener('click', restart);
    statustxt.textContent = `${currentPlayer}'s turn`
    running = true;
}

function cellcliked() {
    const cellindex = this.getAttribute("cellidx");
    if (options[cellindex] != "" || !running) {
        return;
    }
    console.log("clicked");

    updatecell(this, cellindex);
    // changePlayer()
    updatewinner();
}

function updatecell(cell, idx) {
    options[idx] = currentPlayer;
    cell.textContent = currentPlayer;
}

function changePlayer() {
    currentPlayer = (currentPlayer == "X") ? "O" : "X";
    statustxt.textContent = `${currentPlayer}'s turn`;
}

function updatewinner() {
    let rnd = false;
    for (let i = 0; i < winconditions.length; i++) {
        const condition = winconditions[i];
        const cellA = options[condition[0]];
        const cellB = options[condition[1]];
        const cellC = options[condition[2]];

        if (cellA == "" || cellB == "" || cellC == "") {
            continue;
        }
        if (cellA == cellB && cellB == cellC) {
            rnd = true;
            break;
        }

    }

    if (rnd) {
        statustxt.textContent = `${currentPlayer} Wins!`;
        running = false;
    }

    else if (!options.includes("")) {
        statustxt.textContent = "Draw!";
        running = false;
    }
    else {
        changePlayer();
    }

}

function restart() {
    currentPlayer = "X";
    options = ["", "", "", "", "", "", "", "", "",];
    statustxt.innerText = `${currentPlayer}'s turn`;
    cells.forEach(cell => cell.textContent = "");
    running = true;
}