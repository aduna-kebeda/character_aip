from fastapi import APIRouter, HTTPException
from .models import ChatHistory, ChatMessage
from backend.database import db

router = APIRouter()

@router.post("/save_chat")
async def save_chat(chat: ChatMessage):
    # Save message to MongoDB
    await db.chat_history.insert_one(chat.dict())
    return {"msg": "Message saved successfully"}

@router.get("/get_chat/{user_id}")
async def get_chat(user_id: str):
    # Retrieve chat history from MongoDB
    history = await db.chat_history.find({"user_id": user_id}).to_list(length=100)
    return {"history": history}
