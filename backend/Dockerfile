# Use uma imagem base Python oficial
FROM python:3.11-slim

# Definir diretório de trabalho
WORKDIR /app

# Copiar requirements.txt
COPY requirements.txt .

# Instalar dependências
RUN pip install --no-cache-dir -r requirements.txt

# Copiar código fonte
COPY . .

# Expor porta 5000
EXPOSE 5000

# Comando para iniciar a aplicação
CMD ["python", "run.py"] 