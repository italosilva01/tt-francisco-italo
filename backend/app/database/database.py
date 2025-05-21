from sqlalchemy import create_engine, event
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from dotenv import load_dotenv
import os
import logging

# Configuração do logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Carrega as variáveis de ambiente
load_dotenv()

# Obtém a URL do banco de dados
DATABASE_URL = os.getenv("DATABASE_URL")
if not DATABASE_URL:
    logger.error("DATABASE_URL não encontrada no arquivo .env")
    DATABASE_URL = "postgresql://postgres:sua_senha_aqui@localhost:5432/amore_db"

logger.info(f"Tentando conectar ao banco de dados: {DATABASE_URL}")

# Cria o engine do SQLAlchemy
try:
    engine = create_engine(
        DATABASE_URL,
        echo=True  # Isso vai mostrar todas as queries SQL no console
    )
    
    # Testa a conexão
    with engine.connect() as conn:
        logger.info("Conexão com o banco de dados estabelecida com sucesso!")
except Exception as e:
    logger.error(f"Erro ao conectar com o banco de dados: {str(e)}")
    raise

# Cria a sessão
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Cria a classe base para os modelos
Base = declarative_base()

# Função para obter a sessão do banco
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# Evento para log de queries
@event.listens_for(engine, "before_cursor_execute")
def before_cursor_execute(conn, cursor, statement, parameters, context, executemany):
    logger.debug(f"Executing query: {statement}") 