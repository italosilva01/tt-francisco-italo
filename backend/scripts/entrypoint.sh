#!/bin/bash

# Configurar PYTHONPATH
export PYTHONPATH=/app:${PYTHONPATH}

# Aguardar o PostgreSQL
echo "Aguardando o PostgreSQL..."
while ! pg_isready -h db -p 5432 -U postgres; do
    sleep 1
done

# Inicializar o banco de dados
echo "Inicializando o banco de dados..."
cd /app
python -c '
import logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

from app.database.database import Base, engine
from app.models.simulation_db import SimulationDB

print("=== Iniciando criação das tabelas ===")
print(f"Models carregados: {[m.__tablename__ for m in Base.registry.mappers]}")

try:
    print("\nVerificando conexão com o banco...")
    with engine.connect() as conn:
        print("Conexão OK!")
    
    print("\nCriando tabelas...")
    Base.metadata.create_all(bind=engine)
    
    print("\nVerificando se as tabelas foram criadas...")
    with engine.connect() as conn:
        result = conn.execute("SELECT table_name FROM information_schema.tables WHERE table_schema = \'public\'")
        tables = [row[0] for row in result]
        print(f"Tabelas existentes: {tables}")
    
    print("\nTabelas criadas com sucesso!")
except Exception as e:
    print(f"\nERRO ao criar tabelas: {str(e)}")
    raise e
'

# Iniciar a aplicação
echo "Iniciando a aplicação..."
python run.py 