
async function makePlot(){
    const defaultURL = "/city";
    let data = await d3.json(defaultURL);
    data = [data];
    const layout = { margin: { t: 30, b: 100 } };
    Plotly.plot("chart", data, layout);
}

function updatePlotly(newdata) {
    Plotly.restyle("chart", "x", [newdata.x]);
    Plotly.restyle("chart", "y", [newdata.y]);
}

// Get new data whenever the dropdown selection changes
async function getData(route) {
    console.log(route);
    let data = await d3.json(`/${route}`);
    updatePlotly(data);
}

makePlot();

// async function makePlot(){
//     const defaultURL = "/skill";
//     let data = await d3.json(defaultURL);
//     data = [data];
//     const layout = { margin: { t: 30, b: 100 } };
//     Plotly.plot("chart", data, layout);
// }

// function updatePlotly(newdata) {
//     Plotly.restyle("chart", "x", [newdata.x]);
//     Plotly.restyle("chart", "y", [newdata.y]);
// }

// // Get new data whenever the dropdown selection changes
// // async function getData(route) {
// //     console.log(route);
// //     let data = await d3.json(`/${route}`);
// //     updatePlotly(data);
// // }

// makePlot();

// async function makePlot_city(){
//     const defaultURL = "/city";
//     let data_city = await d3.json(defaultURL);
//     data_city = [data_city];
//     const layout = { margin: { t: 30, b: 100 } };
//     Plotly.plot("chart", data_city, layout);
// }

// function updatePlotly(newdata) {
//     Plotly.restyle("chart", "x", [newdata.x]);
//     Plotly.restyle("chart", "y", [newdata.y]);
// }

// // Get new data whenever the dropdown selection changes
// async function getData(route) {
//     console.log(route);
//     let data = await d3.json(`/${route}`);
//     updatePlotly(data);
// }

// makePlot_city();

// async function makePlot_company(){
//     const defaultURL = "/company";
//     let data_company = await d3.json(defaultURL);
//     data_company = [data_company];
//     const layout = { margin: { t: 30, b: 100 } };
//     Plotly.plot("chart", data_company, layout);
// }

// function updatePlotly_company(newdata) {
//     Plotly.restyle("chart", "x", [newdata.x]);
//     Plotly.restyle("chart", "y", [newdata.y]);
// }

// // Get new data whenever the dropdown selection changes
// async function getData(route) {
//     console.log(route);
//     let data = await d3.json(`/${route}`);
//     updatePlotly_company(data);
// }

// makePlot_c();


// This is a new buble chart for companies
// Get new data whenever the dropdown selection changes

// async function getData(route) {
//     console.log(route);
//     let data = await d3.json(`/${route}`);
//     console.log(data)
// }


// // chart = {
//     const root = getData(/company);
//     console.log(root)
    // const svg = d3.create("svg")
    //     .attr("viewBox", [0, 0, width, height])
    //     .attr("font-size", 10)
    //     .attr("font-family", "sans-serif")
    //     .attr("text-anchor", "middle");
  
    // const leaf = svg.selectAll("g")
    //   .data(root.value())
    //   .join("g")
    //     .attr("transform", d => `translate(${d.x + 1},${d.y + 1})`);
  
    // leaf.append("circle")
    //     .attr("id", d => (d.name = DOM.uid("leaf")).id)
    //     .attr("r", d => d.r)
    //     .attr("fill-opacity", 0.7)
    //     .attr("fill", d => color(d.data.group));
  
    // leaf.append("clipPath")
    //     .attr("id", d => (d.clipUid = DOM.uid("clip")).id)
    //   .append("use")
    //     .attr("xlink:href", d => d.leafUid.href);
  
    // leaf.append("text")
    //     .attr("clip-path", d => d.clipUid)
    //   .selectAll("tspan")
    //   .data(d => d.data.name.split(/(?=[A-Z][^A-Z])/g))
    //   .join("tspan")
    //     .attr("x", 0)
    //     .attr("y", (d, i, nodes) => `${i - nodes.length / 2 + 0.8}em`)
    //     .text(d => d);
  
    // leaf.append("title")
    //     .text(d => `${d.data.title}\n${format(d.value)}`);
      
    // return svg.node();
//   }