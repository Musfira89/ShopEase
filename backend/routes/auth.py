from fastapi import APIRouter, Depends, HTTPException, status
from pydantic import BaseModel, EmailStr, validator
from database import get_db
from typing import Generator

# Router instance
router = APIRouter()

# Pydantic model for user signup
class UserCreate(BaseModel):
    fullName: str
    email: EmailStr
    password: str
    confirmPassword: str
    phoneNumber: str
    gender: str
    streetAddress: str
    city: str
    preferredCategory: str
    termsAccepted: bool
    newsletterSubscription: bool

    # Validate that password and confirmPassword match
    @validator('confirmPassword')
    def passwords_match(cls, v, values):
        if 'password' in values and v != values['password']:
            raise ValueError('Passwords do not match')
        return v

# Signup endpoint
@router.post("/signup", response_model=dict)
def signup(user: UserCreate, db: Generator = Depends(get_db)):
    try:
        cursor = db

        # Check if the user already exists
        cursor.execute("SELECT * FROM users WHERE email = %s", (user.email,))
        existing_user = cursor.fetchone()
        if existing_user:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Email already registered."
            )

        # Create new user with plain password
        cursor.execute(
            """
            INSERT INTO users (
                full_name, email, password, confirm_password, phone_number, gender, 
                street_address, city, preferred_category, terms_accepted, 
                newsletter_subscription
            ) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
            """,
            (
                user.fullName, user.email, user.password, user.confirmPassword,
                user.phoneNumber, user.gender, user.streetAddress, user.city,
                user.preferredCategory, user.termsAccepted, user.newsletterSubscription
            )
        )
        db.connection.commit()  # Use db.connection to commit the transaction
        return {"message": "User created successfully"}
    except Exception as e:
        # Log the exception or print it
        print(f"Error: {e}")
        raise HTTPException(status_code=500, detail="Internal Server Error")
