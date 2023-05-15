import 'express-async-errors';
import cors from 'cors';
import express from 'express';
import studentRoutes from './routes/studentRoutes';
import professorRoutes from './routes/professorRoutes';

const app = express();

app.use(express.json());
app.use(studentRoutes);
app.use(professorRoutes);

app.use(cors({ origin: 'http://localhost:3000' }));

app.get('/', (req, res) => {
  res.send('Boa noite')
})
app.listen(5000, () => {
  console.log('server is listening')
})