Assignment 3 - Replicating a Classic Experiment  
===
**Our Experiment**
We conducted two different types of experiments for this project, both centering on the amount of time it takes the user to find a specific colored circle in a scatterplot of about 100 circles. Each circle has a set minimum distance from one to the other and their placement was randomized. This way, we were making graphs where the circle that the participant is attempting to find is not obscured by other circles. For each experiment, the user would have 30 seconds to click on the designated circle, and the time it took them to click on it would be recorded.

The first experiment has the participants click on a designated color in a scatter plot of other uniform colors (by clicking said colored circle). Each runthrough of this trial has the colors getting closer in “distance” to each other, making it harder to tell apart their difference. The “distance” of the colors is determined through the CIELAB color space. To find the colors to be used for the experiment, our first step was to choose our ‘target’ color, and an opposing color. Our ‘target’ color was chosen to be red, and, based on the color space, we chose the opposing color to be green. We used the ‘colormath’ library within python, and converted the colors into ‘LabColors’ which are CIELAB representations. We then calculated 4 intermediate colors by calculating equi-distant colors between the two colors. The hex codes of these colors were then used to create the graph data points.

There were 100 data points generated for experiment 1, with 1 being the ‘designated’ color, which was chosen to be red. The other 99 data points shared a similar color that changed depending on the trial.

![alt text](http://url/to/img.png)

The second experiment has the participants click on a designated color in a scatter plot of multiple colors. The other colors are all a similar “distance” from the designated color and we decrease their distance over trials. There are 5 different colors outside of the designated one. We used the yellow, green, blue, purple and red colors from the Berkeley Color Project and had the target value be black, which is approximately the center of the colors. The Saturated versions of the colors had the largest distance from the target, then the Light, Muted and Dark versions were used for subsequent trials, each one decreasing in distance to the target. In order to have five trials, we calculated the values halfway between the Saturated and Light values since these colors had the largest distance between them and used the resulting colors for the second trial. There were 101 data points generated for experiment 2, with 20 of each color and 1 of the target color.

Our hypothesis was the time needed for picking out the correct color will increase if the colors are closer together in distance. We also hypothesized that the time needed for picking out the correct color will increase if all of the plot points have different colors compared to uniform colors. We did this test to see if our hypotheses are right, and to investigate how fast people did our trials.

We generated our graphs using d3 and integrated the graphs with the React frontend. We used Python to generate the data points for the experiments.

For Fitt’s Law, since every participant has to click on a button to go to toggle the next visualization, the distance between the button and the color they need to click was standardized as long as we used the same visualizations for each participant. We kept sizes and shapes constant for each circle. The amount of circles per experiment were also kept constant. Additionally, we made our experiment so that it can be conducted on mobile devices. In those cases, Fitt’s Law applies less as participants did not have to move a mouse to reach the target circle. 

**Limitations**

**Results**

**References**
- https://codesandbox.io/p/sandbox/react-d3-scatterplot-solved-kg107?file=%2Fsrc%2Fstyles.css%3A1%2C1-5%2C1
- https://github.com/gitname/react-gh-pages?tab=readme-ov-file
- https://www.researchgate.net/figure/The-Berkeley-Color-Project-BCP-32-chromatic-colors-figure-adapted-from-Palmer-and_fig3_282271041
