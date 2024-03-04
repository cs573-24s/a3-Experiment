import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

export default function Vis1() {
  const chartContainer = useRef(null);

  useEffect(() => {
    const generateRandomData = () => {
      const data = [];
      for (let i = 0; i < 5; i++) {
        data.push({
          label: `Data ${i + 1}`,
          value: Math.round(Math.random() * 100)
        });
      }
      
      // Randomly select two indices to highlight
      const indicesToHighlight = [];
      while (indicesToHighlight.length < 2) {
        const index = Math.floor(Math.random() * 5);
        if (!indicesToHighlight.includes(index)) {
          indicesToHighlight.push(index);
        }
      }

      for (let i = 0; i < 5; i++) {
        data[i].highlighted = indicesToHighlight.includes(i);
      }

      return data;
    };

    const randomData = generateRandomData();

    const width = 400;
    const height = 400;
    const margin = { top: 20, right: 20, bottom: 30, left: 40 };

    const svg = d3.select(chartContainer.current)
      .append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left}, ${margin.top})`);

    const xScale = d3.scaleBand()
      .domain(randomData.map(d => d.label))
      .range([0, width])
      .padding(0.1);

    const yScale = d3.scaleLinear()
      .domain([0, 100])
      .range([height, 0]);

    svg.selectAll('rect')
      .data(randomData)
      .enter()
      .append('rect')
      .attr('x', d => xScale(d.label))
      .attr('y', d => yScale(d.value))
      .attr('width', xScale.bandwidth())
      .attr('height', d => height - yScale(d.value))
      .attr('fill', 'white')
      .attr('stroke', 'black')
      .attr('stroke-width', 1);

      const highlightedData = randomData.filter(d => d.highlighted);
      svg.selectAll('circle')
        .data(highlightedData)
        .enter()
        .append('circle')
        .attr('cx', d => xScale(d.label) + xScale.bandwidth() / 2) 
        .attr('cy', d => yScale(d.value) + (height - yScale(d.value)) / 2)
        .attr('r', 3) 
        .attr('fill', 'black'); 

    const xAxis = d3.axisBottom(xScale);
    svg.append('g')
      .attr('transform', `translate(0, ${height})`)
      .call(xAxis)
      .selectAll('text')
      .remove();;

    const yAxis = d3.axisLeft(yScale)
      .tickValues([0, 100])
      .tickFormat(d3.format(''));

    svg.append('g')
      .call(yAxis)
      .selectAll('.tick:not(:first-of-type) line')
      .attr('stroke', 'none');

    svg.append('line') // x axis baseline
      .attr('x1', 0)
      .attr('y1', height)
      .attr('x2', width)
      .attr('y2', height)
      .attr('stroke', 'black')
      .attr('stroke-width', 1);

    svg.append('line') // y axis baseline
      .attr('x1', 0)
      .attr('y1', height)
      .attr('x2', 0)
      .attr('y2', 0)
      .attr('stroke', 'black')
      .attr('stroke-width', 1);

  }, []);

  return <div ref={chartContainer} style={{ margin: 'auto' }}></div>;
}
