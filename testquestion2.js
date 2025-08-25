function setup() {
    createCanvas(600,600);
let colorValue = 0;
let xpos = 50;
let ypos = 50;
let dia = 25
}
function draw() {
for (let i = 1; i < 9; i++) {
circle(xpos,ypos, dia);
fill(0,colorValue,0);
xpos = xpos + 50;
ypos = ypos + 50;
colorValue = colorValue + 40

}
}

