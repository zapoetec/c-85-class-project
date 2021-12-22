canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
roverwidth=100;
roverheight=90;
backgroundimage="mars.jpg";
roverimage="rover.png";
roverx=102;
rovery=50;
function add(){
    backgroundimage_tag=new Image();
    backgroundimage_tag.onload = uploadbackgroundimage;
    backgroundimage_tag.src=backgroundimage;
    roverimage_tag=new Image();
    roverimage_tag.onload = uploadroverimage;
    roverimage_tag.src=roverimage;
}
function uploadbackgroundimage(){
   ctx.drawImage(backgroundimage_tag,0,0,canvas.width,canvas.height);
}
function uploadroverimage(){
    ctx.drawImage(roverimage_tag,roverx,rovery,roverwidth,roverheight);
 }
 window.addEventListener("keydown", my_keydown);
 function my_keydown(e)
 {
     keyPressed=e.keyCode;
     console.log(keyPressed);
     if (keyPressed == "38")
     {
       up();
       console.log("up");
     }
     if (keyPressed == "37")
     {
       left();
       console.log("left");
     }
     if (keyPressed == "40")
     {
       down();
       console.log("down");
     }
     if (keyPressed == "39")
     {
       right();
       console.log("right");
     }
 }
 function up()
 {
     if ( rovery >= 0){
         rovery=rovery-10;
         console.log("x and y position of rover x=" + roverx+", y="+rovery);
         uploadbackgroundimage();
         uploadroverimage();
     }
 }
 function left()
 {
     if ( roverx >= 0){
         roverx=roverx-10;
         console.log("x and y position of rover x=" + roverx+", y="+rovery);
         uploadbackgroundimage();
         uploadroverimage();
     }
 } 
 function down()
 {
     if ( rovery <= 700){
         rovery=rovery+25;
         console.log("x and y position of rover x=" + roverx+", y="+rovery);
         uploadbackgroundimage();
         uploadroverimage();
     }
 } 
 function right()
 {
     if ( roverx <= 600){
         roverx=roverx+10;
         console.log("x and y position of rover x=" + roverx+", y="+rovery);
         uploadbackgroundimage();
         uploadroverimage();
     }
 }