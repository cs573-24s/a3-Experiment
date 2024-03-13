library(ggplot2)

data = read.csv("output_total.csv", header=TRUE)
p1 = ggplot(data, aes(AdjError, factor(VisType))) + 
  stat_summary(fun.data = "mean_cl_boot", color="red", size=1)
p1

means = aggregate(AdjError ~ VisType, data, mean)
means   

p2 = ggplot(means, aes(x=VisType, y=AdjError)) +
  geom_bar(stat="identity", width=0.5, aes(color=VisType, fill=VisType)) +
  geom_text(aes(label=AdjError), vjust=1.5, color="black") +
  theme(legend.position="none")
p2
