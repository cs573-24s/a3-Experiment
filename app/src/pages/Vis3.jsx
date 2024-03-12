import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';


// Function to generate random data for the bubble charts

const Vis3 = (props) => {
  // State for percent difference input
  const [perceivedDifference, setPerceivedDifference] = useState('');

  useEffect(() => {
    d3.select("svg").remove()

    // Sample data for the first chart
    //const data1 = generateRandomData();
    const data1 = props.randomData;

    // Set up the SVG container for the rectangle
    const rectWidth = 500;
    const rectHeight = 500;
    const rectSvg = d3
      .select('#chart')
      .append('svg')
      .attr('width', rectWidth)
      .attr('height', rectHeight)
      .style('border', '1px solid black'); // Add border for visualization

    const xScale = d3.scaleLinear().domain([0, rectWidth]).range([0, (rectWidth - 30) / 2]);

    const yScale = d3.scaleLinear().domain([0, rectHeight]).range([rectHeight - 20, 0]);

    // Set up the first SVG container inside the rectangle
    const svg1 = rectSvg
      .append('svg')
      .attr('x', 150)
      .attr('y', 10)
      .attr('width', (rectWidth))
      .attr('height', rectHeight);

    // Create circles for the first chart inside the rectangle using pack layout
    const pack1 = d3.pack().size([(rectWidth - 30) / 2, rectHeight - 20]).padding(2);

    const root1 = d3.hierarchy({ children: data1 }).sum((d) => d.r);

    const nodes1 = pack1(root1).descendants();

    // Create circles for the bubbles
    const circles1 = svg1
      .selectAll('circle')
      .data(nodes1)
      .enter()
      .append('circle')
      .attr('cx', (d) => d.x)
      .attr('cy', (d) => d.y)
      .attr('r', (d) => d.r)
      .attr('fill', 'none')
      .attr('stroke', 'black');

    const dots1 = svg1
      .selectAll('.dot')
      .data(nodes1)
      .enter()
      .append('circle')
      .attr('class', 'dot')
      .attr('cx', (d) => d.x)
      .attr('cy', (d) => d.y)
      .attr('r', 3) // Set the radius of the dots to 3 pixels
      .attr('fill', (d) => (d.data.highlighted ? 'black' : 'none'));
  }, [props.randomData])

  return (
    <div>
      <div className="chart-container">
        <div id="chart"></div>
      </div>
    </div>
  );
};

export default Vis3;
