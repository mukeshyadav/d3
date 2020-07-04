function getData(fileName) {
  return d3.json(fileName);
}

function createCanvas(elemId) {
  return d3
    .select(elemId)
    .append("svg")
    .attr("height", 1000)
    .attr("width", 1000);
}

function createBarChart() {
  return getData("./data/building.json").then(function(d) {
    d.forEach(d => (d.height = +d.height));
    let svg = createCanvas("#chart");
    let rectangles = svg.selectAll("rect").data(d);
    rectangles
      .enter()
      .append("rect")
      .attr("height", (d, i) => {
        return d.height;
      })
      .attr("width", 20)
      .attr("fill", "red")
      .attr("x", (d, i) => {
        return i * 30;
      });
  });
}

function createCircle() {
  return getData("./data/building.json").then(d => {
    d.forEach(dval => (dval.height = +dval.height));
    let svg = createCanvas("#chart");
    let circles = svg.selectAll("circle").data(d);

    circles
      .enter()
      .append("circle")
      .attr("cx", (d, i) => {
        return i * 30 + 30;
      })
      .attr("cy", (d, i) => {
        return i * 30;
      })
      .attr("r", (d, i) => {
        return i * 10;
      });
  });
}

createCircle();
