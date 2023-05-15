import axios from "axios";

export async function buscarAlunosFIWARE() {
  try {
    const response = await axios.get('http://localhost:1026/v2/entities/?options=keyValues&type=Student');
    return response.data;
  } catch (error) {
    console.log('Erro ao buscar os dados do FIWARE.', error)
  }
}