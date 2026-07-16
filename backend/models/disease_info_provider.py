from disease_info import disease_info

def get_disease_info(disease):

    return disease_info.get(
        disease,
        {
            "description":
            "Information not available.",

            "precautions": [
                "Consult a healthcare professional."
            ]
        }
    )