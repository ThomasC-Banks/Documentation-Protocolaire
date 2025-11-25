# 📝 API Users Management

## 🌟 Description
API pour gérer des utilisateurs.
Développée avec **NestJS** et **MariaDB**

Fonctionnalités :  

- 👤 Gestion des utilisateurs (CRUD)  

## 📌 Sommaire
1. [Installation et création de la base de données](#installation-et-création-de-la-base-de-données-avec-mariadb)  
2. [Schéma de la base de données](#schéma-de-la-base-de-donnée)
3. [Installation et configuration de NestJS](#installation-et-configuration-de-nestjs)  
4. [Lancement du serveur](#lancement-du-serveur)  
5. 

---

## 🛠️ Étape 1 : Installation et création de la base de données avec MariaDB

    1-- Installer MariaDB dans le terminal:
        sudo apt update
        sudo apt install mariadb-server
    2-- Démarrer MariaDB
        sudo service mariadb start
    3-- Sécuriser l'installation
        sudo mysql_secure_installation
    4--Se connecter à MariaDB
        sudo mysql -u root -p
    5-- Création de la base de données
        CREATE DATABASE users_management;
        Exit
    6-- Création des tables
        mysql -u root -p users_management < bdd.sql

--- Commandes pouvant être utiles:
    SHOW TABLES;    -> affiche les tables
    DESCRIBE Users; -> sert à afficher la structure de la table Users

## 🗂️ Étape 2 : Schéma de la base de données

📌 Table : users
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

## 🛠️ Étape 3 : Installation de NestJS

    1-- Installer Node.js et NPM
        sudo apt install -y nodejs npm
    2--  Installer le CLI NestJS
        npm install -g @nestjs/cli
    3-- Configuration de MariaDB avec TypeORM, installation de TypeORM
        npm install @nestjs/typeorm typeorm mysql2
    4-- Lancement du serveur API NestJS
        npm run start:dev

L'API est par défaut accessible sur http://localhost:3000.

## Étape 4 : Tester les requêtes d'API via Swagger


```
 ____  _ _    ____  _  _   __   _  _   __   ____ 
(  _ \( \/ )  (_  _)/ )( \ /  \ ( \/ ) / _\ / ___)
 ) _ ( )  /     )(  ) __ ((  O )/ \/ \/    \\___ \
(____/(__/     (__) \_)(_/ \__/ \_)(_/\_/\_/(____/

```
