INSERT INTO appointment (date)
VALUES ($1)
RETURNING *;