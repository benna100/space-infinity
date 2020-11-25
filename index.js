console.log("script initiated");

let pointsSpan = document.querySelector("span.points");
console.log(pointsSpan);

let points = 0;
let spacebarDown = false;
document.addEventListener("keydown", (event) => {
  if (event.code === "Space") {
    spacebarDown = true;
  }
});

document.addEventListener("keyup", (event) => {
  if (event.code === "Space") {
    spacebarDown = false;
    points = 0;
    renderPoints(points);
  }
});

setInterval(() => {
  if (spacebarDown) {
    points++;
  }

  if (points > 9) {
    console.log("good job!");
  }

  renderPoints(points);
}, 1000);

function renderPoints(points) {
  pointsSpan.innerHTML = points;
}
