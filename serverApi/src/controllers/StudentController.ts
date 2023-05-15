import { Request, Response } from 'express';
import axios from 'axios';
import { buscarAlunosFIWARE } from '../services/studentServices';

//interface Student {
//  id: Number
//}

class StudentController {
  async realizarCadastro() {

  }

  async realizarLogin() {
    
  }

  async listarTurmasAluno() {

  }

  async listarAlunos(request: Request, response: Response) {
    let students = await buscarAlunosFIWARE();
    return response.status(200).send(students[2]);
  }

  async verificarPresenca(id: Number) {
    const students = await axios.put('http://localhost:1026/v2/entities/?options=keyValues', {
      data: id
    })
      .then(resolve => {
        console.log('everything works just fine')
      })
      .catch(() => {
        console.log('error')
      });
  }
}

export default new StudentController;