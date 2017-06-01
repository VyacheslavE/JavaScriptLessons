
var canvas=document.getElementById("games");
var context=canvas.getContext('2d');

let img = new Image();
img.src = "img/sprite1.png";


window.requestAnimationFrame(loop);

let positionImg = 0;
let count = 0;

function loop(){
    
    if(count>3){
   clearCanvas();

        context.drawImage(img, positionImg,0,184,320, 0,0,184,320);

        positionImg+=184;
        count=0;
        if(positionImg>=1472){positionImg=0;}
        }
    count++;
            window.requestAnimationFrame(loop);
}

function clearCanvas(){
        context.clearRect(0, 0, canvas.width, canvas.height); 
    }