import * as studentsServices from '../services/studentsServices.js';

export const fetchAllstudent = async(req, res) => {
    const books = await studentsServices.fetchAllstudents();
    res.status(200).json(students);
}