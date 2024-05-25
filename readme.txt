This is a skeleton project setup with 

typescript
express
prisma
cors
dotenv
yup
eslint
nodemon
prisma
PostgreSQL

kill port commands reference
it012305@Tuhin-MacBook-Pro ~ % sudo lsof -i:5432
Password:
COMMAND  PID     USER   FD   TYPE             DEVICE SIZE/OFF NODE NAME
postgres 363 postgres    7u  IPv6 0x7b0ce78bfa7d7ca1      0t0  TCP *:postgresql (LISTEN)
postgres 363 postgres    8u  IPv4 0x7b0ce77d94035c71      0t0  TCP *:postgresql (LISTEN)
it012305@Tuhin-MacBook-Pro ~ % sudo kill -9 363

up docker image
docker compose up -d 

down docker image
docker compose down

Generate Prisma Client: Generate Prisma Client by running:
npx prisma generate

Migrate database schema: After defining your schema, apply migrations to create your database tables:
npx prisma migrate dev --name init
