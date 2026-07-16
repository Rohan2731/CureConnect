
from fastapi import FastAPI
from pydantic import BaseModel
from models.predictor import predict_disease
from fastapi.middleware.cors import CORSMiddleware
from models.medecine_recommender import recommend_medicines
import joblib
from models.disease_info_provider import get_disease_info
from models.history import (
    save_prediction,
    get_history
)
from models.chatbot import get_response
from models.medicine_provider import get_medicine_info
import database
from medicine_info import medicine_info

features = joblib.load("features.pkl")


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class SymptomRequest(BaseModel):
    symptoms: str
class ChatRequest(BaseModel):
    message: str
@app.post("/predict")

def predict(data: SymptomRequest):

    disease = predict_disease(data.symptoms)
    save_prediction(
    data.symptoms,
    disease
)
    medicines = recommend_medicines(disease)
    info = get_disease_info(disease)


    return {
        "disease": disease,
        "medicines": medicines,
        "description": info["description"],
        "precautions": info["precautions"] 
    }

@app.get("/symptoms")
def get_symptoms():
    return {
        "symptoms": features
    }
@app.get("/history")
def history():

    records = get_history()

    return {
        "history": records
    }
@app.post("/chat")
def chat(data: ChatRequest):

    response = get_response(
        data.message
    )

    return {
        "response": response
    }
@app.get("/medicine/{medicine_name}")
def medicine_details(medicine_name: str):

    info = get_medicine_info(
        medicine_name
    )

    return info
@app.get("/medicines")
def get_medicines():

    return {
        "medicines":
        list(medicine_info.keys())
    }