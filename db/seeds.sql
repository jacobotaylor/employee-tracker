INSERT INTO department (name)
VALUES
("Management"),
("Engineers"),
("Designers");

INSERT INTO role (title, salary, department_id)
VALUES  
("General Manager", 90000, 1),
("Assisant Manager", 80000, 1),
("Lead Engineer", 90000, 2),
("Junior Engineer", 70000, 2),
("Creative Lead", 88000, 3),
("UX Designer", 67000, 3),
("Graphic Designer", 65000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  
("Dave", "Grohl", 1, null),
("Taylor", "Hawkins", 2, 1),
("Chris", "Shiflett", 3, 1),
("Pat", "Smear",4, null),
("Nate", "Mendal", 5, 4),
("Patrick", "Stump", 6, 7),
("Pete", "Wentz", 7, null);
