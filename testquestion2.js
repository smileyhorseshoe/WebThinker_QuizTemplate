function setup() {
    createCanvas(600,600);
colorValue = 0;
xpos = 50;
ypos = 50;
}
function draw() {
for (let i = 1; i < 9; i++) {
circle(xpos,ypos,55);
fill(0,colorValue,0);
xpos = xpos + 50;
ypos = ypos + 50;
colorValue = colorValue + 40
}
}

