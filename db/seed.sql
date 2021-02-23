CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    email VARCHAR (500) NOT NULL,
    first_name VARCHAR(20) NOT NULL,
    last_name VARCHAR(20) NOT NULL,
    password VARCHAR(500) NOT NULL
);

CREATE TABLE appointment (
    appointment_id SERIAL PRIMARY KEY,
    date INT,
    user_id INT REFERENCES users(user_id)
);

CREATE TABLE practice (
    practice_id SERIAL PRIMARY KEY,
    time_practiced INT DEFAULT 0,
    user_id INT REFERENCES users(user_id)
);