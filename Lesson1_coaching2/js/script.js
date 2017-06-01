var canvas=document.getElementById("games");
var context=canvas.getContext('2d');

context.fillStyle = "#eb2727";
context.fillRect(20, 20, 150, 60);

context.strokeStyle="#eb2727";
context.strokeRect(20,20,150,60);

context.beginPath();
context.arc(320,175,50,0,2*Math.PI);
context.stroke();
context.fillStyle = "#7b720c";
context.fill();

context.font = "30px Impact";
context.fillStyle = "#0c7b15";
context.fillText("Hellow everybody!", 10, 150);
context.strokeStyle = "#08390c";
context.strokeText("Hellow everybody!", 10, 150);
