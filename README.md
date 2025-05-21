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
Crie um arquivo `.env` na raiz do projeto backend com as seguintes variáveis:

### Para iniciar o Banco de dados
1. **Navegue até a pasta do backend**
   ```bash
   cd backend
   ```
2. **Inicie a database**
    ```bash
   python -m app.database.init_db
   ```

### Configuração e Execução do Backend

1. **Navegue até a pasta do backend**
   ```bash
   cd backend
   ```

2. **Ative o ambiente virtual**
   ```bash
   source venv/Scripts/activate
   ```
   > Nota: Você verá `(venv)` no início do prompt quando estiver ativado

3. **Instale as dependências do projeto**
   ```bash
   pip install -r requirements.txt --no-cache-dir
   ```

4. **Execute o servidor de desenvolvimento**
   ```bash
   python run.py
   ```

> ⚠️ Certifique-se de que todas as variáveis de ambiente estejam configuradas antes de executar o servidor


