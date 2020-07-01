function createCanvas(elemId) {
  return d3
    .select(elemId)
    .append("svg")
    .attr("width", 400)
    .attr("height", 400);
}

function createCircle(elemSVG) {
  return elemSVG
    .append("circle")
    .attr("cx", 150)
    .attr("cy", 150)
    .attr("r", 50)
    .attr("fill", "red");
}

async function createChart(elemId) {
  let svg = await createCanvas(elemId);
  let circle = await createCircle(svg);
  return circle;
}

createChart("#chart");
