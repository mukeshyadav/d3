function getData(fileName) {
  return d3.json(fileName);
}

function createCanvas(elemId) {
  return d3
    .select(elemId)
    .append("svg")
    .attr("height", 500)
    .attr("width", 600);
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

createBarChart();
