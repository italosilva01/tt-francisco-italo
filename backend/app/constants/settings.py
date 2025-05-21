"""
Settings module for the application
"""
from typing import List

# Frontend URLs - Ajuste conforme necessário
FRONTEND_URLS = [
    "http://localhost:3000",  # URL de desenvolvimento
    "http://127.0.0.1:3000",  # URL alternativa de desenvolvimento
]

class Settings:
    """
    Settings class for the application
    """
    @property
    def ALLOWED_ORIGINS(self) -> List[str]:
        """
        Returns the list of allowed origins for CORS
        """
        return FRONTEND_URLS

settings = Settings() 