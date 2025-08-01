from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from whitelist import check_origin
import json

app = FastAPI()

allowed_origins = [
    "http://localhost:3000",
    "http://localhost:3001",
]

allowed_methods = ["GET"]

# Middleware CORS (gère OPTIONS, headers, etc.)
app.add_middleware(
    CORSMiddleware,
    allow_origins=allowed_origins,
    allow_credentials=False,
    allow_methods=allowed_methods,
    allow_headers=["*"],
)

app.middleware("http")(check_origin)

@app.get("/config")
async def get_config():
    with open("config.json") as f:
        config = json.load(f)
    return config
