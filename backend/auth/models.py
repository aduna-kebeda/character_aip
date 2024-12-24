from pydantic import BaseModel
from bson import ObjectId

class User(BaseModel):
    username: str
    email: str
    password: str

class UserInDB(User):
    id: ObjectId
