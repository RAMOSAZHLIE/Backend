import * as studentsServices from '../services/studentServices.js';

export const fetchAllstudent = async(req, res) => {
    const books = await studentsServices.fetchAllstudents();
    res.status(200).json(students);
}
export const createStudent = async (req, res) => {
    const {name, srcode, program} = req.body;
    const student = {name, srcode, program};

    try{
        const studentId = await studentsServices.createStudent(student);
        res.status(200).json({
            sucess: true,
            message: studentId
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            error: "internal Service Error"
        });
    }
}