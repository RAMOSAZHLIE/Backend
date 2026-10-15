import * as studentsController from '../controllers/studentsControllers.js';
import express from "express";

const studentsRoutes = express.Router();

studentsRoutes.get('/all', studentsController.fetchAllstudent);
studentsRoutes.post ('/', studentsController.createStudent);
studentsRoutes.delete('/:id', studentsController.deletestudents);

export default studentsRoutes;