
$(window).ready(graphEdit);

function graphEdit() {
  draw(90, '.graph1', '#FF3F6F');
  draw(80, '.graph2', '#7B90FF');
  draw(60, '.graph3', '#FFEB35');
  draw(90, '.graph4', '#8D33FF');
  draw(90, '.graph5', '#FF7F22');
  draw(70, '.graph6', '#47BDFF');
  draw(70, '.graph7', '#FFE70C');
  draw(80, '.graph8', '#ffffff');
}

function draw(max, classname, colorname) {
  let i = 1;
  let func1 = setInterval(function () {
    if (i < max) {
      color1(i, classname, colorname);
      i++;
    } else {
      clearInterval(func1);
    }
  }, 10);
}

function color1(i, classname, colorname) {
  $(classname).css({
    "background": "conic-gradient(" + colorname + " 0% " + i + "%, #373a42 " + i + "% 100%)"
  });
}
