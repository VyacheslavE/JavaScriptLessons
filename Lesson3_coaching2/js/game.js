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
    jump: 5,
    madeJump: false,
    gravity: 0.9,
    grounded: false,
    base: 6,
    color: "rgb(26, 128, 38)",
    draw: function(){
        context.fillStyle = this.color;
        context.fillRect(this.x, this.y, this.width, this.height);
        //console.log("game started");
    }
};

var platform =[];
var platform_width = 120;
var platform_heigth = 10;
var pendulumFlag = true;

platform.push({
    x: canvas.width-150,
    y: canvas.height-50,
    width: platform_width,
    height: platform_heigth,
    pendulum: 1
});

platform.push({
    x: canvas.width-300,
    y: canvas.height-110,
    width: platform_width,
    height: platform_heigth,
    pendulum: 0
});

platform.push({
    x: canvas.width-200,
    y: canvas.height-180,
    width: platform_width,
    height: platform_heigth,
    pendulum: 0
});

platform.push({
    x: canvas.width-350,
    y: canvas.height-250,
    width: platform_width,
    height: platform_heigth,
    pendulum: 0
});

platform.push({
    x: canvas.width-550,
    y: canvas.height-280,
    width: platform_width,
    height: platform_heigth,
    pendulum: 0
});
//GROUND
platform.push({
    x: 0,
    y: canvas.height-5,
    width: canvas.width,
    height: platform_heigth,
    pendulum: 0
});

///////////////////////////////////////////////////////////////////////
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
    draw_platform();
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
    
    player.grounded = false;
    
    
    for(var i=0; i < platform.length; i++){
        var direction = collisionCheck(player, platform[i]);
        
        if(direction == "left" || direction == "right"){
            player.velX = 0;
        }
        else if(direction == "top"){
           player.velY *= -1;
           }
        else if(direction == "bottom"){
           player.madeJump = false;
            player.grounded = true;
            base = i;
           }
    }
    
    if(player.grounded){
        player.velY = 0;
        player.x +=platform[base].pendulum*2;        
    }
   /* if(player.y>=(canvas.height - player.height)){
        player.y = canvas.height - player.height;
        player.color = "rgb(26, 128, 38)";
        player.madeJump = false;
    }
    */
//////////////////////////////////////////////platform[0] move
    if((platform[0].x>=(canvas.width-platform_width))&&pendulumFlag){platform[0].pendulum = -1; pendulumFlag = false;}
    if((platform[0].x<=0) && (!pendulumFlag)){platform[0].pendulum = 1; pendulumFlag = true;}
    platform[0].x+=platform[0].pendulum;
}

function draw_platform(){
    context.fillStyle = '#444444';
    for(let i = 0; i < platform.length; i++){
        context.fillRect(platform[i].x,platform[i].y,platform[i].width, platform[i].height);
    }
}

function collisionCheck(character, platform){
    var vectorX = (character.x + (character.width/2)) - (platform.x + (platform.width/2));
    var vectorY = (character.y + (character.height/2)) - (platform.y + (platform.height/2));
    
    var halfWidth = (character.width/2) + (platform.width/2);
    var halfHeight = (character.height/2) + (platform.height/2);
    
    var collisionDirection = null;
    
    if(Math.abs(vectorX) < halfWidth && Math.abs(vectorY) < halfHeight){
        var offsetX = halfWidth - Math.abs(vectorX);
        var offsetY = halfHeight - Math.abs(vectorY);
       
        if(offsetX < offsetY){
        
            if(vectorX > 0){
                collisionDirection = "left";
                character.x += offsetX;
            }else{
                collisionDirection = "rigth";
                character.x -= offsetX;
            }
            
        }else{
            
            if(vectorY > 0){
                collisionDirection = "top";
                character.y += offsetY;
            }else{
                collisionDirection = "bottom";
                character.y -= offsetY;
            }
                   
           }
       }
    
    return collisionDirection;
}