from fastapi import Request
from fastapi.responses import JSONResponse

WHITELIST = [
    "http://localhost:3000",
    "http://localhost:3001",
]

async def check_origin(request: Request, call_next):
    origin = request.headers.get("origin")
    if (origin and origin not in WHITELIST) or origin is None:
        return JSONResponse(status_code=403, content={"error": "Origin not allowed"})
    return await call_next(request)
