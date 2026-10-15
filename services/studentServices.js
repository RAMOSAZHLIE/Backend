import* as studentsModels from '../models/studentsModels.js';

export const fetchAllBooks = async() => {
    const students = await studentsModels.fetchAllstudents();
    return students;

};

export const createStudent = async(student) => {
    const studentId = await studentsModels.insert(student);
    return studentId;
}
export const deleteStudents = async(id) => {
    const deletedStudents = await studentsModels.remove(id);
    return deletedStudents;
}