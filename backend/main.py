# main.py
from fastapi import FastAPI
from routes.auth import router as auth_router

app = FastAPI()

# Include authentication routes
app.include_router(auth_router, prefix="/auth")

@app.get("/")
def read_root():
    return {"message": "Welcome to ShopEase API"}
