INSERT INTO department (id, name)
VALUES
    (1, "Sales"),
    (2, "Marketing"),
    (3, "IT"),
    (4, "Logistics");

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

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES
    (1, "Humairaa", "Serrano", 2, NULL),
    (2, "Madison", "Morgan", 4, NULL),
    (3, "Komal", "Woodcock", 6, NULL),
    (4, "Ivan", "Dotson", 8, NULL),
    (5, "Sameer", "McDonald", 1, 2),
    (6, "Katie", "Gray", 3, 4),
    (7, "Wade", "Christiansen", 5, 6),
    (8, "Dante", "Roth", 7, 8);