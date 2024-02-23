import logo from './logo.svg';
import './App.css';

function App() {
   // set the dimensions and margins of the graph
   var margin = {top: 10, right: 30, bottom: 40, left: 60},
   width = 560 - margin.left - margin.right,
   height = 500 - margin.top - margin.bottom;

   // append the svg object to the body of the page
   var svg = d3.select("#container")
   .append("svg")
   .attr("width", width + margin.left + margin.right)
   .attr("height", height + margin.top + margin.bottom)
   .append("g")
   .attr("transform",
         "translate(" + margin.left + "," + margin.top + ")");
   //read in data from csv
   let data = d3.csv("penglings.csv",
   function(data) {
     console.log(data.flipper_length_mm, " ", data.body_mass_g);
     // Add X axis
     var x = d3.scaleLinear()
       .domain([235, 170])
       .range([ width, 0 ]);
     svg.append("g")
       .attr("transform", "translate(0," + height + ")")
       .call(d3.axisBottom(x));
     // X axis label
     svg.append("text")
     .attr("font-family", "Arial")
     .attr("class", "x label")
     .attr("text-anchor", "end")
     .attr("x", width/2+margin.left)
     .attr("y", height + 35)
     .text("Flipper Length (mm)");

     // Add Y axis
     var y = d3.scaleLinear()
       .domain([2500, 6500])
       .range([ height, 0 ]);
     svg.append("g")
       .call(d3.axisLeft(y));
     // Y axis label:
     svg.append("text")
     .attr("font-family", "Arial")
     .attr("text-anchor", "end")
     .attr("transform", "rotate(-90)")
     .attr("y", -margin.left+15)
     .attr("x", -(margin.top+height/2-margin.bottom))
     .text("Body Mass (g)")

     //color scale
     var color = d3.scaleOrdinal()
     .domain(["Adelie", "Chinstrap", "Gentoo" ])
     .range(["#ED6A5A", "#8A89C0", "#05A8AA"])

     // Add dots
     svg.append("g")
     .selectAll("dot")
     .data(data)
     .enter()
     .append("circle")
       .attr("cx", function (d) { return x(d.flipper_length_mm); } )
       .attr("cy", function (d) { return y(d.body_mass_g); } )
       .attr("r", 10)
       .style("fill", function (d) { return color(d.species) } )
       .style("opacity", 0.8)
       .style("border", "solid")
       .style("border-width", "1px")
       .style("border-radius", "5px");


   });
  return (
    <div className="App">
      <div id="container"></div>
    </div>
  );
}

export default App;
