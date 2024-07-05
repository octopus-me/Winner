FROM node:14

WORKIR /app

COPY package*.json ./

RUN npm install

# Copiar o restante do código
COPY . .

# Construir o projeto
RUN npm run build

# Expor a porta que o projeto irá rodar
EXPOSE 3000

# Comando para iniciar o projeto
CMD ["npm", "start"]