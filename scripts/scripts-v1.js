function getData(fileName) {
  return d3.json(fileName);
}

function createCanvas(elemId) {
  return d3
    .select(elemId)
    .append("svg")
    .attr("height", 400)
    .attr("width", 400);
}

function createBarChart() {
  return getData("./data/building.json").then(function(d) {
    d.forEach(d => (d.height = +d.height));
    let buildings = d.map(build => build.name);
    let svg = createCanvas("#chart");
    let rectangles = svg.selectAll("rect").data(d);
    var y = d3
      .scaleLinear()
      .domain([0, 828])
      .range([0, 400]);
    var x = d3
      .scaleBand()
      .domain(buildings)
      .range([0, 400])
      .paddingInner(0.3)
      .paddingOuter(0.3);
    rectangles
      .enter()
      .append("rect")
      .attr("height", (d, i) => y(d.height))
      .attr("width", x.bandwidth)
      .attr("fill", "red")
      .attr("x", (d, i) => x(d.name));
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

createBarChart();
