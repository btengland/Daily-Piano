SELECT * FROM practice
WHERE user_id = $1 AND day BETWEEN $2 AND $3;