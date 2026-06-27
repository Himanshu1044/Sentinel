import pool from '../config/db.js'

export const getProfileById = async (userId) => {
    const result = await pool.query(`
        SELECT  id,
            name,
            email,
            role,
            created_at
        FROM users 
        WHERE id = $1`,
        [userId]
    )

    return result.rows[0];
}

export const updateProfile = async (
    userId,
    name,
    email
) => {
    const result = await pool.query(
        `
        UPDATE users
        SET
            name = $1,
            email = $2
        WHERE id = $3
        RETURNING
            id,
            name,
            email,
            role,
            created_at
        `,
        [name, email, userId]
    );

    return result.rows[0];
};

export const getUserByEmail = async (email) => {
    const result = await pool.query(
        `
        SELECT id
        FROM users
        WHERE email = $1
        `,
        [email]
    );

    return result.rows[0];
};

export const getProfileStatistics = async (userId) => {
    const result = await pool.query(
        `
        SELECT
            COUNT(*) AS "totalReports",

            COUNT(*) FILTER (
                WHERE status = 'approved'
            ) AS approved,

            COUNT(*) FILTER (
                WHERE status = 'pending'
            ) AS pending,

            COUNT(*) FILTER (
                WHERE status = 'rejected'
            ) AS rejected

        FROM incidents

        WHERE user_id = $1
        `,
        [userId]
    );

    return result.rows[0];
};
