# Build stage
FROM node:20.11.1-alpine AS builder

WORKDIR /app

# Instalar dependências necessárias
RUN apk add --no-cache libc6-compat

# Copiar arquivos de dependências
COPY package.json yarn.lock ./

# Instalar dependências
RUN yarn install --frozen-lockfile

# Copiar código fonte
COPY . .

# Build da aplicação
RUN yarn build

# Production stage
FROM node:20.11.1-alpine AS runner

WORKDIR /app

# Instalar dependências necessárias
RUN apk add --no-cache libc6-compat

# Criar usuário não-root
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copiar apenas os arquivos necessários do stage anterior
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Definir permissões corretas
RUN chown -R nextjs:nodejs /app

# Mudar para usuário não-root
USER nextjs

# Expor porta 3000
EXPOSE 3000

# Definir variáveis de ambiente
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Comando para iniciar a aplicação
CMD ["yarn", "start"] 