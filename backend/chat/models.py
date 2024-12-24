from pydantic import BaseModel
from bson import ObjectId
from typing import List

class ChatMessage(BaseModel):
    user_id: ObjectId
    character_id: str
    message: str
    timestamp: str

class ChatHistory(BaseModel):
    user_id: ObjectId
    history: List[ChatMessage]
