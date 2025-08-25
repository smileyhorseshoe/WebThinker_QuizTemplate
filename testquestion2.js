
function setup() {
    createCanvas(600,600);
}
function draw() {
let xpos = 50;
let ypos = 50;
for (let i = 1; i < 11; i++) {
fill(0,colorValue,0);
circle(xpos,ypos, dia);
xpos = xpos + 50;
ypos = ypos + 50;
colorValue = colorValue + 40


}
}
