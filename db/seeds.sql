-- DEPT SEEDS
--- Check to see if I need ID
INSERT INTO department (id, name)
VALUES
    (1, "Sales"),
    (2, "Marketing"),
    (3, "IT"),
    (4, "Logistics");

-- ROLE SEEDS
--- Check to see if I need ID
INSERT INTO role (id, title, salary, department_id)
VALUES
    (1, "Sales Representative", 55000, 1),
    (2, "Sales Manager", 70000, 1),
    (3, "Digital Marketer", 55000, 2),
    (4, "Growth Marketer", 85000, 2),
    (5, "Technical Support", 40000, 3),
    (6, "Network Administrator", 50000, 3),
    (7, "Warehouse Associate", 35000, 4),
    (8, "Warehouse Manager", 45000, 4);

-- EMPLOYEE SEEDS
--- Check to see if I need ID
INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES
    (1, "Humairaa", "Serrano", 1, 2),
    (2, "Madison", "Morgan", 2, NULL),
    (3, "Komal", "Woodcock", 3, 4),
    (4, "Ivan", "Dotson", 4, NULL),
    (5, "Sameer", "McDonald", 5, 6),
    (6, "Katie", "Gray", 6, NULL),
    (7, "Wade", "Christensen", 7, 8),
    (8, "Dante", "Roth", 8, NULL);