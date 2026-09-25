import* as studentsModels from '../models/studentsModels.js';

export const fetchAllBooks = async() => {
    const students = await studentsModels.fetchAllstudents();
    return students;

};