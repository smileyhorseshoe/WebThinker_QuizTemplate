function setup() {
    createCanvas(600,600);
colorValue = 0;
xpos = 50;
ypos = 50;
}
function draw() {
for (let count = 1; count < 10; i++) {
circle(xpos,ypos,50)
fill(colorValue)
xpos = xpos + 50
ypos = ypos + 50
colorValue = colorValue + 40
}
}

