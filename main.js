import "./style.css";

import { GameInterface } from 'simple-canvas-library';

let gi = new GameInterface();



gi.addDrawing(
  function ({ ctx, width, height, elapsed }) {
    // Pen settings...
ctx.strokeStyle = "rgb(50,160,190)";
ctx.lineWidth = 4;

let Sx = 100
let Sy = 80



// Start drawing- gemini helped me get started but I did the exact coordinates myself
//top 3 vertical lines
ctx.moveTo(Sx, Sy);
ctx.lineTo(Sx, Sy+70);
ctx.stroke();
ctx.moveTo(Sx+100, Sy);
ctx.lineTo(Sx+100, Sy+70);
ctx.stroke();
ctx.moveTo(Sx+200, Sy);
ctx.lineTo(Sx+200, Sy+70);
ctx.stroke();
//bottom 3 vertical lines
ctx.moveTo(Sx, Sy+150);
ctx.lineTo(Sx, Sy+220);
ctx.stroke();
ctx.moveTo(Sx+100, Sy+150);
ctx.lineTo(Sx+100, Sy+220);
ctx.stroke();
ctx.moveTo(Sx+200, Sy+150);
ctx.lineTo(Sx+200, Sy+220);
ctx.stroke();
//the 2 inside diagnol lines
ctx.moveTo(Sx, Sy+70);
ctx.lineTo(Sx+100, Sy+150);
ctx.stroke();
ctx.moveTo(Sx+100, Sy+70);
ctx.lineTo(Sx+200, Sy+150);
ctx.stroke();
//the top and bottom diagnols
ctx.moveTo(Sx, Sy);
ctx.lineTo(Sx+100, Sy-80);
ctx.stroke();
ctx.moveTo(Sx+200, Sy);
ctx.lineTo(Sx+100, Sy-80);
ctx.stroke();
ctx.moveTo(Sx, Sy+220);
ctx.lineTo(Sx+100, Sy+300);
ctx.stroke();
ctx.moveTo(Sx+200, Sy+220);
ctx.lineTo(Sx+100, Sy+300);
ctx.stroke();
//closing lines
ctx.moveTo(Sx+200, Sy+70);
ctx.lineTo(Sx+150, Sy+110);
ctx.stroke();
ctx.moveTo(Sx, Sy+150);
ctx.lineTo(Sx+50, Sy+110);
ctx.stroke();


  }
)


gi.run();


