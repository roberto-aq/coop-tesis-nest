<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# API REST CON NESTJS COOP

## Levantar en Desarrollo

1. Ejecutar las dependencias

```
npm install
```
2. Renombrar el archivo .env.template a .env y reemplazar con las variables respectivas
3. Levantar la base de datos con Docker Compose 
```
docker compose up -d
```

4. Ejecutar los comandos de prisma para conectar la base de datos 
```
npm run push:mysql
npm run push:postgres
```

5. Ejecutar el servidor 
```
npm run start:dev
```