import * as studentController from '../controllers/studentkControllers.js';
import express from "express";

const studentRoutes = express.Router();

bookRoutes.get('/all', studentController.fetchAllstudent);

export default studentRoutes;