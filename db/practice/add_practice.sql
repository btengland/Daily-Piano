INSERT INTO practice (monday, tuesday, wednesday, thursday, friday, saturday, sunday, goal, user_id)
VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9);

SELECT * FROM practice
WHERE user_id = $9;