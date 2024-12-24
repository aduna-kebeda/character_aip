
# backend/app.py
import json
import os
from fastapi import FastAPI, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
import google.generativeai as genai
from dotenv import load_dotenv
import logging

# Load environment variables
load_dotenv()

app = FastAPI()

# Logging configuration
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load API key
API_KEY = os.getenv("API_KEY")
if not API_KEY:
    raise ValueError("API_KEY must be set in the environment")

# Configure Gemini AI
genai.configure(api_key=API_KEY)

# Path to character profiles
CHARACTER_PROFILES_PATH = os.path.join('backend',"profiles", "characters.json")

# Load all character profiles
def load_character_profiles():
    try:
        with open(CHARACTER_PROFILES_PATH, "r") as f:
            return json.load(f)
    except Exception as e:
        logger.error(f"Error loading character profiles: {e}")
        raise HTTPException(status_code=500, detail="Unable to load character profiles")

character_profiles = load_character_profiles()

# Root endpoint
@app.get("/")
async def root():
    return {"message": "Welcome to the AI Chat Backend!"}

# Fetch available characters
@app.get("/api/characters")
async def list_characters():
    return {"characters": list(character_profiles.keys())}

# Fetch specific character profile
@app.get("/api/profiles/{character_name}")
async def get_profile(character_name: str):
    profile = character_profiles.get(character_name)
    if not profile:
        raise HTTPException(status_code=404, detail="Character profile not found")
    return profile

# Chat endpoint
@app.post("/api/chat")
async def chat(request: Request):
    body = await request.json()
    user_message = body.get("message")
    character_name = body.get("character", "default")

    if not user_message:
        raise HTTPException(status_code=400, detail="Message is required")

    # Fetch character profile
    character_profile = character_profiles.get(character_name)
    if not character_profile:
        raise HTTPException(status_code=404, detail="Character profile not found")

    try:
        chat_session = genai.GenerativeModel("gemini-1.5-flash").start_chat(history=[])
        formatted_message = f"{character_profile['name']} ({character_profile['tone']}): {user_message}"
        response = chat_session.send_message(formatted_message)
    except Exception as e:
        logger.error(f"Error communicating with AI: {e}")
        raise HTTPException(status_code=500, detail=str(e))

    return {"reply": response.text}
