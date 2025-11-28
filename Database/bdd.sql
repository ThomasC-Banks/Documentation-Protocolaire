-- Création de la BDD --

CREATE DATABASE IF NOT EXISTS users_management;
USE users_management;

-- Création de la table: Users --

CREATE TABLE users (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    name VARCHAR(100) NOT NULL,
    mail VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    birth_date DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

---Créer ou donner les droits à l’utilisateur--

CREATE USER 'user1'@'localhost' IDENTIFIED BY 'your_pwd';
GRANT ALL PRIVILEGES ON users_management.* TO 'your_user'@'localhost';
FLUSH PRIVILEGES;