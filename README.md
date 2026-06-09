<div align="center">

# 📝 API Users Management

**Documentation Protocolaire · ETNA**

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=flat-square&logo=nestjs&logoColor=white)
![TypeORM](https://img.shields.io/badge/TypeORM-FE0803?style=flat-square)
![MariaDB](https://img.shields.io/badge/MariaDB-003545?style=flat-square&logo=mariadb&logoColor=white)
![Swagger](https://img.shields.io/badge/Swagger-85EA2D?style=flat-square&logo=swagger&logoColor=black)
![Status](https://img.shields.io/badge/Status-Fonctionnel-brightgreen?style=flat-square)

</div>

---

## 👤 Projet

| **Projet solo** · ETNA | `corde_t` |
|---|---|

---

## 🎯 Présentation

API REST de gestion d'utilisateurs avec un **CRUD complet** (Create, Read, Update, Delete). Développée avec **NestJS** et **TypeORM**, elle interagit avec une base **MariaDB** et expose une documentation interactive via **Swagger**.

**Endpoints disponibles :**
```
POST   /users         → Créer un utilisateur
GET    /users         → Récupérer tous les utilisateurs
GET    /users/:id     → Récupérer un utilisateur par ID
PUT    /users/:id     → Mettre à jour un utilisateur
DELETE /users/:id     → Supprimer un utilisateur
```

---

## 🏗️ Architecture

```
Documentation-Protocolaire/
├── users-api/
│   └── src/
│       └── users/    → module CRUD utilisateurs
├── Database/
│   └── bdd.sql       → schéma de la base de données
└── .env.example      → variables d'environnement
```

**Flux de données :**
```
[Client HTTP] → NestJS (REST) → TypeORM → MariaDB
                     ↓
               Swagger /api
```

---

## 🧩 Stack technique

| Technologie | Rôle |
|-------------|------|
| NestJS + TypeScript | Framework API REST |
| TypeORM | Liaison code ↔ base de données |
| MariaDB | Persistance des données |
| Swagger | Documentation interactive |

---

## 🗄️ Base de données

**Table `users` :**

```
┌───────────────┬──────────────────────────┐
│ id            │ INT (PK, AUTO_INCREMENT) │
│ first_name    │ VARCHAR(255)             │
│ name          │ VARCHAR(255)             │
│ mail          │ VARCHAR(255) UNIQUE      │
│ password      │ VARCHAR(255)             │
│ birth_date    │ DATE                     │
│ created_at    │ TIMESTAMP (AUTO)         │
│ updated_at    │ TIMESTAMP (AUTO)         │
└───────────────┴──────────────────────────┘
```

---

## 🛠️ Prérequis

<details>
<summary><b>🗄️ MariaDB</b></summary>

```bash
sudo apt install mariadb-server
sudo service mariadb start
sudo mysql_secure_installation
```
</details>

<details>
<summary><b>🟢 Node.js & NestJS</b></summary>

```bash
sudo apt install -y nodejs npm
npm install -g @nestjs/cli
```
</details>

---

## 🚀 Lancement

**1. Cloner le repo**
```bash
git clone https://github.com/ThomasC-Banks/Documentation-Protocolaire.git
cd Documentation-Protocolaire
```

**2. Créer la base de données**
```bash
sudo mysql -u root -p
```
```sql
CREATE DATABASE users_management;
```
```bash
mysql -u root -p users_management < Database/bdd.sql
```

**3. Configurer l'environnement**
```bash
cp .env.example .env
```
> Éditer `.env` et renseigner `DB_USER` et `DB_PASSWORD`

**4. Installer les dépendances et démarrer**
```bash
cd users-api
npm install
npm run start:dev
```

| Interface | URL |
|-----------|-----|
| 🔌 API | http://localhost:3000 |
| 📘 Swagger | http://localhost:3000/api |

---

## ⚡ Commandes utiles

```bash
SHOW TABLES;
DESCRIBE users;
```

---

<div align="center">

*Projet réalisé à l'ETNA · NestJS · TypeORM · MariaDB · Swagger*

`corde_t`

</div>
