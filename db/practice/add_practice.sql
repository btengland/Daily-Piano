INSERT INTO practice (day, time_practiced, user_id)
VALUES ($1, $2, $3)
RETURNING *;