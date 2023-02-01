let compChImg = document.getElementById("compChoice");

let playerChImg = document.getElementById("playerChoice");

let rockBtn = document.getElementById("rockBtn");
let paperBtn = document.getElementById("paperBtn");
let scissorBtn = document.getElementById("scissorBtn");
let resultText = document.getElementById("result");

let playerCh = 0;
let compCh = 0;



rockBtn.addEventListener("click",function (){
    
    playerChImg.src = "assets/Rock.webp";
    playerCh = 0;
    setCompChoice();


});


paperBtn.addEventListener("click",function (){
    
    playerChImg.src = "assets/Paper.webp";
    playerCh = 1;
    setCompChoice();

});

scissorBtn.addEventListener("click",function (){
    
    playerChImg.src = "assets/Scissor.webp";
    playerCh = 2;
    setCompChoice();

});




function setCompChoice(){

    compCh = Math.floor(Math.random() * 3);

    if(compCh === 0){
        compChImg.src = "assets/Rock.webp";
    
    }else if(compCh === 1){
        compChImg.src = "assets/Paper.webp";
    
    }else if(compCh === 2){
        compChImg.src = "assets/Scissor.webp";
    
    }

    showResult();
}


function showResult(){
    if(playerCh === compCh){
        resultText.innerText = "Result: Draw";
        resultText.classList.add("bg-secondary");
        resultText.classList.remove("bg-success");
        resultText.classList.remove("bg-danger");


    }else if(playerCh > compCh){
        resultText.innerText = "Result: Player won";
        resultText.classList.remove("bg-secondary");
        resultText.classList.add("bg-success");
        resultText.classList.remove("bg-danger");
    }else if(playerCh < compCh){
        resultText.innerText = "Result: Computer won";
        resultText.classList.remove("bg-secondary");
        resultText.classList.remove("bg-success");
        resultText.classList.add("bg-danger");
    }
}
