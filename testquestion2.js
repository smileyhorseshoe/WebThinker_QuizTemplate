let colorValue = 0;
let xpos = 50;
let ypos = 50;
let dia = 25
function setup() {
    createCanvas(600,600);
}
function draw() {
for (let i = 1; i < 11; i++) {
fill(0,colorValue,0);
circle(xpos,ypos, dia);
xpos = xpos + 60;
ypos = ypos + 60;
colorValue = colorValue + 40


}
}
