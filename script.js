/*
fire the load event whent the page has been loaded with static files

getElementById is slightly faster than querySelector for larger applications
*/
window.addEventListener('load', function () {
  const canvas = this.document.getElementById('canvas1');
  // context variable that will be pased into draw as arg
  const ctx = canvas.getContext('2d');

  canvas.width = 600;
  canvas.height = 600;

  ctx.lineWidth = 30;
  // change the line color
  ctx.strokeStyle = 'green';
  // change the line edge
  ctx.lineCap = 'round';

  // change the default black color of rectangle
  ctx.fillStyle = 'blue';

  class Fractal {
    constructor(canvasWidth, canvasHeight) {
      this.canvasWidth = canvasWidth;
      this.canvasHeight = canvasHeight;
      this.size = this.canvasWidth * 0.4;
      this.sides = 4;
    }
    draw(context) {
      // save method create a snapshot of the current canvas state between save and resotre lines.
      // any drawing past restore() line will not be effected
      context.save();
      // // draws a rectangle, takes in X, Y, width, heigth
      // context.fillRect(0, 0, canvas.width / 2, canvas.height / 2);
      // set the rotation point in the center of the canvas
      context.translate(this.canvasWidth / 2, this.canvasHeight / 2);
      // X & Y values. 1 = original size ---  0.5 scales down to half the original size
      context.scale(1, 1);
      // rotation must be passed an argument 1 = center
      // Math.PI rotates it by 180 degrees / Math.PI * 2 by 360 degrees
      context.rotate(0);
      for (let i = 0; i < this.sides; i++) {
        // call the private method
        this.#drawLine(context);
        context.rotate((Math.PI * 2) / this.sides);
      }

      context.restore();
    }
    // private method to ABSTRACT out the inner workings of the drawing
    #drawLine(context) {
      context.beginPath();
      // upper left corner where X=0 & y=0;
      context.moveTo(0, 0);
      // lower right corner where X = canvas.width and y = canvas.height
      context.lineTo(this.size, 0);
      context.stroke();
    }
  }
  const fractal1 = new Fractal(canvas.width, canvas.height);
  fractal1.draw(ctx);
  class Particle {}
  class Rain {}
});
