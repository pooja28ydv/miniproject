let gameSeq=[];
let userSeq=[];

let btns = ["yellow","red","purple","green"]

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress",function (){
    if(started == false){
        console.log("game is started");
        started = true;

        levelup();
    }
});
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}
function levelup(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
    
    //random btn choose
   let random = Math.floor(Math.random() * 3);
   let randColor = btns[random];
   let randbtn  = document.querySelector(`.${randColor}`);
//    console.log(random);
//    console.log(randColor);
//    console.log(randbtn);
    gameSeq.push(randColor);
  //  console.log(gameSeq);
    gameFlash(randbtn);

}
function checkAns(idx) {
    // console.log("curr level :",level);
   // let idx = level-1;
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
           setTimeout(levelup,1000);
        }
      
    }else{
        h2.innerHTML = `Gaame over ! Your score was<b> ${level} <b> Press any key to start`;
       document.querySelector("body").style.backgroundColor = "red";
       setTimeout(function(){
          document.querySelector("body").style.backgroundColor = "white";
       },150);
        reset();
    }
}

function btnPress(){
  //  console.log(this);
   let btn = this;
  // gameFlash(btn);
   userFlash(btn);

   userColor = btn.getAttribute("id");
   userSeq.push(userColor);
  // console.log(userColor);
    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}
function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}