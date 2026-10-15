import pool from "../config/db.js";

export const fetchAllstudents = async() => {
    const [rows] = await pool.query("SELECT * FROM students");
    return rows;

};

export const insert = async(student) => {
    const [result] = await pool.query(
        "INSERT INTO students (name, srcode, program) VALUES (?,?,?)", [student.name, student.srcode, student.program]
    );
    return result.insertId;
}