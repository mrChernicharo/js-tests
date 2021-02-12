const input = document.getElementById("mr-input");
let bpm = input.value;
let timer;
let btnPress = 0;

function changeInput() {
  if (input.value && input.value >= 20 && input.value <= 500) {
    bpm = input.value;
  }
}

function playAnimation() {
  if (btnPress === 0) {
    animate();
    btnPress++;
  }
}

function animate() {
  const interval = bpm;
  console.log(interval + "🔥");

  timer = setTimeout(() => {
    animate();
  }, 60_000 / interval);
}

function stopAnimation() {
  btnPress = 0;
  clearTimeout(timer);
}

// Uma maneira razoável de atualizar o intervalo sem parar a animação
// chamando setTimeout entro
