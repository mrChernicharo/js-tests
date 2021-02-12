const input = document.getElementById("mr-input");
let bpm = input.value;
let timer;

function changeInput() {
  if (input.value) bpm = input.value;
}

function playAnimation() {
  const interval = bpm;
  console.log(interval + "🔥");

  timer = setTimeout(() => {
    playAnimation();
  }, 60_000 / interval);
}

function stopAnimation() {
  clearTimeout(timer);
}
