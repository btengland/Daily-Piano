INSERT INTO practice (time_practiced)
VALUES ($1)
RETURNING *;