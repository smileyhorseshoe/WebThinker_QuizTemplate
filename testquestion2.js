function setup() {
    createCanvas(600,400);
colorValue = 0;
xpos = 0;
ypos = 0;
}
function draw() {
for (let count = 1; count < 10; count++) {
circle(xpos,ypos,25)
fill(colorValue)
xpos = xpos + 50
ypos = ypos - 50
colorValue = colorValue
}
}
