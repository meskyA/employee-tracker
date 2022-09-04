DROP DATABASE IF EXISTS employees;
CREATE DATABASE employees;
USE employees;
CREATE TABLE department (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30) UNIQUE NOT NULL
);
CREATE TABLE role (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30) UNIQUE NOT NULL,
  salary DECIMAL UNSIGNED NOT NULL,
  department_id INT UNSIGNED NOT NULL,
  INDEX dep_ind (department_id),
  CONSTRAINT fk_department FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE CASCADE
);
CREATE TABLE employee (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT UNSIGNED NOT NULL,
  INDEX role_ind (role_id),
  CONSTRAINT fk_role FOREIGN KEY (role_id) REFERENCES role(id) ON DELETE CASCADE,
  manager_id INT UNSIGNED,
  INDEX man_ind (manager_id),
  CONSTRAINT fk_manager FOREIGN KEY (manager_id) REFERENCES employee(id) ON DELETE SET NULL
);
use employees;
INSERT INTO department
    (name)
VALUES
    ('HR'),
    ('Marketing'),
    ('Tech'),
    ('Finance');
INSERT INTO role
    (title, salary, department_id)
VALUES
    ('Manager', 125000, 1),
    ('Assistant Manager', 85000, 1),
    ('Chief Accountant', 100000, 2),
    ('Marketing Specialist', 80000, 3),
    ('Sales Manager', 95000, 3),
    ('Tech Manager', 110000, 4),
    ('Junior Developer', 93000, 4),
    ('Administrative Assistant', 65000, 1);
INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ('Mary', 'Amde', 1, NULL),
    ('Sophia', 'Holland', 2, 1),
    ('Seyoum', 'Teshome', 3, NULL),
    ('Rahel', 'Kebede', 4, 3),
    ('Martha', 'Zegeye', 5, NULL),
    ('Don', 'Smith', 6, 5),
    ('Michael', 'Jackson', 7, NULL),
    ('Bob', 'Duggins', 8, 7);