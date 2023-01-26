import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.model_selection import train_test_split
from xgboost import XGBRegressor
from sklearn import metrics

coffee=pd.read_csv("merged_data_cleaned.csv")
coffee_data=coffee[["Aroma","Flavor","Acidity","Body","Balance","Uniformity","Clean.Cup","Sweetness","Cupper.Points","Moisture","Quakers","Category.One.Defects","Category.Two.Defects","altitude_mean_meters","Total.Cup.Points"]]

x=coffee_data["altitude_mean_meters"].mean()
coffee_data["altitude_mean_meters"].fillna(x,inplace=True)
X = coffee_data.drop(columns='Total.Cup.Points', axis=1)
Y = coffee_data['Total.Cup.Points']
X_train, X_test, Y_train, Y_test = train_test_split(X, Y, test_size=0.2, random_state=2)

# loading the model
model = XGBRegressor()
# training the model with X_train
model.fit(X_train, Y_train)
test_data_prediction = model.predict(X_test)
print(test_data_prediction)
mae = metrics.mean_absolute_error(Y_test, test_data_prediction)
print("Mean Absolute Error = ", mae)
from sklearn.metrics import r2_score
score=r2_score(Y_test, test_data_prediction)
print(score*100)
#performing a single prediction
A = np.array([[8.67,8.83,8.75,8.5,8.42,10.0,10.0,10.0,8.75,0.12,0.0,0,0,2075.0]])
single_pred = model.predict(A)
print(single_pred)
