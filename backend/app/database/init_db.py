from .database import Base, engine
import sys
import os

sys.path.append(os.path.dirname(os.path.dirname(os.path.dirname(__file__))))

from app.models.simulation_db import SimulationDB

def init_db():
    Base.metadata.create_all(bind=engine)

if __name__ == "__main__":
    print("Criando tabelas no banco de dados...")
    init_db()
    print("Tabelas criadas com sucesso!") 