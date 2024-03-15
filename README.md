Assignment 3 - Replicating a Classic Experiment  
===
## Jazz Group Members：
**Dong Tang, Anthony Chen, Songling Li, Jinqin Xiong**

## Page link:
link: https://dongtang3.github.io/a3-Experiment/

## Our repository link
link: https://github.com/dongtang3/a3-Experiment

# Our Study research
## Introduction:
According to Cleveland and McGill [1], our project offers an exciting opportunity to delve into the world of scientific experimentation and data visualization. By replicating classic experiments and applying modern methodologies, you'll gain valuable insights into the effectiveness of different visualization techniques. Get ready to shine as a data scientist and uncover fascinating findings that contribute to the field of data visualization! In this endeavor, we embark on a journey to replicate a classic experiment, echoing the pioneering works of luminaries such as Cleveland and McGill, and building upon modern methodologies championed by Heer and Bostock. 

## Survey
- In this assignment, we lay the groundwork for a controlled experiment that seeks to answer pressing questions about visualization techniques. Drawing inspiration from seminal works and contemporary research, we design an experiment that stands as a testament to the scientific method's power. 
- Every single graph generated is unique, made by a random number generator for data point having a value ranging from 1-100 and generating between 5-10 data points each, in each graph 2 bars are made black dot to indicate that they are the ones to compare. 
- Additionally there are 4 different types of bar graphs used in the experiment, Vertical Bar Chart, Upside Down Bar Chart, Bar Chart Facing Right, and Bar Chart Facing Left. The choice between which chart to display is random, however, they are all limited to 20 attempts each per survey allowing for a total of 80 datapoints. 
- Additionally, the data is collected through a button where if pressed a prompt will appear asking for how big the smaller marked bar is compared to the smaller one in a percentage (i.e. 100% = 100). After all 80 graphs are marked a CSV will download where every each column is a type of graph and the data in the columns is the log2(error) of the data.


# Charts for Data Visualization 
- In our study, we examined the efficacy of different visualization techniques in helping users discern point sizes. Our application, developed using React, allowed participants to interact with the visualizations and provided immediate feedback after each task. With 16 individuals partaking, we amassed 240 evaluations per visualization across four distinct chart types, rendered using D3.js.<br>

We selected the following four visualizations for our experiment:

- **Stacked Charts**: These are enhanced bar charts where each bar is subdivided into smaller segments that represent different subcategories. The collective height of these segments illustrates the total value. Stacked charts are particularly useful for observing overall trends and comparing the make-up of different categories.


- **Donut Charts**: A variant of pie charts, these display data in a ring shape, allowing for a visually appealing comparison of parts to a whole. They are effective for showing categorical data and providing a quick snapshot of the proportionate distribution.

- **Tree Map**: Tree maps are used for displaying hierarchical data via nested rectangles, with each rectangle's size and color representing a particular dimension of the data set. They are efficient in space utilization and effective for showing attributes of data such as size and category.

- **Bubble Charts**: These charts present multi-dimensional data, with each bubble representing a data point and the size and position of the bubble corresponding to data values. Bubble charts are excellent for visualizing complex data sets where each bubble can encapsulate multiple data dimensions.<br>

Each visualization technique was chosen for its unique strengths in representing data and assisting viewers in understanding complex information patterns.



In this assignment you'll implement a simple controlled experiment using some of the visualizations you’ve been building in this class. 
You'll need to develop support code for the experiment sequence, results file output, and other experiment components. 
(These are all simple with Javascript buttons and forms.)
The main goals for you are to a) test at least three competing visualizations or experiment conditions, b) implement data/stimuli generation and error calculation functions (if following the baseline, use Cleveland and McGill's 1984 paper and Heer and Bostock's 2010 replication), c) run the experiment with 10 participants (or equivalent number of trials), and d) do basic analysis and reporting of the results.

For this assignment you should aim to write everything from scratch. For experimentation it is often necessary to control all elements of the chart.
You should definitely *reference* demo programs from books or the web, and if you do please provide a References section with links at the end of your Readme.

Going Beyond Cleveland-McGill
---

Several have expressed interest in conducting surveys of various sorts. I encourage you go move beyond Cleveland and McGill if you can think of other interesting visualization experiment designs and corresponding analyses. 

You might study how people interpret COVID visualizations or design an experiment on shapes or color, for example.
If you decide to go in a custom route, do plan to sync with staff so we can help you set acceptable parameters that would be fair to folks following the original route.

(Basically, we still want you to do a multi-trial study with each participant, to raise the chance that you get solid results.)

How you measure "error" and similar facets also matter. But you can't go wrong with finding a good visualization study online to start from :)

Requirements
---

- Look it over Cleveland and McGill's original experiment (see the section below) and [watch this video](experiment-example.mp4) to get a sense of the experiment structure and where your visualizations will go.
- When viewing the example experiment video, note the following:
    - Trials are in random order.  
    - Each trial has a randomly generated set of 5-10 data points.  
    - Two of these data points are marked.  
    - (Note: the experiment UI and User Experience could be better. Plenty of design achievements here).
- Implement the data generation code **as described in the Cleveland & McGill and Heer & Bostock papers**. 
    - The goal is to generate a set of random datapoints (usually 5 or 10, with values be between 0 and 100) and to mark two of them for comparison in the trial. 
- Add 3 visualizations (i.e. conditions) to your experiment. When you are adding these visualizations, think about *why* these visualizations are interesting to test. In other words, keep in mind a *testable hypothesis* for each of the added visualization. Some good options include bar charts, pie charts, stacked-bar charts, and treemaps. You can also rotate your bar chart to be horizontal or upside-down as one of your conditions. You are encouraged to test unorthodox charts -- radar charts come to mind, but there are MANY possibilities here-- feel free to be creative!
    - Follow the style from Cleveland and McGill closely (e.g. no color, simple lines) unless you are specifically testing a hypothesis (e.g. color versus no color). Pay attention to spacing between elements like bars. Do not mark bars for comparison using color-- this makes the perceptual task too easy.
- After each trial, implement code that grades and stores participant’s responses.
- At the end of the experiment, to get the data, one easy option use Javascript to show the data from the current experiment\* (i.e. a comma separated list in a text box) and copy it into your master datafile. See the Background section below for an example of what this file should look like. (\*Alternately implement a server, if you're experienced with that sort of thing.)

** DATA SCIENTISTS! IT IS YOUR TIME TO SHINE **

- Figure out how to calculate "Error", the difference between the true percentage and the reported percentage.
- Scale this error using Cleveland and McGill’s log-base-2 error equation. For details, see the background section (there’s a figure with the equation). This becomes your “Error” column in the output. Make sure you use whole percentages (not decimal) in the log-base-2 equation. Make sure you handle the case of when a person gets the exact percentage correct (log-base-2 of 1/8 is -3, it is better to set this to 0). 
- Run your experiment with 10 or more participants, or-- make sure you get at least 200 trials **per visualization type** in total.  
    - Grab friends or people in the class.   
    - Run at least 20 trials per visualization type, per participant. This is to ensure that you cover the range of possible answers (e.g. 5%, 10%, ..., 95%)
- Make sure to save the resulting CSV after each participant. Compile the results into a master csv file (all participants, all trials).
- Produce a README with figures that shows the visualizations you tested and results, ordered by best performance to worst performance. Follow the modern Cleveland-McGill figure below -- though note that using names instead of icons is fine.
- To obtain the ranking, calculate and report the average log2Error for each visualization across all trials and participants. This should be straightforward to do in a spreadsheet.
- Use Bootstrapped 95\% confidence intervals for your error upper and lower bounds. Include these in your figures. Bootstrapped confidence intervals are easily implemented in R + ggplot2 using the `stat_summary` geom. You can also use Excel, Python, or many many other tools. Bootstrapped 95% CIs are **very** useful in modern experiment practice.
- Include example images of each visualization as they appeared in your experiment (i.e. if you used a pie chart show the actual pie chart you used in the experiment along with the markings, not an example from Google Images).

## General Requirements

0. Your code should be forked from the GitHub repo and linked using GitHub pages.
2. Your project should use d3 to build visualizations. 
3. Your writeup (readme.md in the repo) should contain the following:

- Working link to the experiment hosted on gh-pages or some other site.
- Concise description and screenshot of your experiment.
- Description of the technical achievements you attempted with this project.
- Description of the design achievements you attempted with this project.

Background
---

In 1984, William Cleveland and Robert McGill published the results of several controlled experiments that pitted bar charts against pies and stacked-bar variants. 
Their paper (http://www.cs.ubc.ca/~tmm/courses/cpsc533c-04-spr/readings/cleveland.pdf) (http://info.slis.indiana.edu/~katy/S637-S11/cleveland84.pdf) is considered a key paper in data visualization.
In particular, they ran a psychology-style experiment where users were shown a series of randomly-generated charts with two graphical elements marked like this:

![cleveland bar chart](img/cleveland-bar.png)

Participants were then asked, "What percentage is the smaller of the larger?". 
This was repeated hundreds of time with varying data and charts. 
By the end of the study, Cleveland and McGill had amassed a large dataset that looked like this:

![cleveland table](img/cleveland-table.png)

__Log-base-2 or "cm-error"__: The true percent is the actual percentage of the smaller to the larger, while the reported percent is what participants reported. 
Cleveland and McGill recognized that their analyses would be biased if they took `abs(ReportedPercent – TruePercent)` as their score for error. 
To compensate, they came up with a logarithmic scale for error with this equation:

![cleveland equation](img/cleveland-equation.png)

You’ll be implementing this error score as part of the lab. 
(Hint: it’s not a trick question, this is just to familiarize you with the experiment protocol). 
With this Cleveland-McGill error score you can better compare the performance of the charts you test to figure out which one performs the best.

As a baseline, compare your average Error scores to the following chart, which include both Cleveland and McGill’s results as well as more recent extensions of this experiment (lower error indicates better performance, and error bars are bootstrapped 95% confidence intervals (`http://en.wikipedia.org/wiki/Confidence_interval#Meaning_and_interpretation`)):

![cleveland results](img/cleveland-results.png)

# Achievements From Our Study
## Technical Achievements:
- Dynamic Data Generation: The experiment dynamically generates random data points for each trial, ensuring variability in the test scenarios. This is achieved using JavaScript functions like randomData() and randomOrder(), which create randomized datasets and trial orders, respectively.

- Visualization Rendering: The experiment presents multiple types of visualizations including Stack Chart, Donut Chart, Tree Map, and Bubble Chart using the D3.js library. Each visualization is generated based on the randomized datasets, providing a diverse set of visual stimuli for the experiment participants.

- User Interaction and Feedback: The experiment includes interactive elements such as buttons for starting and ending the test, as well as input fields for participants to provide their estimations. Error handling mechanisms are in place to ensure valid inputs are received and participants receive prompt feedback in case of incorrect inputs.

- Data Export: Upon completion of the experiment, the results are exported to a CSV file using JavaScript. This allows for easy analysis and further processing of the collected data.

## Design Achievements:
- User Interface Design: The experiment features a clean and intuitive user interface designed to guide participants through the test process. Elements such as buttons and input fields are clearly labeled, and instructions are provided to explain the task requirements.

- Visual Stimulus Design: Each visualization is designed to be simple yet effective in conveying the relevant data points to participants. The use of basic shapes and minimal colors adheres to the principles outlined in Cleveland and McGill's seminal work, ensuring that the visual stimuli are perceptually challenging yet informative.

- Progress Tracking: The experiment includes a progress bar to visually indicate the participant's progress throughout the test. This feature helps participants understand their current position within the experiment and encourages completion.

- Responsive Design: The experiment is designed to be responsive and adaptable to different screen sizes and devices. This ensures a consistent user experience across various platforms and devices, enhancing accessibility for participants.

# References:
- https://github.com/OmriGreen/a3-OmriGreen-Omri-Green
- http://www.cs.ubc.ca/~tmm/courses/cpsc533c-04-spr/readings/cleveland.pdf
- https://www.math.pku.edu.cn/teachers/xirb/Courses/biostatistics/Biostatistics2016/GraphicalPerception_Jasa1984.pdf
