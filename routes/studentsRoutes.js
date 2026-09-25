import * as studentsController from '../controllers/studentskControllers.js';
import express from "express";

const studentsRoutes = express.Router();

studentsRoutes.get('/all', studentsController.fetchAllstudents);

export default studentsRoutes;