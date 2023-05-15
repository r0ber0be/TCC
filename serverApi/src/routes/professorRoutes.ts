import { Router } from "express";
import ProfessorController from "../controllers/ProfessorController";

const professorRoutes = Router();

professorRoutes.get('/turmas', ProfessorController.listarTurmasDoProfessor);

export default professorRoutes;