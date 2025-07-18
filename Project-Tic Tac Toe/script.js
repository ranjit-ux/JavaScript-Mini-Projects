let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-button");
let newGameButton=document.querySelector("#new-button")
let msgContainer=document.querySelector(".msg-container")
let msg=document.querySelector(".msg")

let turnO = true; //player O

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [6,7,8],
    [3,4,5]
];

const enableBoxes = () => {
    boxes.forEach((box)=>{
        box.innerText="";
        box.disabled=false;
    })
}

const disableBoxes = () =>{
    boxes.forEach((box)=>{
        box.disabled=true;
    })
}

const resetGame = () =>{
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");
};

boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        if(turnO){  //player O
            box.innerText = "O";
            turnO = false;
        } 
        else{  //player X
            box.innerText = "X";
            turnO=true;
        }
        box.disabled  = true;

        checkWinner();
    });
}) ;

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const checkWinner=()=>{
    for(let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText; 
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val !== "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val == pos2Val && pos2Val === pos3Val){
                showWinner(pos1Val);
                return;
            }
        }
    }
}



resetbtn.addEventListener("click",resetGame);
newGameButton.addEventListener("click",resetGame);