import { Router } from 'express';
import StudentController from '../controllers/StudentController';

const studentRoutes = Router();

studentRoutes.get('/students', StudentController.listarAlunos);
studentRoutes.post('/students', StudentController.verificarPresenca);

export default studentRoutes;