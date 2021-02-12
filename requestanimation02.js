let i = 1;
let frameId = 0;
const $ = (v) => document.querySelector(v);
const $$ = (v) => document.querySelectorAll(v);
const makeEl = (tag) => document.createElement(tag);
const appendEl = (el) => $(".quadro").append(el);

// document.body.append(`<${tag}></${tag}>`);
function repeatFrame() {
  console.log(i++);
  draw();
  frameId = requestAnimationFrame(repeatFrame);
}

function draw() {
  const div = makeEl("div");
  div.style = `width: 20px; height: 20px; background-color: red; position: absolute; top: ${Math.round(
    Math.random() * 1000
  ).toString()}px; left: ${Math.round(Math.random() * 1000).toString()}px`;
  appendEl(div);

  // div.style = { width: "20px", height: "20px", backgroundColor: "red" };
}

function playAnimation() {
  repeatFrame();
}

function stopAnimation() {
  cancelAnimationFrame(frameId);
  frameId = 0;
}
