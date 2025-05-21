from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .controllers.simulation_controller import router as simulation_router

app = FastAPI(
    title="aMore API",
    description="API para simulação de financiamento imobiliário"
)

# Configuração do CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Incluindo as rotas do SimulationController
app.include_router(simulation_router)

# Rota principal
@app.get("/")
def root():
    return {
        "message": "API aMore está funcionando!",
        "docs": "/docs",  # Swagger UI
        "redoc": "/redoc"  # ReDoc
    }
