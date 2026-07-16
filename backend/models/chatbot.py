def get_response(message):

    message = message.lower()

    if "fever" in message:
        return (
            "Drink plenty of fluids, rest well, "
            "and consult a doctor if symptoms persist."
        )

    elif "cold" in message:
        return (
            "Stay hydrated, rest, and avoid cold foods."
        )

    elif "headache" in message:
        return (
            "Take adequate rest, stay hydrated, "
            "and avoid screen exposure."
        )

    elif "cough" in message:
        return (
            "Drink warm water and seek medical help "
            "if cough persists."
        )

    else:
        return (
            "Please consult a healthcare professional "
            "for personalized advice."
        )