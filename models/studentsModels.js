import pool from "../config/db.js";

export const fetchAllstudent = async() => {
    const [rows] = await pool.query("SELECT * FROM student");
    return rows;

}