INSERT INTO donor (name, blood_type, bloodbank_id, username, password)
VALUES ("Sallie Mae", "O", 1, "username1","password1"),
       ("Chris", "A", 2, "username2","password2"),
       ("Aiden", "B+", 3, "username3","password3"),
       ("Ebony", "A", 1, "username4","password4");

INSERT INTO patient (name, blood_type, disease, bloodbank_id, username, password)
VALUES ("Bob", "O", "sickle cell", 1,"username5","password5"),
       ("Karen", "B+", "sickle cell", 1,"username6","password6"),
       ("JoJo", "A-", "sickle cell", 2,"username7","password7"),
       ("Tim", "A", "sickle cell", 2, "username8","password8");

INSERT INTO bloodbank (bloodbank_name, location, patient_id, donor_id)
VALUES ("Mecklenburg", "Mecklenburg", 1, 2),
       ("Center City ", "Center City", 1, 3),
       ("Huntersville", "Huntersville", 2, 4),
       ("Cornelius", "Cornelius", 2, 2);