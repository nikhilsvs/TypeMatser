window.addEventListener("load",init);

const levels={
    easy:5,
    maedius:4,
    hard:3
}

//to change level
const currlevel=levels.easy;

let time=currlevel;
let score=0;
let isPlaying;

//Levels


const CurWord=document.querySelector("#current-word");
const timeDisplay=document.querySelector("#time");
const message=document.querySelector("#message");
const wordinput=document.querySelector("#word-input");
const scoreDisplay=document.querySelector("#score");

const words=[
    
    "Nikhil",
    "Hi",
    "Hello",
    "Easy",
    "Winner",
    "Success",
    "according",
    "account",
    "across",

    "action",
    "activity",
    "actually",
    "address",
    "administration",
    "admit",
    "beautiful",
    "because",
     "become",
    "before",
    "begin",
    "behavior",
     "behind",
    "believe",
    "benefit",
    "century",
    "certain",
    "certainly",
    "chair",
    "challenge",
    "chance",
    "change",
    "character",
    "charge",
     "check",
    "child",
    "choice",
    "choose",
    "church",
    "citizen",
    "environment",
    "environmental",
    "especially",
    "establish",
    "indicate",
    "individual",
    "industry",
    "information",
    "inside",
    "instead",
    "institution",
    "interest",
    "interesting",
    "international",
    "interview"

    
];
function init()
{
    myFun(words);
    //start matching input
    wordinput.addEventListener("input",startMatch);
    //call countDown every second
    setInterval(countdown,1000);
    
    //check game status
    setInterval(checkStatus,50);
}
function myFun()
{
    const idx=Math.floor(Math.random()*words.length);
    CurWord.innerHTML=words[idx];
}
//countdown Timer
function countdown()
{
    //make sure time is not run out
    if(time>0)
        {
            time--;
        }
    else if(time==0)
        {
            isPlaying=false;
        }
    timeDisplay.innerHTML=time;
}

function checkStatus()
{
    if(isPlaying==false && time==0)
        {
            message.innerHTML="Game Over !!";
            score=-1;
        }
}
function startMatch()
{
    if(matchwords())
        {
            isPlaying=true;
            time=currlevel+1;
            myFun(words);
            wordinput.value="";
            score++;
            
        }
    if(score==-1)
    scoreDisplay.innerHTML=0;
    else
    scoreDisplay.innerHTML=score;
}
//match current word
function matchwords()
{
    if(wordinput.value==CurWord.innerHTML)
                {
                    message.innerHTML="Correct!!!!";
                    return true;
                }
            else
                {
                    message.innerHTML="";
                    return false;
                }
}