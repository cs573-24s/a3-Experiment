**Experiment Link: https://data-vis-a3.github.io/**

# Assignment 3 - Replicating a Classic Experiment

1. For our experiment, we sought to compare users' ability to differentiate the sizes of points when viewing **Bar Charts**, **Pie Charts**, and **Bubble Charts**. We developed an application in React to host the experiment and display the results after each assessment. We had 16 people participate in the experiment for a total of 240 trials for each type of visualization.

<img width="957" alt="image" src="https://github.com/chikpea123/a3-Experiment/assets/51792257/aa514358-baf1-4f65-b8a3-cb8d9c900d11">

# Results

![results_img](./img/results.png)

# First Place Chart Type

Our best performing chart type was the bar chart.

![bar_chart](./img/bar-chart.png)

## Calculated Error (Bar)

For this chart type, we calculated a log2Error of 2.078 across all trials
<br />
The results can be seen below under the "bar" label
![results_img](./img/results.png)

# Second Place Chart Type

Our second best performing chart type was the pie chart.
<br />
![pie_chart](./img/pie-chart.png)

## Calculated Error (Pie)

For this chart type, we calculated a log2Error of 2.635 across all trials
<br />
The results can be seen below under the "pie" label
![results_img](./img/results.png)

# Third Place Chart Type

Our third best performing chart type was the bubble chart.
![bubble_chart](./img/bubble-chart.png)

## Calculated Error (Bubble)

For this chart type, we calculated a log2Error of 2.818 across all trials
<br />
The results can be seen below under the "bubble" label
![results_img](./img/results.png)

# Technical Achievements

## Creating a React App

- We created and hosted our own React application with multiple pages and routing functionality.
- We implemented an: Intro Page, Particpate Page, and a Results page.

## Implementing Firebase

- For this assignment we store each participant's responses in a firebase firestore database.
- We also use this database to show participants our overall results on the "results" page.
- We use this database as well to generate a CSV file downloadable on our website that
  reflects the most recent data that has been submitted in our experiment.

## Dynamically Generating Results

- We dynamically generate our results chart based on the firebase database, and the collection
  of user data. This means that whenever a new user completes the questions in the experiment, the
  results page will reflect this new data automatically.

# Design Achievements

For design achievements for this assignment, we utilized React to create an app that was simple and appealing to view. We also included an introduction page with instructions for completing the experiment to make it clear to the users how the app works.

<img width="956" alt="image" src="https://github.com/chikpea123/a3-Experiment/assets/51792257/8df84b9a-8038-41ae-a510-4a088e50764f">

**Additional Notes: **

When constructing a bubble chart, it is essential to adhere to the principle of displaying bubble scale in a gradual increment to optimize human perception.

This ensures that viewers can accurately perceive and interpret the scale. Depending on your chart creation method, you might need to scale your data to align with how values are translated into point sizes. Some visualization tools automatically correlate values with areas, but caution is warranted when dealing with cases where values correspond to diameter or radius.

# Instructions:

# Assignment 3 - Replicating a Classic Experiment

For the scope of this project, assume the role of a scientist who runs experiments for a living.

For example:

Q: How do we know that bar charts are "better" than pie charts?  
A: Controlled experiments!

In this assignment you'll implement a simple controlled experiment using some of the visualizations you’ve been building in this class.
You'll need to develop support code for the experiment sequence, results file output, and other experiment components.
(These are all simple with Javascript buttons and forms.)
The main goals for you are to a) test at least three competing visualizations or experiment conditions, b) implement data/stimuli generation and error calculation functions (if following the baseline, use Cleveland and McGill's 1984 paper and Heer and Bostock's 2010 replication), c) run the experiment with 10 participants (or equivalent number of trials), and d) do basic analysis and reporting of the results.

For this assignment you should aim to write everything from scratch. For experimentation it is often necessary to control all elements of the chart.
You should definitely _reference_ demo programs from books or the web, and if you do please provide a References section with links at the end of your Readme.

## Going Beyond Cleveland-McGill

Several have expressed interest in conducting surveys of various sorts. I encourage you go move beyond Cleveland and McGill if you can think of other interesting visualization experiment designs and corresponding analyses.

You might study how people interpret COVID visualizations or design an experiment on shapes or color, for example.
If you decide to go in a custom route, do plan to sync with staff so we can help you set acceptable parameters that would be fair to folks following the original route.

(Basically, we still want you to do a multi-trial study with each participant, to raise the chance that you get solid results.)

How you measure "error" and similar facets also matter. But you can't go wrong with finding a good visualization study online to start from :)

## Requirements

- Look it over Cleveland and McGill's original experiment (see the section below) and [watch this video](experiment-example.mp4) to get a sense of the experiment structure and where your visualizations will go.
- When viewing the example experiment video, note the following:
  - Trials are in random order.
  - Each trial has a randomly generated set of 5-10 data points.
  - Two of these data points are marked.
  - (Note: the experiment UI and User Experience could be better. Plenty of design achievements here).
- Implement the data generation code **as described in the Cleveland & McGill and Heer & Bostock papers**.
  - The goal is to generate a set of random datapoints (usually 5 or 10, with values be between 0 and 100) and to mark two of them for comparison in the trial.
- Add 3 visualizations (i.e. conditions) to your experiment. When you are adding these visualizations, think about _why_ these visualizations are interesting to test. In other words, keep in mind a _testable hypothesis_ for each of the added visualization. Some good options include bar charts, pie charts, stacked-bar charts, and treemaps. You can also rotate your bar chart to be horizontal or upside-down as one of your conditions. You are encouraged to test unorthodox charts -- radar charts come to mind, but there are MANY possibilities here-- feel free to be creative!
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
1. Your project should use d3 to build visualizations.
2. Your writeup (readme.md in the repo) should contain the following:

- Working link to the experiment hosted on gh-pages or some other site.
- Concise description and screenshot of your experiment.
- Description of the technical achievements you attempted with this project.
- Description of the design achievements you attempted with this project.

## Background

In 1984, William Cleveland and Robert McGill published the results of several controlled experiments that pitted bar charts against pies and stacked-bar variants.
Their paper (http://www.cs.ubc.ca/~tmm/courses/cpsc533c-04-spr/readings/cleveland.pdf) (http://info.slis.indiana.edu/~katy/S637-S11/cleveland84.pdf) is considered a key paper in data visualization.
In particular, they ran a psychology-style experiment where users were shown a series of randomly-generated charts with two graphical elements marked like this:

![cleveland bar chart](img/cleveland-bar.png)

Participants were then asked, "What percentage is the smaller of the larger?".
This was repeated hundreds of time with varying data and charts.
By the end of the study, Cleveland and McGill had amassed a large dataset that looked like this:

![cleveland table](img/cleveland-table.png)

**Log-base-2 or "cm-error"**: The true percent is the actual percentage of the smaller to the larger, while the reported percent is what participants reported.
Cleveland and McGill recognized that their analyses would be biased if they took `abs(ReportedPercent – TruePercent)` as their score for error.
To compensate, they came up with a logarithmic scale for error with this equation:

![cleveland equation](img/cleveland-equation.png)

You’ll be implementing this error score as part of the lab.
(Hint: it’s not a trick question, this is just to familiarize you with the experiment protocol).
With this Cleveland-McGill error score you can better compare the performance of the charts you test to figure out which one performs the best.

As a baseline, compare your average Error scores to the following chart, which include both Cleveland and McGill’s results as well as more recent extensions of this experiment (lower error indicates better performance, and error bars are bootstrapped 95% confidence intervals (`http://en.wikipedia.org/wiki/Confidence_interval#Meaning_and_interpretation`)):

![cleveland results](img/cleveland-results.png)

## GitHub Details

- Fork the GitHub Repository. You now have a copy associated with your username.
- Make changes to index.html to fulfill the project requirements.
- Make sure your "master" branch matches your "gh-pages" branch. See the GitHub Guides referenced above if you need help.
- Edit this README.md with a link to your gh-pages site: e.g. http://YourUsernameGoesHere.github.io/Experiment/index.html
- Replace this file (README.md) with your writeup and Design/Technical achievements.
- To submit, make a [Pull Request](https://help.github.com/articles/using-pull-requests/) on the original repository.
- Name your submission using the following scheme:

```
a3-FirstLastnameMember1-FirstLastnameMember2-FirstLastnameMember3-...
```
