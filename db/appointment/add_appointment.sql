INSERT INTO appointment (date, phone_number, user_id)
VALUES ($1, $2, $3)
RETURNING *;