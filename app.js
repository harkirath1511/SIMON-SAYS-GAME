let h2 = document.querySelector("h2");
let divs = ['one','two','three','four'];
let user = [];
let ans = [];
let level =0;
let gameStart = false;
document.addEventListener('keypress',function(){
    if(gameStart == false){
        gameStart = true;
        levelUp();
    }
});

function outStyle(btn){
    btn.classList.add('outStyle');
    setTimeout(function(){
        btn.classList.remove('outStyle');
    },200);
}

function inpStyle(btn){
    btn.classList.add('inpStyle');
    setTimeout(function(){
        btn.classList.remove('inpStyle');
    },200);
}

function levelUp(){
    user=[];
    level++;
    h2.innerText= `Level ${level}`;
    let randIdx = Math.floor(Math.random()*3);
    let randBtn = divs[randIdx];
    outStyle(document.querySelector(`.${randBtn}`));
    ans.push(randBtn);
    // console.log(ans);
}

function checkAns(idx){
    // console.log(level);
    if(user[idx]==ans[idx]){
        console.log("good");
        if(ans.length==user.length){
            setTimeout(levelUp,800);
        }
    }
    else{
        h2.innerHTML=`Game Over! Press any key to start..\n Your Score : ${level-1}`;
        reset();
        document.querySelector('body').classList.add('out');
        setTimeout(function(){
            document.querySelector('body').classList.remove('out'); 
        },200);
    }
}
function btnPress(){
    let btn = this;
    inpStyle(btn);
    user.push(btn.getAttribute('id'));
    checkAns(user.length-1);

}
let allBtns = document.querySelectorAll('.outer div');
for(btn of allBtns){
    btn.addEventListener('click',btnPress);
}

function reset(){
    gameStart=false;
    level=0;
    user=[];
    ans=[];
}


