# Sistema de Simulação de Financiamento Imobiliário

## Sobre o Projeto
Sistema para simulação de financiamento imobiliário desenvolvido com FastAPI no backend e React/Next.js no frontend.

## Tecnologias Utilizadas

### Backend
- Python
- FastAPI
- SQLAlchemy
- Pydantic
- PostgreSQL

### Frontend
- React.js
- Next.js
- TypeScript
- TailwindCSS

## Configuração do Ambiente

### Pré-requisitos
- Python 3.8+
- Node.js 18+
- PostgreSQL

### Variáveis de Ambiente
Crie três arquivos `.env`. O primeio na raiz do projeto, o segundo na raiz da pasta backend com as seguintes variáveis:

### arquivo .env na raiz do projeto

   ```bash
 # Configurações do Ambiente
NODE_ENV=development
FLASK_ENV=development
DEBUG=true

# Configurações do Frontend (Next.js)
NEXT_TELEMETRY_DEBUG=1
NEXT_PUBLIC_API_URL=http://localhost:8000
NEXT_PUBLIC_CLIENT_API_URL=http://localhost:8000

# Configurações do Backend (Flask/Python)
# URL de conexão com o banco de dados
# Formato: postgresql://usuario:senha@host:porta/nome_do_banco
DATABASE_URL=postgresql://postgres:sua_senha_aqui@db:5432/amore_db

# Configurações do PostgreSQL
POSTGRES_USER=postgres
POSTGRES_PASSWORD=sua_senha_aqui
POSTGRES_DB=amore_db

# Portas dos serviços (opcional, já definidas no docker-compose)
# FRONTEND_PORT=3000
# BACKEND_PORT=8000
# DATABASE_PORT=5432
   ```

### arquivo .env backend

   ```bash
  DATABASE_URL=postgresql://postgres:sua_senha_aqui@localhost:5432/amore_db
POSTGRES_USER=postgres
POSTGRES_PASSWORD=sua_senha_aqui
POSTGRES_DB=amore_db
   ```
### arquivo .env frontend
   ```bash
NODE_ENV=development
DEBUG=true
NEXT_TELEMETRY_DEBUG=1
NEXT_PUBLIC_API_URL=http://backend:8000
NEXT_PUBLIC_CLIENT_API_URL=http://localhost:8000
   ```
### Executando o docker-compose

Depois das variaveis de ambiente definidas, execute o coamndo abaixo:
   ```bash
docker-compose up --build -d
   ```
> ⚠️ Certifique-se de que todas as variáveis de ambiente estejam configuradas antes de executar o servidor


