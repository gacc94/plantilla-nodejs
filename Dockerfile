# Utiliza la imagen base de Node.js con Yarn
FROM node:18.14.0-alpine3.16

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia los archivos necesarios a la imagen
COPY package*.json ./

# Instala las dependencias utilizando Yarn
RUN yarn install

# Copia el código fuente de la API a la imagen
COPY . .

# Expone el puerto en el que se ejecutará la API
EXPOSE 3003

# Define el comando de inicio
CMD ["yarn", "run", "dev"]
