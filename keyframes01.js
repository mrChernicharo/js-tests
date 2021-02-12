const box1 = document.querySelector(".box1");
box1.classList.add("closed", "shrink");

box1.addEventListener("click", (e) => {
  console.log(e);

  if (box1.classList.contains("open")) {
    box1.classList.add("closed");
    box1.classList.remove("open");
  } else {
    box1.classList.add("open");
    box1.classList.remove("closed");
  }

  console.log(box1.classList);
});

box1.addEventListener("mouseover", (e) => {
  console.log(e);

  if (box1.classList.contains("grow")) {
    box1.classList.add("shrink");
    box1.classList.remove("grow");
  } else {
    box1.classList.add("grow");
    box1.classList.remove("shrink");
  }

  console.log(box1.classList);
});
