import joblib

model = joblib.load("model.pkl")
features = joblib.load("features.pkl")

def predict_disease(symptoms):

    symptom_list = [s.strip().lower() for s in symptoms.split(",")]

    input_data = [0] * len(features)

    for symptom in symptom_list:
        if symptom in features:
            index = features.index(symptom)
            input_data[index] = 1

    prediction = model.predict([input_data])

    return prediction[0]