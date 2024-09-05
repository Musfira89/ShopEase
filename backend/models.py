# models.py
from pydantic import BaseModel, EmailStr

# Signup model
class SignupModel(BaseModel):
    username: str
    email: EmailStr
    password: str

# Login model
class LoginModel(BaseModel):
    email: EmailStr
    password: str
