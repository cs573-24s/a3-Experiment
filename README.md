Assignment 3 - Replicating a Classic Experiment  
===

The link to our experiment GitHub Page can be found here here: https://abigailalbuquerque.github.io/a3-Experiment/


### Our Experiment

We conducted two different types of experiments for this project, both centering on the amount of time it takes the user to find a specific colored circle in a scatterplot of about 100 circles. Each circle has a set minimum distance from one to the other and their placement was randomized. This way, we were making graphs where the circle that the participant is attempting to find is not obscured by other circles. For each experiment, the user would have 30 seconds to click on the designated circle, and the time it took them to click on it would be recorded. And before each experiment, to make sure the first trial results wouldn’t be skewed highly, we had a practice round.

The first experiment has the participants click on a designated color in a scatter plot of other uniform colors (by clicking said colored circle). Each runthrough of this trial has the colors getting closer in “distance” to each other, making it harder to tell apart their difference. The “distance” of the colors is determined through the CIELAB color space. To find the colors to be used for the experiment, our first step was to choose our "target" color, and an opposing color. Our "target" color was chosen to be red, and, based on the color space, we chose the opposing color to be green. We used the colormath library within python, and converted the colors into LabColors which are CIELAB representations. We then calculated 4 intermediate colors by calculating equi-distant colors between red and green. The hex codes of these colors were then used to create the graph data points.

There were 100 data points generated for experiment 1, with 1 being the ‘designated’ color, which was chosen to be red. The other 99 data points shared a similar color that changed depending on the trial.

<img src="img/colorScale.png" width="400">

The second experiment has the participants click on a designated color in a scatter plot of multiple colors. The other colors are all a similar “distance” from the designated color and we decrease their distance over trials. There are 5 different colors outside of the designated one. We used the yellow, green, blue, purple and red colors from the Berkeley Color Project and had the target value be black, which is approximately the center of the colors. The Saturated versions of the colors had the largest distance from the target, then the Light, Muted and Dark versions were used for subsequent trials, each one decreasing in distance to the target. In order to have five trials, we calculated the values halfway between the Saturated and Light values since these colors had the largest distance between them and used the resulting colors for the second trial. There were 101 data points generated for experiment 2, with 20 of each color and 1 of the target color.

Our hypothesis was that the time needed for picking out the correct color will increase if the colors are closer together in distance. We also hypothesized that the time needed for picking out the correct color will increase if all of the plot points have different colors compared to uniform colors. We conducted this test to see if our hypotheses are right, and to investigate how fast people were able to distinguish colors and react to our trials.

We created this study idea on our own, basing it on the professor’s in class example on determining what color is what. We also made our website similar to the one designed by the professor.

We generated our graphs using d3 and integrated the graphs with the React frontend. We used Python to generate the data points for the experiments.

Taking into account Fitt’s Law, since every participant has to click on a button to go to toggle the next visualization, the distance between the button and the color they need to click was standardized as long as we used the same visualizations for each participant. We kept sizes and shapes constant for each circle. The amount of circles per experiment were also kept constant. Additionally, we made our experiment so that it can be conducted on mobile devices. In those cases, Fitt’s Law applies less as participants did not have to move a mouse to reach the target circle. 

### Limitations

One limitation was that we had a 30 second timeout for every graph. This means that if a participant isn’t able to find the specified color within 30 seconds, we would force them to move on to prevent any participant from being stuck on a particular graph and not finishing the experiment at all. In our experiment results, there are some 30 second data points which are the result of this timeout. 

Another limitation to this experiment is Fitt’s Law. Since every participant has to click on a button to go to toggle the next visualization, the distance between the button and the color they need to click was standardized as long as we used the same visualizations for each participant. We kept sizes and shapes constant for each circle. The amount of circles per experiment were also kept constant. Additionally, we made our experiment so that it can be conducted on mobile devices. In those cases, Fitt’s Law applies less as participants did not have to move a mouse to reach the target circle. 

In the future, it would be better to run multiple tests for each color variation we had in experiment 1 and 2. As it stands, some trials could’ve been harder than others simply due to the positioning of the designated circle, which was a factor we wanted to keep constant. We’d want to average out the results for each set of trials for each configuration. The values in the second trial of experiment 2 also seem to make finding the target noticeably easier. There appears to be a big jump in the Berkeley Color Experiment so maybe custom colors could be calculated.

### Results
#### Spreadsheet
<img width="770" alt="Screenshot 2024-03-14 at 10 57 38 AM" src="https://github.com/abigailalbuquerque/a3-Experiment/assets/44651405/11a4a0a7-f44c-4d25-bbda-993a46906bfa">

Here is the list of results from all our participants.

#### Graphs

A boxplot graph showing the 5 different trials for experiment 1. As we see, the 5th trial has a wide range as opposed to other trials.

<img src="img/Experiment1.png" width="400"> 


A boxplot graph showing the first 4 trials. This graph was created to highlight any differences between the first 4, however, we do not notice any statistically significant differences between the same.

<img src="img/Experiment1_4only.png" width="400"> 


A boxplot graph where the y axis is augmented to log(time+1). The log augmentation was performed to scale the different graphs for comparison. A +1 was added to the times so the log values would not be negative.

<img src="img/Experiment1Augmented.png" width="400">


A boxplot graph showing the 5 different trials for experiment 2. As we see, the 5th trial has a wide range as opposed to other trials.

<img src="img/Experiment2.png" width="400">


A boxplot graph showing the first 4 trials. This graph was created to highlight any differences between the first 4, however, we do not notice any statistically significant differences between the same.

<img src="img/Experiment2_4only.png" width="400">


A boxplot graph where the y axis is augmented to log(time+1). The log augmentation was performed to scale the different graphs for comparison. A +1 was added to the times so the log values would not be negative.

<img src="img/Experiment2Augmented.png" width="400">


#### Discussion

We noticed that there was a large jump in time taken for the final trial in both experiments. In all the trials besides the last in each experiment, the results were relatively similar, with the average of all of those results hovering between 1 and 1 and a half seconds for experiment 1 and and 1-2 seconds for experiment 2. It would seem that people have an easy time telling colors apart unless they’re really close together.
Strangely enough, it appeared that the first trial in experiment 1 took longer time than trials 2-4 for that. This could be due to multiple reasons, such as the placement of the black circle, the colorings of the other circles, or a lack of practice from the participant. Strangely enough, despite trials 2-3 being supposedly closer to the black circle from our calculations, it appeared visually easier to do said trials. This wouldn’t explain however how trial 1 took more time than 4 or 5 however.
Both experiments performed very similarly on trials 2-4, having all their timings centering around 1.25 seconds. This leads us to believe our hypothesis was wrong that having a lot of different colors as distractors would increase the amount of time taken. However, trial 5 on experiment 1 took a lot more time than experiment 2, with the upper quartile of experiment 1’s trial 5 being around 20 seconds, and experiment 2’s trial 5 being around 8.5 seconds. The medians of both of them are the same however. We believe this could've been due to trial 5 being harder for the first experiment than the second, with the colors being closer together. It’s also possible that the increased color variation in experiment 2 made it easier to distinguish the one the user was trying to find. We feel more testing would need to be done for colors that are really close to another of the same distance for both experiments to make claims on what experiment is harder than the other. 

As expected, for the one participant who did this test that was color blind, they had a very difficult time telling apart the red and green colors in the first experiment (having the results 19.076, 23.403, 7.528, 30, and 30 seconds). In contrast, they had a much easier time with experiment 2, where the target was to find the black circle. This makes sense as the lightness of black is a much more easily differentiable value than something like red versus green. 


### Technical achievements

We took the time to have two different experiments for our project instead of one, each having 5 different graphs. 
A lot of research was put into determining the colors for both experiments. A substantial amount of time went into calculating color distances to make sure the colors were getting a set distance closer in experiment 1. We also developed this React app ourselves and took the time to implement d3 within the React app. Furthermore, we spent time on 

### Design achievements
We took into account Fitt's law to reduce any bias within our experiments. We also designed the React app, and took into account very minor details like the sizes of the circles on the scatterplots, etc to ensure usability.

### References

- https://codesandbox.io/p/sandbox/react-d3-scatterplot-solved-kg107?file=%2Fsrc%2Fstyles.css%3A1%2C1-5%2C1
- https://github.com/gitname/react-gh-pages?tab=readme-ov-file
- https://www.researchgate.net/figure/The-Berkeley-Color-Project-BCP-32-chromatic-colors-figure-adapted-from-Palmer-and_fig3_282271041

### Screens from our Experiment

<img src="img/Exp1.png" width="400">

<img src="img/Exp1MovingOn.png" width="400">

<img src="img/Exp1Sample.png" width="400">

<img src="img/Exp1G1.png" width="400">

<img src="img/next.png" width="400">

<img src="img/Exp1G2.png" width="400">

<img src="img/Exp1G3.png" width="400">

<img src="img/Exp1G4.png" width="400">

<img src="img/Exp1G5.png" width="400">

<img src="img/Exp2.png" width="400">

<img src="img/Exp2Sample.png" width="400">

<img src="img/Exp2G1.png" width="400">

<img src="img/Exp2G2.png" width="400">

<img src="img/Exp2G4.png" width="400">

<img src="img/Exp2G5.png" width="400">

