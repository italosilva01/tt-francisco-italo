"""
Settings module for the application
"""
from typing import List

FRONTEND_URLS = [
    "http://localhost:3000",  
    "http://127.0.0.1:3000", 
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