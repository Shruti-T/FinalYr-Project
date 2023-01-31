import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.model_selection import train_test_split
from xgboost import XGBRegressor
from xgboost import Booster
from xgboost import DMatrix
from sklearn import metrics
coffee=pd.read_csv("../data/merged_data_cleaned.csv")
coffee_data=coffee[["Aroma","Flavor","Aftertaste","Acidity","Body","Balance","Uniformity","Clean_Cup","Sweetness","Cupper_Points","Moisture","Quakers","Category_One_Defects","Category_Two_Defects","altitude_mean_meters","Total_Cup_Points"]]

# x=coffee_data["altitude_mean_meters"].mean()
# coffee_data["altitude_mean_meters"].fillna(x,inplace=True)
X = coffee_data.drop(columns='Total_Cup_Points', axis=1)
Y = coffee_data['Total_Cup_Points']
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
# #performing a single prediction
# def predict_coffee_quality(**coffeeq):
#   A = [[value in coffeeq.values()]]
#   return tuple(A[0]) + (model_xgb_2.predict(DMatrix(A))[0],)
###performing a single prediction
A = np.array([[8.67,8.83,8.67,8.75,8.50,8.42,10.0,10.0,10.0,8.75,0.12,0.0,0,0,2075.0]])
single_pred = model.predict(A)
print(single_pred)
##saving the model for further use
model.save_model("../models/coffee_xgb.json")
###loading the model
model_xgb_2 = Booster()
model_xgb_2.load_model("../models/coffee_xgb.json")
###prediction using saved model
model_xgb_2.predict(DMatrix(A))
tuple(A[0]) + (model_xgb_2.predict(DMatrix(A))[0],)
###function for returning entire record to be loaded into the database
def full_pred_record(aroma,flavor,aftertaste,acidity,body,balance,uniformity,clean_Cup,sweetness,cupper_Points,moisture,quakers,category_One_Defects,category_Two_Defects,altitude_mean_meters, model):
  A = [[aroma,flavor,aftertaste,acidity,body,balance,uniformity,clean_Cup,sweetness,cupper_Points,moisture,quakers,category_One_Defects,category_Two_Defects,altitude_mean_meters]]
  return tuple(A[0]) + (model.predict(DMatrix(A))[0],)
full_pred_record(8.67,8.83,8.67,8.75,8.50,8.42,10.0,10.0,10.0,8.75,0.12,0.0,0,0,2075.0, model_xgb_2)
