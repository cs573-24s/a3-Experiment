Assignment 3 - Replicating a Classic Experiment  
===

Intro
---
For this project I wanted to test the effectiveness of different types of area encoded visualizations. Specifically I compared regular treemaps, voronoi treemaps, and bubble charts, and I also included a bar chart as a baseline measurement since aligned bar charts are considered one of the best encodings to display and compare numeric values. I hypothesized that the bar chart would be most easily read by participants. For the area charts I thought that the most normal/comparable shapes would perform better, so I thought that the regular treemap would perform 2nd best, followed by the bubble chart, then lastly the voronoi treemap. For each visualization I generated 6 random values from 1-100, and selected two for the participant to compare. I tested 10 participants, each of which ran through the 80 run trial in order to get 800 data points (200 per visual). After collecting the data I used python to compile the results, calculate the error, and calculate the adjusted error. I then used R and gg plot to calculate and plot the average adjusted error for each visualization, as well as the bootstrapped 95% confidence intervals.

Charts
---

### Bar Chart

