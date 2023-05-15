import { Request, Response } from "express";
import { buscarTurmasDeProfessor } from "../services/professorServices";

class ProfessorController {
  async listarProfessores(request: Request, response: Response) {
    //const professores = await axios
  }

  async listarTurmasDoProfessor(request: Request, response: Response) {
    let turmas = await buscarTurmasDeProfessor();
    console.log(turmas);
    return response.status(200).send(turmas);
  }
}

export default new ProfessorController;