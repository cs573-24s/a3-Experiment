import pandas as pd
import numpy as np


df = pd.read_csv('StudyData.csv')
pd.set_option('display.max_columns', None)

# Add 'Actual' column that displays the correct answers
df['actual'] = np.where(
    df['trialId'] == 'treeMap1', 33,
    np.where(df['trialId'] == 'treeMap2', 17,
    np.where(df['trialId'] == 'treeMap3', 83,
    np.where(df['trialId'] == 'treeMap4', 66,
    np.where(df['trialId'] == 'treeMap5', 20,
    np.where(df['trialId'] == 'trainingTreeMap1', 66,
    np.where(df['trialId'] == 'StackedBarChart1', 50,
    np.where(df['trialId'] == 'StackedBarChart2', 50,
    np.where(df['trialId'] == 'StackedBarChart3', 17,
    np.where(df['trialId'] == 'StackedBarChart4', 83,
    np.where(df['trialId'] == 'StackedBarChart5', 33,
    np.where(df['trialId'] == 'StackedBarChart6', 20,
    np.where(df['trialId'] == 'barChart1', 50,
    np.where(df['trialId'] == 'barChart2', 50,
    np.where(df['trialId'] == 'barChart3', 17,
    np.where(df['trialId'] == 'barChart4', 83,
    np.where(df['trialId'] == 'barChart5', 33,
    np.where(df['trialId'] == 'barChart6', 20,
    np.where(df['trialId'] == 'pieChart1', 50,
    np.where(df['trialId'] == 'pieChart2', 50,
    np.where(df['trialId'] == 'pieChart3', 17,
    np.where(df['trialId'] == 'pieChart4', 83,
    np.where(df['trialId'] == 'pieChart5', 33,
    np.where(df['trialId'] == 'pieChart6', 20, -1))))))))))))))))))))))))

# Convert to numeric
df['answer'] = pd.to_numeric(df['answer'], errors='coerce')
df['actual'] = pd.to_numeric(df['actual'], errors='coerce')

# Remove consent and name lines
df = df.drop(df[df['actual'] == -1].index)

# Create the error column
x = df['answer'] - df['actual']
df['error'] = np.log2(np.abs(df['answer'] - df['actual']) + 0.125)
df['error'] = np.where(df['error'] == -3, 0, df['error'])
file_path = 'C:\\Users\\2mult\\OneDrive\\Documents\\Data Vis\\DataVisHW3\\OutputData.xlsx'

# Group by trial and get the average error per each trial
grouped_error = df.groupby('trialId')['error'].mean().sort_values()
print('Error based upon trial: ')
print(grouped_error)

# Add column that says chart type
df['Chart Type'] = np.where(
    df['trialId'] == 'treeMap1', 'TreeMap',
    np.where(df['trialId'] == 'treeMap2', 'TreeMap',
    np.where(df['trialId'] == 'treeMap3', 'TreeMap',
    np.where(df['trialId'] == 'treeMap4', 'TreeMap',
    np.where(df['trialId'] == 'treeMap5', 'TreeMap',
    np.where(df['trialId'] == 'StackedBarChart1', 'StackedBarChart',
    np.where(df['trialId'] == 'StackedBarChart2', 'StackedBarChart',
    np.where(df['trialId'] == 'StackedBarChart3', 'StackedBarChart',
    np.where(df['trialId'] == 'StackedBarChart4', 'StackedBarChart',
    np.where(df['trialId'] == 'StackedBarChart5', 'StackedBarChart',
    np.where(df['trialId'] == 'StackedBarChart6', 'StackedBarChart',
    np.where(df['trialId'] == 'barChart1', 'BarChart',
    np.where(df['trialId'] == 'barChart2', 'BarChart',
    np.where(df['trialId'] == 'barChart3', 'BarChart',
    np.where(df['trialId'] == 'barChart4', 'BarChart',
    np.where(df['trialId'] == 'barChart5', 'BarChart',
    np.where(df['trialId'] == 'barChart6', 'BarChart',
    np.where(df['trialId'] == 'pieChart1', 'PieChart',
    np.where(df['trialId'] == 'pieChart2', 'PieChart',
    np.where(df['trialId'] == 'pieChart3', 'PieChart',
    np.where(df['trialId'] == 'pieChart4', 'PieChart',
    np.where(df['trialId'] == 'pieChart5', 'PieChart',
    np.where(df['trialId'] == 'pieChart6', 'PieChart', 'TrainingTreeMap')))))))))))))))))))))))

# Export the DataFrame to an Excel file
# df.to_excel(file_path, index=False, engine='openpyxl')
# print(f'DataFrame has been successfully exported to {file_path}')

# Group by trial and get the average error per each trial
grouped_error = df.groupby('Chart Type')['error'].mean().sort_values()
print('Error based upon chart type: ')
print(grouped_error)

## 95% Confidence Interval
# Number of bootstrap samples
n_bootstraps = 1000

# This will hold the bootstrap results
bootstrap_means = {trial: [] for trial in df['trialId'].unique()}

# Perform the bootstrap
np.random.seed(42)  # For reproducibility
for _ in range(n_bootstraps):
    # Sample the data with replacement
    bootstrap_sample = df.sample(n=len(df), replace=True)
    # Calculate means for each group in this bootstrap
    bootstrap_group_means = bootstrap_sample.groupby('trialId')['error'].mean()
    # Append the results
    for trial, mean in bootstrap_group_means.items():
        bootstrap_means[trial].append(mean)

# Compute the 95% confidence intervals
confidence_intervals = {}
for trial, means in bootstrap_means.items():
    lower_bound = np.percentile(means, 2.5)
    upper_bound = np.percentile(means, 97.5)
    confidence_intervals[trial] = (lower_bound, upper_bound)

# Display the results
for trial in confidence_intervals:
    print(f"{trial}: {confidence_intervals[trial]}")
