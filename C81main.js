var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var color = "red";
var mouse_event = "empty";
var last_position_of_x,last_position_of_y;
var width = 1;
canvas.addEventListener("mousedown",my_mouse_down);
function my_mouse_down(e){
    mouse_event = "mouseDown";
}
canvas.addEventListener("mouseup",my_mouse_up);
function my_mouse_up(e){
    mouse_event = "mouseup";
}
canvas.addEventListener("mouseleave",my_mouse_leave);
function my_mouse_leave(e){
    mouse_event = "mouseleave";
}
canvas.addEventListener("mousemove",my_mouse_move);
function my_mouse_move(e){
    var current_position_of_x=e.clientx-canvas.offsetLeft;
    var current_position_of_y=e.clienty-canvas.offsetTop;
    if (mouse_event=="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth;
        console.log("last_position_of_x_and_y=");
        console.log("x="+last_position_of_x+"y="+last_position_of_y);
        ctx.moveTo(last_position_of_x,last_position_of_y);
        console.log("current_position_of_x_and_y=");
        console.log("x="+current_position_of_x+"y="+current_position_of_y);
        ctx.lineTo(current_position_of_x,current_position_of_y);
        ctx.stroke();
    }
    last_position_of_x=current_position_of_x;
    last_position_of_y=current_position_of_y;
}
