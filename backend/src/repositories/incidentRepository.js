import pool from '../config/db.js'

export const createIncident = async ({
    title, description, category, latitude, longitude, userId }) => {
    const result = await pool.query('INSERT INTO incidents(title, description, category, latitude, longitude, user_Id) VALUES($1,$2,$3,$4,$5,$6) RETURNING *', [title, description, category, latitude, longitude, userId])

    return result.rows[0];
}

export const getAllIncidents = async () => {
    const result = await pool.query('SELECT * FROM incidents ORDER BY created_at')
    return result.rows;
}

export const getIncidentById = async (id) => {
    const result = await pool.query(
        `
      SELECT *
      FROM incidents
      WHERE id = $1
    `,
        [id]
    );

    return result.rows[0];
};

export const getIncidentsByUserId = async (
    userId
) => {
    const result = await pool.query(
        `
      SELECT *
      FROM incidents
      WHERE user_id = $1
      ORDER BY created_at DESC
    `,
        [userId]
    );

    return result.rows;
};

export const updateIncident = async (
    id,
    data
) => {
    const {
        title,
        description,
        category,
        latitude,
        longitude,
    } = data;

    const result = await pool.query(
        `
    UPDATE incidents
    SET
      title = $1,
      description = $2,
      category = $3,
      latitude = $4,
      longitude = $5,
      created_at = CURRENT_TIMESTAMP
    WHERE id = $6
    RETURNING *
    `,
        [
            title,
            description,
            category,
            latitude,
            longitude,
            id,
        ]
    );

    return result.rows[0];
};

export const deleteIncident = async (
    id
) => {
    const result = await pool.query(
        `
    DELETE FROM incidents
    WHERE id = $1
    RETURNING *
    `,
        [id]
    );

    return result.rows[0];
};

export const updateIncidentImage = async (incidentId, imageUrl) => {
    const result = await pool.query('update incidents SET image_url=$1 where id = $2 RETURNING *', [imageUrl, incidentId])
    return result.rows[0];
}

export const updateIncidentStatus = async (incidentId, status) => {
    const result = await pool.query('update incidents SET status = $1,created_at = CURRENT_TIMESTAMP where id =$2 RETURNING *', [status, incidentId])
    return result.rows[0];
}

export const getPendingIncidents = async () => {
    const result = await pool.query(`SELECT *
                FROM incidents
                WHERE status = 'pending'
                ORDER BY created_at DESC`);
    return result.rows;
}