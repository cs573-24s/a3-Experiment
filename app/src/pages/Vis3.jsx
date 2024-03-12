import React, { useState } from 'react';
import * as d3 from 'd3';

// Function to generate random data for the bubble charts
function generateRandomData() {
  return Array.from({ length: Math.random() * (10 - 5) + 5 }, (_, index) => ({
    x: Math.random() * (300 - 100) + 100,
    y: Math.random() * (150 - 100) + 100,
    r: Math.random() * 20,
    e: index === 1 ? 'a' : index === 2 ? 'b' : undefined,
  }));
}

const MyComponent = () => {
  // State for perceived difference input
  const [perceivedDifference, setPerceivedDifference] = useState('');

  // Sample data for the first chart
  const data1 = generateRandomData();

  // Set up the SVG container for the rectangle
  const rectWidth = 700;
  const rectHeight = 250;
  const rectSvg = d3
    .select('body')
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
    .attr('width', (rectWidth - 30) / 2)
    .attr('height', rectHeight - 20);

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
    .attr('fill', (d) => (d.data.e === 'a' ? 'black' : d.data.e === 'b' ? 'black' : 'none'));

  const calculateAndDisplayError = () => {
    const perceivedDifferenceValue = parseFloat(perceivedDifference);

    const markedData1 = data1.filter((d) => d.e === 'a'); // Assuming 'a' represents the red bubble
    const markedData2 = data1.filter((d) => d.e === 'b');

    // Check if there is marked data for both charts
    if (markedData1.length === 1 && markedData2.length === 1) {
      // Calculate the true difference between the two red bubbles' radii
      const trueDifference = Math.abs((markedData1[0].r / markedData2[0].r) * 50);

      // Calculate the error as the absolute difference between perceived and true difference
      const error = Math.abs(perceivedDifferenceValue - trueDifference);

      // Scale the error using Cleveland and McGill’s log-base-2 error equation
      const scaledError = Math.log2(1 / 8 + error);

      // Display the result
      document.getElementById('perceived-output').innerText = `Perceived Difference: ${perceivedDifferenceValue}`;
      document.getElementById('true-output').innerText = `True Difference: ${trueDifference}`;
      document.getElementById('scaled-error-output').innerText = `Scaled Error: ${scaledError}`;
    } else {
      // Handle the case where the marked data is not available for both charts
      console.error('Error: Unable to find marked data for both charts.');
    }
  };

  return (
    <div>
      <div className="chart-container">
        <div className="chart" id="chart1"></div>
        <div className="chart" id="chart2"></div>
      </div>

      <div id="input-container">
        <label htmlFor="perceived-difference">Perceived Difference:</label>
        <input
          type="number"
          id="perceived-difference"
          placeholder="Enter perceived difference"
          value={perceivedDifference}
          onChange={(e) => setPerceivedDifference(e.target.value)}
        />
        <button onClick={calculateAndDisplayError}>Calculate Error</button>
        <p id="perceived-output"></p>
        <p id="true-output"></p>
        <p id="scaled-error-output"></p>
      </div>
    </div>
  );
};

export default MyComponent;
