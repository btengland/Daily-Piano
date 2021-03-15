DROP TABLE appointment;
DROP TABLE practice;
DROP TABLE users;

CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    email VARCHAR (500) NOT NULL,
    first_name VARCHAR(20) NOT NULL,
    last_name VARCHAR(20) NOT NULL,
    is_admin BOOLEAN,
    password VARCHAR(500) NOT NULL
);

CREATE TABLE practice (
    practice_id SERIAL PRIMARY KEY,
    monday INT DEFAULT 0,
    tuesday INT DEFAULT 0,
    wednesday INT DEFAULT 0,
    thursday INT DEFAULT 0,
    friday INT DEFAULT 0,
    saturday INT DEFAULT 0,
    sunday INT DEFAULT 0,
    goal INT DEFAULT 0,
    user_id INT REFERENCES users(user_id)
);


CREATE TABLE appointment (
    appointment_id SERIAL PRIMARY KEY,
    phone_number VARCHAR(20),
    date TIMESTAMPTZ,
    user_id INT REFERENCES users(user_id)
);

UPDATE users
SET is_admin = true
WHERE user_id = 1;