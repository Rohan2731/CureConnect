from medicine_data import medicine_db

def recommend_medicines(disease):

    return medicine_db.get(
        disease,
        ["Consult a healthcare professional"]
    )