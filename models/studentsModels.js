import pool from "../config/db.js";

export const fetchAllstudents = async() => {
    const [rows] = await pool.query("SELECT * FROM students");
    return rows;

}