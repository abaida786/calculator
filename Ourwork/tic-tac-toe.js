let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelectorAll("#reset-btn");

let turnO = true;
let count = O;

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],   
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        count++;

        checkWinner();
    });
});

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        if (pos1Val != "" && pos2Val !="" && pos3Val !="") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                // return true;
            }
            // box.disabled = true;
        }
    }
}
// const disableBoxes = () => { 
//     for (let box of boxes) {
//         box.disabled = true;
//     }
// }
const resetGame = () => {
    turnO = true;
    count = O;
    enableBoxes();
};