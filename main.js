let display=document.querySelector(".display");
let timer=null;
let startTime=0;
let elapsedTime=0;
let isRuning=false;
function start(){
    if(!isRuning){
        startTime=Date.now() - elapsedTime;
        timer=setInterval(update ,10)
        isRuning=true;
    }
    console.log(startTime);

}
function Stop(){
   if(isRuning){
    clearInterval(timer);
    elapsedTime =Date.now() - startTime;
    isRuning=false;
   }
}
function Reset(){
    clearInterval(timer);
     startTime=0;
 elapsedTime=0;
 isRuning=false;
 display.textContent="00:00:00:00";
}
function update(){
    let currentTime=Date.now();
    elapsedTime=currentTime - startTime;
    let hours=Math.floor(elapsedTime/(1000 *60 *60)) ;
    let min=Math.floor(elapsedTime/(1000 *60 ) %60) ;
    let sec=Math.floor(elapsedTime/1000  %60) ;
    let milsec=Math.floor(elapsedTime % 1000 /10) ;
    hours=String(hours).padStart(2 , '0');
    min=String(min).padStart(2 , '0');
    sec=String(sec).padStart(2 , '0');
    milsec=String(milsec).padStart(2 , '0');
    display.textContent =`${hours} : ${hours} :${min} :${sec} :${milsec}`;
}