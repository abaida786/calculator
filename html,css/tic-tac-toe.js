let turn = "X";

function play(btn) {
  if (btn.innerText === "") {
    btn.innerText = turn;
    checkWinner();
    turn = (turn === "X") ? "O" : "X";
  }
}

function checkWinner() {
  let b = document.getElementsByTagName("button");

  let wins = [
    [0,1,2], [3,4,5], [6,7,8], // rows
    [0,3,6], [1,4,7], [2,5,8], // columns
    [0,4,8], [2,4,6]          // diagonals
  ];

  for (let i = 0; i < wins.length; i++) {
    let a = wins[i][0];
    let b1 = wins[i][1];
    let c = wins[i][2];

    if (
      b[a].innerText !== "" &&
      b[a].innerText === b[b1].innerText &&
      b[a].innerText === b[c].innerText
    ) {
      document.getElementById("result").innerText =
        b[a].innerText + " Wins!";
    }
  }
}

function reset() {
  let b = document.getElementsByTagName("button");
  for (let i = 0; i < 9; i++) {
    b[i].innerText = "";
  }
  document.getElementById("result").innerText = "";
  turn = "X";
}
