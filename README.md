# Plantilla Proyectos NodeJs( Yarn)  👋

## nicializa un nuevo proyecto con Yarn. Esto creará un archivo package.json inicial para tu proyecto.
~~~
yarn init -y
~~~
##  Instalar Typescript
* typescript: El compilador de TypeScript que se utiliza para transpilar el código TypeScript a JavaScript. Puedes instalarlo ejecutando el siguiente comando:
~~~
yarn add -D typescript
~~~
* ts-node: Una herramienta que permite ejecutar archivos TypeScript directamente sin necesidad de compilarlos previamente. Puedes instalarlo ejecutando el siguiente comando:
~~~
yarn add -D ts-node
~~~
* @types/node: proporciona definiciones de tipo para Node.js. Es el paquete oficial de TypeScript para las definiciones de tipo de Node.js.
~~~
yarn add -D @types/node
~~~
* tsconfig.json: Un archivo de configuración que se utiliza para especificar las opciones y ajustes del compilador de TypeScript. Puedes generar este archivo de configuración ejecutando el siguiente comando:
~~~
npx tsc --init
~~~
## Asegúrate de tener instalado nodemon. Puedes instalarlo ejecutando el siguiente comando
~~~
yarn add -D nodemon
~~~
## Agregar depedncia de RXJS para programacion Reactiva (Opcional)
~~~
yarn add rxjs
~~~
## Ahora puedes comenzar a agregar las dependencias Express
*
~~~
yarn add express
~~~
* Ejecuta el siguiente comando para instalar Express y las definiciones de tipo como dependencias de desarrollo:
~~~
yarn add -D @types/express 
~~~
## Para leer archivos .env en una aplicación de Node.js, puedes utilizar la dependencia dotenv
~~~
yarn add dotenv
~~~
## Instalar libreria de Jose para JWT
~~~
yarn add -E(--exact) jose
~~~
## Instalar Libreria para JSON Schmea
~~~
yarn add ajv
~~~
~~~
yarn add @sinclair/typebox --dev
~~~
~~~
yarn add ajv-formats
~~~
~~~
yarn add ajv-errors
~~~
## Instalar Libreria mongoose
~~~
yarn add mongoose
~~~
~~~
yarn add -D @types/mongoose
~~~
~~~
yarn add -E mongodb
~~~
## Instalar libreria lodash
~~~
yarn add -E lodash
~~~
~~~
yarn add -D @types/lodash
~~~
## Instalaciones Iniciales Totales(Opcionales)
~~~
yarn add express-validator express convict  cors dotenv multer nanoid mongoose bcryptjs jsonwebtoken class-transformer uuid multer morgan rxjs express-fileupload
~~~
~~~
yarn add @types/express @types/express-fileupload @types/uuid @types/bcryptjs @types/cors @types/morgan @types/dotenv @types/multer @types/mongoose typescript ts-node  typescript nodemon @types/node @types/multer @types/jsonwebtoken module-alias
~~~
## Instalacion Helmet
~~~
yarn add helmet -S
~~~
## Instalaciones Auth ()
~~~
yarn add bcryptjs jsonwebtoken
~~~
~~~
yarn add @types/bcryptjs @types/jsonwebtoken -D
~~~ 
## Instalaciones Typegoose(Type Mongoose)
~~~
yarn add typegoose 
~~~
~~~
yarn add @typegoose/typegoose -D 
~~~
## Instalaciones Prisma ORM
~~~
yarn add prisma
~~~
~~~
npx prisma init
~~~
~~~
yarn add @prisma/client -D
~~~
~~~
npx prisma generate
~~~
~~~
npx prisma migrate dev
~~~
~~~
npx prisma studio --port=5558
~~~
## Instalacion Zod(validaciones)
~~~
yarn add zod
~~~
## Instalacion Linters ()
### Eslint
~~~
yarn add -D eslint
~~~
~~~
yarn add -D @typescript-eslint/parser
~~~
~~~
yarn add -D eslint-config-airbnb
~~~
~~~
yarn add -D @typescript-eslint/eslint-plugin
~~~
~~~
yarn add eslint-plugin-import -D
~~~
~~~
yarn add eslint-plugin-prettier -D
~~~
### Prettier
~~~
yarn add -D prettier
~~~
~~~
yarn add -D eslint-config-prettier
~~~
~~~
yarn add -D eslint-plugin-prettier
~~~
~~~
npx eslint --cache
~~~
### Husky
~~~
yarn add -D husky
~~~
* Personalizar con lint-staged(opcional)
~~~
yarn add -D lint-staged
~~~
* Ejecutar comando para iniciar Husky
~~~
yarn run prepare
~~~
## Configuracion de Docker
~~~
docker build -t docker-node .
~~~
~~~
docker run docker-node
~~~
* detener contenedor
~~~
docker stop [nombre_contenedor]
~~~
* remover contenedor
~~~
docker rm 7b3037266dc7
~~~
* Ejecutar docker con todas configuraciones(puerto - nombre)
~~~
docker run --name DockerNodeType -p 8000:3000 docker-node
~~~
~~~
docker run --name DockerNode -p 8080:3000 -v C:/Users/TuUsuario/path/to/myapp:/app -w /app -e "NODE_ENV=development" -e "PORT=3000" -d docker-node nodemon server.ts
~~~
## Docker Composee
~~~
docker-compose build
~~~
~~~
docker-compose up
~~~
## AUTOR

### GUSTAVO CAQUI CUEVA : gacc94