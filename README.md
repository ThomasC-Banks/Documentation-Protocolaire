## 📝 API Users Management

### 📌 Description

Cette API permet de gérer des utilisateurs via un CRUD complet (Create, Read, Update, Delete).
Elle est développée avec NestJS, un framework Node.js moderne et modulaire, et utilise TypeORM pour interagir avec une base MariaDB.

Les fonctionnalités principales incluent :

Création d’un utilisateur avec validation des champs, hachage sécurisé du mot de passe et vérification de la date de naissance.

Lecture de tous les utilisateurs ou d’un utilisateur spécifique par son ID.

Mise à jour des informations d’un utilisateur existant.

Suppression d’un utilisateur.

L’API intègre également :

Gestion complète des erreurs avec messages en français pour une meilleure expérience développeur.

Une documentation interactive Swagger pour tester facilement tous les endpoints.

Support de configuration via fichier .env pour gérer la connexion à la base de données et les variables d’environnement.

Elle est développée avec NestJS, utilise TypeORM, et se connecte à une base MariaDB.


## ✏️ Prérequis 

- **Git** : [https://git-scm.com/downloads](https://git-scm.com/downloads)  
- **MariaDB** : [Télécharger MariaDB](https://mariadb.org/download/)
- **Node.js** : [Installer Node.js](https://nodejs.org/)
- **npm** (fourni avec Node.js) ou **Yarn** : [Installer Yarn](https://classic.yarnpkg.com/lang/en/docs/install/)
- **NestJS CLI** : [Documentation NestJS CLI](https://docs.nestjs.com/cli/overview)

## 📁 Cloner le projet

    git clone git@rendu-git.etna-alternance.net:module-10138/activity-54462/group-1068371.git
    cd users-api


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

## ⚙️ Configuration de l’environnement

Avant de lancer l’API, vous devez créer votre fichier .env à partir de l’exemple fourni :
```
cp .env.example .env
```
Ensuite, ouvrez le fichier .env et modifiez les variables de connexion à la base de données :

    DB_USER : nom de l’utilisateur MariaDB
    DB_PASSWORD : mot de passe de l’utilisateur MariaDB

Assurez-vous que l’utilisateur et le mot de passe correspondent à votre configuration MariaDB.

## 🚀 Lancement du serveur
```
npm run start:dev
```

L’API sera accessible à :
     http://localhost:3000

## ⭐ Description du CRUD : 

Cette API constitue une base solide pour des projets nécessitant la gestion d’utilisateurs sécurisée et maintenable, prête à être étendue selon vos besoins.

    POST /users – Créer un utilisateur
    GET /users – Récupérer tous les utilisateurs
    GET /users/:id – Récupérer un utilisateur par son ID
    PUT /users/:id – Mettre à jour un utilisateur
    DELETE /users/:id – Supprimer un utilisateur

## 📘 Documentation Swagger

Une interface complète de tests est disponible à :
    http://localhost:3000/api


```
 ____  _ _    ____  _  _   __   _  _   __   ____ 
(  _ \( \/ )  (_  _)/ )( \ /  \ ( \/ ) / _\ / ___)
 ) _ ( )  /     )(  ) __ ((  O )/ \/ \/    \\___ \
(____/(__/     (__) \_)(_/ \__/ \_)(_/\_/\_/(____/

```
