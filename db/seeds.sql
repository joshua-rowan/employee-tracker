INSERT INTO department (name)
VALUES ("Administrative"),
        ("Support"),
        ("Talent"),
        ("Sales"),
        ("Legal");

INSERT INTO role (title, salary, department_id)
VALUES 
    ("Manager", 125000.00, (SELECT id FROM department WHERE name = "Administrative")),
    ("Roadie", 35000.00, (SELECT id FROM department WHERE name = "Support")),
    ("Singer", 750000.00, (SELECT id FROM department WHERE name = "Talent")),
    ("Sales_Consultant", 95000.00, (SELECT id FROM department WHERE name = "Sales")),
    ("Lawyer", 115000.00, (SELECT id FROM department WHERE name = "Legal"));

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ("Brian", "Epstein", (SELECT id FROM role WHERE title = "Manager"), NULL);

SET @manager_id = (SELECT id FROM employee WHERE first_name = "Brian" AND last_name = "Epstein");

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ("Axl", "Rose", (SELECT id FROM role WHERE title = "Singer"), @manager_id),
    ("Carl", "Cable", (SELECT id FROM role WHERE title = "Roadie"), @manager_id),
    ("Diana", "Dollars", (SELECT id FROM role WHERE title = "Sales_Consultant"), @manager_id),
    ("Wendy", "Winner", (SELECT id FROM role WHERE title = "Lawyer"), @manager_id);