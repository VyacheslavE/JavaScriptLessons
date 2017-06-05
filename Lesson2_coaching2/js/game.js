var canvas=document.getElementById("game");
var context=canvas.getContext('2d');

var gameStrarted = false;
var keys = [];

var player = {
    width: 20,
    height: 25,
    x: 5,
    y: canvas.height - 25, //canvas.height - this.height -не работает
    speed: 5,
    velX: 0,
    velY: 0,
    inertia: 0.2,
    speed: 5,
    friction: 0.8,
    jump: 7,
    madeJump: false,
    gravity: 0.9,
    color: "rgb(26, 128, 38)",
    draw: function(){
        context.fillStyle = this.color;
        context.fillRect(this.x, this.y, this.width, this.height);
        //console.log("game started");
    }
};

document.body.addEventListener('keydown', function(event){
   if(event.keyCode=='13' && !gameStrarted){
       startGame();
   } 
    keys[event.keyCode] = true;
});

document.body.addEventListener('keyup', function(event){
    keys[event.keyCode] = false;
});

intro_screeen();

function intro_screeen(){
context.font='50px Helvetica';
context.fillStyle="#0099CC";
context.textAlign="center";
context.fillText("HTML5 Game", canvas.width/2, canvas.height/2);

context.font='20px Georgia';
context.fillText("Press enter to start", canvas.width/2, canvas.height/2+50);

context.fillStyle="#0c546c";
context.textAlign="left";
context.font='10px Georgia';
context.fillText("Разработано: Евлахов Вячеслав. Версия игры: v0.0.1", 10, canvas.height-10);
}

function clearCanvas(){
    context.clearRect(0, 0, canvas.width, canvas.height); 
    }

function startGame(){
    clearCanvas();
    gameStrarted = true;
    setInterval(function(){
        clearCanvas();
        loop();
    }, 1000/30);
}

function loop(){
    //console.log("game started");
    player.draw();
    
    //left key
    if((keys[37]||keys[65])&&(player.velX>-player.speed)){
        player.velX--;
    }
    //right key
    if((keys[39] || keys[68])&&(player.velX<player.speed)){
         player.velX++;
    }
    
    //left up - slow down - inertia
    if((!keys[37])&&(player.velX<0)){
        player.velX +=player.inertia;
        if(player.velX>0){
            player.velX=0;
        }
    }
    //right up - slow down - inertia
    if((!keys[39])&&(player.velX>0)){
         player.velX -=player.inertia;
        if(player.velX<0){
            player.velX=0;
                         }
    }
    
        player.x += player.velX;
    //could be friction instead i've used inertion
        //player.velX *= friction;
    ///////////////////////////////////////////////////JUMPS
    if((keys[38] || keys[32] || keys[74]  || keys[87])&&!player.madeJump){
        player.velY = -player.jump*2;
        player.color = "rgb(40, 221, 61)";
        player.madeJump = true;
    }
    
    player.y += player.velY;
    player.velY += player.gravity;
    
    if(player.y>=(canvas.height - player.height)){
        player.y = canvas.height - player.height;
        player.color = "rgb(26, 128, 38)";
        player.madeJump = false;
    }
    
}