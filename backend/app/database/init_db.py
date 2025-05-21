from .database import Base, engine
import sys
import os

# Adiciona o diretório pai ao PYTHONPATH
sys.path.append(os.path.dirname(os.path.dirname(os.path.dirname(__file__))))

from app.models.simulation_db import SimulationDB

def init_db():
    # Cria todas as tabelas definidas nos modelos
    Base.metadata.create_all(bind=engine)

if __name__ == "__main__":
    print("Criando tabelas no banco de dados...")
    init_db()
    print("Tabelas criadas com sucesso!") 