
var canvas=document.getElementById("games");
var context=canvas.getContext('2d');


context.beginPath();
context.arc(320,210,50,0,2*Math.PI);
context.fillStyle = "#7b720c";
context.fill();

window.requestAnimationFrame(loop);

let x=0;
let flag = true;
function loop(){
   clearCanvas();
    
    //draw Rectangle
    context.fillRect(x,10,80,100);
    
    //draw circle
    context.beginPath();
    context.arc(canvas.width/2,canvas.height/2,x/2,0,2*Math.PI);
    context.stroke();
    context.fillStyle = "#7b720c";
    context.fill();
    
    if(flag){
        x++;
        if(x==300){flag=false;}
    }else if(!flag){
        x--; 
        if(x==10){flag=true;}
         }
     window.requestAnimationFrame(loop);
}

       function clearCanvas(){
        context.clearRect(0, 0, canvas.width, canvas.height); 
    }