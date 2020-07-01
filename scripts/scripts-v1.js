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

async function createMultipleCircles(elemId, svgData) {
  let svg = await createCanvas(elemId);

  return svg
    .selectAll("circle")
    .data(svgData)
    .enter()
    .append("circle")
    .attr("cx", (d, i) => {
      return i * 50 + 25;
    })
    .attr("cy", 25)
    .attr("r", d => {
      return d;
    })
    .attr("fill", "red");
}

createMultipleCircles("#chart", [25, 20, 10, 5, 12, 15]);
