## **Migraciones 4**

Las migraciones se utilizan para poder hacer acciones en la base de datos (En nuestro caso, para crear las tablas).
### **Comandos básicos**
#### **Correr migraciones**
```typescript
npx sequelize-cli db:migrate
```

#### **Deshacer ultimas migraciones**
```typescript
npx sequelize-cli db:migrate down
```

#### **Crear una nueva tabla-modelo**
Colocar el nombre del modelo, sequelize no acepta tablas en singular por lo que tomará el nombre que coloque en plural. Indique todos los atributos que sean necesarios.
```typescript
npx sequelize-cli model:generate --name countries --attributes name:string,iso:string
```

#### **Crear un seeder**
```typescript
npx sequelize-cli seed:generate --name NOMBRE_SEEDER
```

#### **Correr los seeders**
```typescript
npx sequelize-cli db:seed:all
```

#### **Algunos comandos para generar los modelos**
```
npx sequelize-cli db:seed:all
npx sequelize-cli model:generate --name competition --attributes name:string,year:integer,type:string,idCountry:integer
npx sequelize-cli model:generate --name user --attributes first_name:string,last_name:string,password:string,email:string,phone:integer,photo:string,gender:string,birth_date:date,location:string,idCountry:integer,type:string,status:integer
npx sequelize-cli model:generate --name quiniela --attributes name:string,date:date,status:integer,idUser:integer
npx sequelize-cli model:generate --name quiniela_team --attributes idQuiniela:integer,idTeam:integer,start_date:date
npx sequelize-cli model:generate --name quiniela_competition --attributes idQuiniela:integer,idCompetition:integer,start_date:date
npx sequelize-cli model:generate --name result --attributes idSoccerGame:integer,idUser:integer,score_home:integer,score_away:integer
npx sequelize-cli model:generate --name notice --attributes idUser:integer,title:string,description:string,date:date,photo:string,idTeam:integer
npx sequelize-cli model:generate --name team_user --attributes idTeam:integer,idUser:integer
```