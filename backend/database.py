from motor.motor_asyncio import AsyncIOMotorClient
from fastapi import FastAPI

app = FastAPI()

# MongoDB connection
client = AsyncIOMotorClient("mongodb://localhost:27017")  # Change this URL if needed
db = client["ai_chat_db"]  # Select the database

# Example to connect to collections
user_collection = db["users"]  # Select the 'users' collection
chat_history_collection = db["chat_history"]  # You can add other collections as needed

# Example of a FastAPI route that interacts with MongoDB
@app.get("/users/{user_id}")
async def get_user(user_id: str):
    user = await user_collection.find_one({"_id": user_id})
    if user is None:
        raise HTTPException(status_code=404, detail="User not found")
    return user

@app.post("/users/")
async def create_user(user: dict):
    await user_collection.insert_one(user)
    return {"msg": "User created successfully"}

# More routes can be added as necessary to interact with your MongoDB collections
