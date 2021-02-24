INSERT INTO appointment (date, user_id)
VALUES ($1, $2)
RETURNING *;