import pandas as pd 
import math

def calc_adj_error(num):
    return round(math.log(num + (1/8), 2), 2)

def compile_data():
    df = pd.DataFrame(columns=['TrialNum', 'VisType', 'TruePercent', 'GuessPercent'])
    for i in range(1,11):
        curFile = "data/output" + str(i) + ".csv"
        cur_df = pd.read_csv(curFile, header=None, names=['TrialNum', 'VisType', 'TruePercent', 'GuessPercent'])
        df = pd.concat([df, cur_df])

    df['Error'] = abs(df['TruePercent'] - df['GuessPercent'])

    df['AdjError'] = df['Error'].apply(calc_adj_error)

    df.to_csv("data/output_total.csv", index=False)


compile_data()