from rapidfuzz import process
from medicine_info import medicine_info

def get_medicine_info(name):

    medicines = list(medicine_info.keys())

    match = process.extractOne(
        name,
        medicines
    )

    if match and match[1] > 70:
        return medicine_info[match[0]]

    return {
        "uses": [],
        "side_effects": [],
        "precaution":
        "Consult a doctor before use."
    }