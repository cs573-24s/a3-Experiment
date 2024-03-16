Exploring the Effectiveness of Proportional Graphs: A Comparative Analysis of Chart Types
===
### Team: 

**Pixel Master**: Gan-Erdene Benderiya, Jingni Cai, Ester Jere, Antonela Tamagnini


### Related links
Survey link: https://jcai0o0.github.io/revisit-project/

Survey repository: https://github.com/jcai0o0/revisit-project

Interview Questionnaire: [Post Survey Interview](https://github.com/jcai0o0/a3-Experiment/blob/main/post-survey-interview/post%20survey%20questionnaire.pdf)



## Introduction
Proportional graphs, also referred to as "percentage" or "parts-of-a-whole" graphs, visually represent the parts of a whole entity and illustrate the proportion or percentage each part contributes to the total.

Understanding the effectiveness of different visualization techniques is pivotal for conveying complex data insights accurately and intuitively. In this study, we delve into the realm of parts-of-a-whole graphs, investigating the ease of comprehension and accuracy across four distinct chart types: treemap, pie chart, stacked bar chart, and donut chart.

Our study aims to conduct a **survey-based** + **face-to-face interview** investigation, where participants are presented with two dots marked in each visualization. Their task is to identify which proportion represents the smallest part in relation to the largest part, guided solely by the placement of these dots. By employing this novel approach, we can gauge the perceptual ease and accuracy associated with each chart type.

In our project, we conducted 60 individual surveys, and we measured accuracy in identifying relative proportions. This output allowed us to determine which chart types facilitate a more intuitive comprehension and precise interpretation. 

The findings of this research hold significant implications for data visualization practitioners. By unveiling the comparative effectiveness of parts-of-a-whole graphs, we can inform best practices in chart selection, ultimately enhancing the clarity and impact of data-driven communication strategies.



### Understanding Different Visualizations
- Pie Chart: Common for showing proportions within a whole, pie charts are intuitive for some comparisons but can be challenging for precise quantitative comparisons.
- Stacked Bar Chart: This visualization is effective for showing part-to-whole relationships and trends over time or across categories, potentially offering clearer quantitative assessment than pie charts.
- Treemap: Treemaps are useful for displaying hierarchical data and proportions within a whole, offering a different spatial representation than pie charts.
- Donut Chart: Similar to a pie chart, but with a blank center, a donut chart is used to display proportions or percentages of a whole.


### Hypothesis
- Users may find pie charts most intuitive for understanding general proportions but struggle with precise comparisons.
- Stacked bar charts may facilitate better quantitative analysis and comparison across categories than pie charts.
- Treemaps, while effective for displaying large datasets, may require more cognitive effort to interpret than pie or stacked bar charts.
- Donut charts with multiple concentric rings or hierarchical data may require more cognitive effort to interpret compared to simple pie charts or stacked bar charts.



## The Study
### Survey screenshots
#### Landing page of the experiment
![](img/revisit-landing-page.png)

#### Visualization: Donut Chart
![](img/revisit-donutchart.png)

#### Visualization: Pie Chart
![](img/revisit-piechart.png)

#### Visualization: Stacked Bar Chart
![](img/revisit-stackedbarchart.png)

#### Visualization: Treemap
![](img/revisit-treemap.png)

----


### Interview Design

Understanding users' experiences and perceptions is significant in designing effective experiments and improving data interpretation processes. We conducted a post-survey face-to-face interview with some of our participants to gather qualitative insights regarding their experiences with our experiment.

The interview aimed to delve deeper into participants' thoughts, challenges, and suggestions encountered during the experiment, with a specific focus on the clarity of instructions, ease of data interpretation, confidence in estimations, and suggestions for experiment improvement. By engaging participants in a dialogue, we sought to unearth nuanced insights that quantitative survey data alone may not capture.

Our approach to the interview process was meticulously crafted to ensure comprehensive insights and effective experiment design.

- Introduction to the Interview Process: We begin by detailing our approach to interviews, prioritizing clarity and transparency to foster understanding and cooperation among participants.
- Obtaining Participant Consent: Prior to the interview, we actively seek explicit consent from participants, respecting their autonomy and willingness to engage in the process.
- Introducing the Experiment: Clear communication is key. We ensure that participants are fully informed about the purpose and scope of the experiment, fostering collaboration and engagement from the outset.
- Facilitating Platform Access: Emphasizing accessibility, we encourage participants to utilize the reVISit platform on computers, while accommodating those who prefer mobile devices for convenience.
- Providing Information Support: Equipping participants with necessary information and resources enhances the quality of their responses, promoting accuracy and depth in their contributions.
- Monitoring Participant Progress: Throughout the interview, we continuously monitor participants' engagement and comfort, ensuring a supportive environment conducive to meaningful participation.

The design of the interview was guided by the feedback loop principle, which emphasizes the importance of continuous improvement through iterative feedback collection and analysis. Recognizing the potential limitations of quantitative data in fully elucidating user experiences, we adopted a qualitative approach to complement our understanding and provide actionable insights for enhancing future experiments (e.g., for our final project ;)





## Results of the study
![](img/revisit-error-table.png)

The previous table displays the results of the Log2 Error results for each of the visualization types analyzed, the ranking of accuracy based on the error rate, with 1 being the most accurate, and the lower and upper confidence intervals.

![](img/revisit-boxplot.png)

The boxplot shows the log error value for the different graph types. The central point represents the median log error for each visualization type. The horizontal lines extending to the left and right from the median represent the confidence intervals, indicating the variability or spread of the log error in the data for that visualization type. The narrower the line, the less variability there is in the log error measurements for that type of visualization.

Considering the minimal variation in error rates among the four visualization types examined—treemap, donut chart, stacked bar chart, and pie chart—it can be inferred that while treemaps marginally outperform the others, the overall difference is not significant.
In conclusion, data visualization practitioners can confidently employ any of these formats knowing that they all similarly support accurate parts-of-a-whole interpretations.


### Cleveland & McGill experiment
<img src="img/cleveland-results.png" alt="drawing" width="500"/>
We compared our findings with the experiments conducted in the Cleveland & McGill study (*) and more recent extensions of this experiment. The image depicts the outcomes of these studies, showcasing the performance of various chart types. Lower error rates indicate better performance, and the error bars represent bootstrapped 95% confidence intervals, similar to the boxplot in our study. In the crowdsourced results, charts displaying rectangular areas, such as bar charts, exhibited the highest error values. Conversely, in our study, among the four visualization types evaluated, the treemap demonstrated the best performance with the lowest error rate.

Regarding angular graphs like pie and donut charts, their studies revealed an error range and a narrow confidence interval between 2 and 2.5, indicating lower performance compared to other chart types. In our study, the pie chart exhibited the worst performance, while the donut chart performed reasonably well, closely following the treemap.

Based on the information provided, we can draw a few key conclusions:

- Chart type impacts accuracy and performance: Different chart types have varying levels of accuracy and performance when it comes to conveying data effectively. Some chart types are more prone to errors or misinterpretation than others.
- Treemaps are effective: In the study being discussed, treemaps emerged as the most effective chart type, exhibiting the lowest error rate among the four visualization types evaluated. This suggests that treemaps are well-suited for accurately representing and communicating data.
- Angular charts have moderate performance: Pie and donut charts, which use angles to represent data, demonstrated moderate performance.
- Pie charts are less effective than donut charts: Interestingly, within the angular chart category, pie charts had the worst performance, while donut charts performed reasonably well, nearly matching the effectiveness of treemaps.

Overall, the conclusions highlight the importance of carefully selecting appropriate chart types for data visualization, as different chart types can significantly impact the accuracy and effectiveness of communicating data.






## Design and Technical Achievements

#### Visualization Types Used (D3)

D3, is a powerful tool to help in creating different types of visualizations like: 
- bar charts 
- donut charts 
- tree charts
- pie charts 
It allows for flexibility in terms of data visualization where they can be animated or not 
- The D3 has been used in ensuring smooth transitions from one event to another.

#### Program to Retrieve Data from Firebase Using Python

- Firestore does not provide a direct download button. So, we use firebase_admin API to develop a program to retrieve and extract data from Firebase Firestore.
- Python easily establishes a connection to Firebase projection making it easy to retrieve data and incorporate it in a Python application for manipulation and analysis.
- The use of Python in Firebase for data retrieval offers great scalability making it possible to handle large volumes of data with ease.
- Python as a language offers a lot of flexibility in data manipulation, exploratory data analysis, and data visualization.
- Although using python can be a good and efficient way to retrieve data, security is always a concern as Python does not offer much flexibility in protecting data from things like SQL injections.

#### Console Logging and Debugging

- This has helped the developers to quickly give feedback to the users as the errors were logged in real-time hence increasing customer satisfaction. 
- This provided the ability to easily identify errors as they were being logged as this allows the developer to identify the types of errors to log hence making it possible to track any errors and quickly resolve them. 
- The system logged messages at important stages and this gave the developing team a chance to track data movement and trace where data was lost and where data was not converted as required. 
- Console logging provides a security audit for the application as it logs userid and user operations it becomes easy to know user operations and trace what user did unnecessary transactions.

#### Custom Styling and Layout

- The simple and flexible layout of the experiment made it easy for users to quickly finish their surveys 
- The user interface had CSS applied to make the rendering appealing to the users 
- Although the design could be displayed on both mobile and computer devices, users on mobile devices had some challenges compared to those who used laptops.

#### Dynamic Data Binding & Interaction Handling

- This is a powerful element to include as it ensures that change in the data does not affect the object it is bound to hence making changes more flexible 
- The ability to respond to user events is well represented that no user clicks results in an undescriptive error 
- This allows for the implementation of random data manipulation as in the case where graphs and or questions are randomly generated 
- The ability to easily handle errors like using try catch has been implemented well in the application.

#### User Feedback

- Many users thought the survey was easy
- There were variations based on gender. Male participants found the donut harder than the treemap while women found the treemap harder than the donut.
- Depending on the platform, some users who received the survey on their mobile devices have suggested that we enhance its functionality specifically for mobile users in the future.


<img src="img/user-pic-1.png" alt="drawing" width="250"/><img src="img/user-pic-2.jpeg" alt="drawing" width="220"/><img src="img/user-pic-3.jpeg" alt="drawing" width="400"/>




### Sources: 
(*) Cleveland, W. S., & McGill, R. (1984). Graphical Perception: Theory, Experimentation, and Application to the Development of Graphical Methods. Journal of the American Statistical Association, 79(387), 531-554.
