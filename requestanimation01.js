let i = 1;
let frameId = 0;
let frameId2 = 0;
const $ = (v) => document.querySelector(v);
const $$ = (v) => document.querySelectorAll(v);
const makeEl = (tag) => document.createElement(tag);
const appendEl = (el) => $(".quadro").append(el);

// document.body.append(`<${tag}></${tag}>`);
function repeatFrame() {
  console.log(i++);
  frameId = requestAnimationFrame(repeatFrame);
}

function repeatFrame2() {
  // console.log("🔥");
  console.log(new Date().getTime());
  draw();
  frameId2 = requestAnimationFrame(repeatFrame2);
}

function draw() {
  const div = makeEl("div");
  div.style =
    "width: 20px; height: 20px; background-color: red; position: inline";
  appendEl(div);

  // div.style = { width: "20px", height: "20px", backgroundColor: "red" };
}

function playAnimation() {
  repeatFrame();
}
function playAnimation2() {
  repeatFrame2();
}
function stopAnimation() {
  cancelAnimationFrame(frameId);
  frameId = 0;
}
function stopAnimation2() {
  cancelAnimationFrame(frameId2);
  frameId2 = 0;
}
