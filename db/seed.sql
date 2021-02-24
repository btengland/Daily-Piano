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
    day VARCHAR(30),
    time_practiced INT DEFAULT 0,
    user_id INT REFERENCES users(user_id)
);


CREATE TABLE appointment (
    appointment_id SERIAL PRIMARY KEY,
    date DATE,
    user_id INT REFERENCES users(user_id)
);