# Dockerfile para Back-End
FROM node:14

# Definir diretório de trabalho
WORKDIR /app

# Copiar package.json e package-lock.json
COPY package*.json ./

# Instalar dependências
RUN npm install

# Copiar o restante do código
COPY . .

# Expor a porta que o projeto irá rodar
EXPOSE 4000

# Comando para iniciar o servidor
CMD ["node", "index.js"]
