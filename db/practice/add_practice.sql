INSERT INTO practice (day, time_practiced, user_id)
VALUES ($1, $2, $3);

SELECT * FROM practice
WHERE user_id = $3;