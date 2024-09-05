
from fastapi import FastAPI
from routes.auth import router as auth_router

#initiliaze Fast app
app = FastAPI()

# Include routes
app.include_router(auth_router, prefix='/auth')


#Define a root endpoint:
@app.get("/")
def show_message():
    return{"message :" "Welcome to ShopEase API"}