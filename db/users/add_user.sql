INSERT INTO users (email, first_name, last_name, password, is_admin)
VALUES ($1, $2, $3, $4, FALSE)
RETURNING *;