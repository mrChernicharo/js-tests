const element = document.querySelector("#quadrado");
let start, bstart;
let id;

function forward(timestamp) {
  if (start === undefined) start = timestamp;
  const elapsed = timestamp - start;

  // `Math.min()` is used here to make sure that the element stops at exactly 400px.
  console.log(Math.min(0.1 * elapsed, 400));
  element.style.transform =
    "translateX(" + Math.min(0.1 * elapsed, 400) + "px)";

  if (elapsed < 4000) {
    // Stop the animation after 4 seconds
    id = requestAnimationFrame(forward);
  }
}

function backwards(timestamp) {
  if (bstart === undefined) bstart = timestamp;
  const elapsed = timestamp - bstart;

  // `Math.min()` is used here to make sure that the element stops at exactly 400px.
  console.log(Math.min(0.1 * elapsed, 400));
  element.style.transform =
    "translateX(-" + Math.min(0.1 * elapsed, 400) + "px)";

  if (elapsed < 4000) {
    // Stop the animation after 4 seconds
    id = requestAnimationFrame(backwards);
  }
}

function playAnimation() {
  id = requestAnimationFrame(forward);
}

function playBack() {
  id = requestAnimationFrame(backwards);
}
function stopAnimation() {
  console.log("stop");
  cancelAnimationFrame(id);
  element.style.transform = "translateX(-)";
}
