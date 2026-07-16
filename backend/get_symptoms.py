import joblib

features = joblib.load("features.pkl")

for symptom in features:
    print(symptom)