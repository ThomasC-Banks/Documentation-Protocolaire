## 📝 API Users Management

### 📌 Description

Cette API permet de gérer des utilisateurs via un CRUD complet :

POST /users – Créer un utilisateur
GET /users – Récupérer tous les utilisateurs
GET /users/:id – Récupérer un utilisateur par son ID
PUT /users/:id – Mettre à jour un utilisateur
DELETE /users/:id – Supprimer un utilisateur

Elle est développée avec NestJS, utilise TypeORM, et se connecte à une base MariaDB.
La documentation interactive de l’API est disponible via Swagger.

## 📁 Cloner le projet

    git clone <URL_DU_REPO>
    cd users-api

Prérequis !

Avant de lancer l’API, vous devez avoir :
    Node.js
    npm ou yarn
    NestJS CLI

MariaDB installé et en cours d’exécution

## 🗄️ Base de données

Création des tables
```
mysql -u root -p users_management < bdd.sql
```

📊 Table : users

```
┌─────────────────────────────────────────────────────────┐
│                        users                             │
├───────────────────────────────┬──────────────────────────┤
│ id                            │ INT (PK, AUTO_INCREMENT) │
│ first_name                    │ VARCHAR(255)             │
│ name                          │ VARCHAR(255)             │
│ mail                          │ VARCHAR(255) UNIQUE      │
│ password                      │ VARCHAR(255)             │
│ birth_date                    │ DATE                     │
│ created_at                    │ TIMESTAMP (AUTO)         │
│ updated_at                    │ TIMESTAMP (AUTO)         │
└───────────────────────────────┴──────────────────────────
```

Le fichier bdd.sql fourni doit être importé dans MariaDB pour créer automatiquement la structure.

## 🚀 Lancement du serveur
        npm run start:dev

L’API sera accessible à :
     http://localhost:3000

## 📘 Documentation Swagger

Une interface complète de tests est disponible à :
    http://localhost:3000/api


```
 ____  _ _    ____  _  _   __   _  _   __   ____ 
(  _ \( \/ )  (_  _)/ )( \ /  \ ( \/ ) / _\ / ___)
 ) _ ( )  /     )(  ) __ ((  O )/ \/ \/    \\___ \
(____/(__/     (__) \_)(_/ \__/ \_)(_/\_/\_/(____/

```
