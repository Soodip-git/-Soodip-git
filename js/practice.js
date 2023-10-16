let particles = document.getElementById("particles");
let border = ["50%", "0%"];
let colors = ["#FF6B6B", "#FFE66D", "#4472CA"];

function createParticle(event) {
  let x = event.clientX;
  let y = event.clientY;
  let color = Math.floor(Math.random() * colors.length);

  let div = document.createElement("div");
  div.style.position = "absolute";
  div.style.marginLeft = x + "px";
  div.style.marginTop = y + "px";
  div.style.width = "10px";
  div.style.borderTop = "5px solid transparent";
  div.style.borderRight = "5px solid transparent";
  div.style.borderLeft = "5px solid transparent";
  div.style.borderBottom = "10px solid " + colors[color];
  div.style.animation = "move 5s ease-in infinite";
  particles.appendChild(div);
  setTimeout(
    function () {
      div.remove();
    }
    , 5000);
}

function getParticles() {
  let np = document.documentElement.clientWidth / 40;
  particles.innerHTML = "";
  for (let i = 0; i < np; i++) {
    let w = document.documentElement.clientWidth;
    let h = document.documentElement.clientHeight;
    let rndw = Math.floor(Math.random() * w) + 1;
    let rndh = Math.floor(Math.random() * h) + 1;
    let widthpt = Math.floor(Math.random() * 8) + 5;
    let opty = Math.floor(Math.random() * 4) + 1;
    let anima = Math.floor(Math.random() * 12) + 8;
    let bdr = Math.floor(Math.random() * 2);
    let color = Math.floor(Math.random() * 3);

    let div = document.createElement("div");
    div.style.position = "absolute";
    div.style.marginLeft = rndw + "px";
    div.style.marginTop = rndh + "px";
    div.style.width = widthpt + "px";
    div.style.height = widthpt + "px";
    div.style.opacity = opty;
    div.style.backgroundColor = colors[color];
    div.style.borderRadius = border[bdr];
    div.style.animation = "move " + anima + "s ease-in infinite";
    particles.appendChild(div);
  }
}

function main(event) {
  getParticles();
  particles.addEventListener("click", createParticle);
}

window.addEventListener("resize", main);
window.addEventListener("load", main);