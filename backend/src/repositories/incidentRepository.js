import pool from '../config/db.js'

export const createIncident = async ({
    title, description, category, latitude, longitude, userId }) => {
    const result = await pool.query('INSERT INTO incidents(title, description, category, latitude, longitude, user_Id) VALUES($1,$2,$3,$4,$5,$6) RETURNING *', [title, description, category, latitude, longitude, userId])

    return result.rows[0];
}

export const getIncidentCount = async (
    status,
    category
) => {

    let query = `
        SELECT COUNT(*) AS total
        FROM incidents
        WHERE 1=1
    `;

    const values = [];
    let index = 1;

    if (status) {
        query += ` AND status = $${index}`;
        values.push(status);
        index++;
    }

    if (category) {
        query += ` AND category = $${index}`;
        values.push(category);
    }

    const result = await pool.query(
        query,
        values
    );

    return parseInt(
        result.rows[0].total
    );
};

export const getAllIncidents = async (
    page = 1,
    limit = 10,
    status,
    category,
    sort = "newest"
) => {

    const offset = (page - 1) * limit;

    let query = `
        SELECT *
        FROM incidents
        WHERE 1=1
    `;

    const values = [];
    let index = 1;

    if (status) {
        query += ` AND status = $${index}`;
        values.push(status);
        index++;
    }

    if (category) {
        query += ` AND category = $${index}`;
        values.push(category);
        index++;
    }

    const orderBy =
        sort === "oldest"
            ? "ASC"
            : "DESC";

    query += `
    ORDER BY created_at ${orderBy}
    LIMIT $${index}
    OFFSET $${index + 1}
`;

    values.push(limit);
    values.push(offset);

    const result = await pool.query(
        query,
        values
    );

    return result.rows;
};

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
    } = data;

    const result = await pool.query(
        `
    UPDATE incidents
    SET
      title = $1,
      description = $2,
      category = $3,
       updated_at = CURRENT_TIMESTAMP
    WHERE id = $4
    RETURNING *
    `,
        [
            title,
            description,
            category,
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

export const getIncidentStatistics = async () => {

    const result = await pool.query(`
        SELECT
            COUNT(*) AS "totalIncidents",

            COUNT(*) FILTER (
                WHERE status = 'pending'
            ) AS pending,

            COUNT(*) FILTER (
                WHERE status = 'approved'
            ) AS approved,

            COUNT(*) FILTER (
                WHERE status = 'rejected'
            ) AS rejected,

            COUNT(*) FILTER (
                WHERE DATE(created_at) = CURRENT_DATE
            ) AS today

        FROM incidents
    `);

    const stats = result.rows[0];

    return {
        totalIncidents: Number(stats.totalIncidents),
        pending: Number(stats.pending),
        approved: Number(stats.approved),
        rejected: Number(stats.rejected),
        today: Number(stats.today),
    };
};