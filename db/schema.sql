DROP DATABASE IF EXISTS tracker_DB;

CREATE DATABASE tracker_DB;

USE tracker_DB;

-- Creates department
CREATE TABLE department(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL
);

-- table for individual roles --
--- dont want to cascade --- 
CREATE TABLE role(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT NOT NULL,
    FOREIGN KEY department_id REFERENCES department(id)
);

-- creates employee table --
--- do want to cascade ---
CREATE TABLE employee(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    f_name VARCHAR(35) NOT NULL,
    l_name VARCHAR(35) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT
    FOREIGN KEY (role_id) REFERENCES role(id) ON DELETE CASCADE
    FOREIGN KEY (manager_id) REFERENCES employee(id) ON DELETE CASCADE
);