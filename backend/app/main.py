from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .controllers.simulation_controller import router as simulation_router
from app.constants.settings import settings

app = FastAPI(
    title="aMore API",
    description="API para simulação de financiamento imobiliário"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.ALLOWED_ORIGINS,
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allow_headers=["Content-Type", "Authorization", "X-Requested-With"],
    max_age=86400,
)

app.include_router(simulation_router)

@app.get("/")
def root():
    return {
        "message": "API aMore está funcionando!",
        "docs": "/docs",
        "redoc": "/redoc"
    }
