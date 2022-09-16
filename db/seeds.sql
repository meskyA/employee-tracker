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
    ('Chief Accountant', 100000, 4),
    ('Marketing Specialist', 80000, 2),
    ('Sales Manager', 95000, 2),
    ('Tech Manager', 110000, 3),
    ('Junior Developer', 93000, 3),
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
