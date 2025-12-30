let boxes = document.querySelectorAll(".box")
let resetBtn = document.querySelector(".reset-btn")
let msg = document.querySelector(".msg")
let msgContainer = document.querySelector(".msg-container")
let newGameBtn = document.querySelector(".newGame-btn")
let p1 = document.querySelector("#p1name")
let p2 = document.querySelector("#p2name")

let turn0  = true;
let count = 0;
let winnerFound = false;


const winningPattern=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
]


boxes.forEach((box)=>{
  
    box.addEventListener("click", () => {
      if (turn0){
        box.innerHTML= "X";
        box.style.color = 'orange'
        turn0= false;
   
      }
      else{
        box.innerHTML= "O"
        box.style.color = 'green'
        turn0= true;
     
      }
      box.disabled = true;
      count++;

      checkWinner();
      checkDraw();
      
  

    })
})


const checkDraw = () =>{
  if (count === 9 && !winnerFound){
    msg.innerText = "Game Draw";
    msgContainer.classList.remove("hide");
    console.log("checkdraw is called")
    
  }
}

const showWinner = (winner) =>{
  winnerFound=true;
  let winnerName;
  if (winner ==="X"){
    winnerName = p1.value || "Player 1"
  }
  else{
    winnerName = p2.value || "Player 2"
  }
     msg.innerText = ` Congratulations ${winnerName} is Winner`;
     msgContainer.classList.remove("hide");

}
const checkWinner=()=>{
    for (let pattern of winningPattern){
     
      let pos1 =  boxes[pattern[0]].innerText;
      let pos2 =  boxes[pattern[1]].innerText;
      let pos3 = boxes[pattern[2]].innerText;

      if(pos1 != "" && pos2 != "" && pos3 != ""){
        if(pos1 === pos2 && pos2 === pos3){
             showWinner(pos1);
             disabledBoxes();
        }
       
       
      }
}

}


const disabledBoxes = () =>{
  for(let box of boxes){
    box.disabled = true;
  }
};
const enabledBoxes = () =>{
  for(let box of boxes){
    box.disabled = false;
      box.innerText = "";
  }
};
const resetGame = () =>{
  turn0 = true;
  winnerFound = false;
  count = 0;
  enabledBoxes();
  msgContainer.classList.add("hide")
};


newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);