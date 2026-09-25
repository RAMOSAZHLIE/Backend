import * as studentServices from '../services/studentServices.js';

export const fetchAllstudent = async(req, res) => {
    const books = await studentServices.fetchAllstudent();
    res.status(200).json(student);
}