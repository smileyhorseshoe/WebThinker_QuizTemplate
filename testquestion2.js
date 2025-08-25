function setup() {
    createCanvas(600,600);
colorValue = 0;
xpos = 50;
ypos = 50;
}
function draw() {
for (let count = 1; count < 10; i++) {
circle(xpos,ypos,25);
fill(colorValue);
xpos = xpos + 25;
ypos = ypos + 25;
colorValue = colorValue + 40
}
}

