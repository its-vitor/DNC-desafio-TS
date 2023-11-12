import express, { Express } from 'express';
import rateLimit from 'express-rate-limit';
import alunoRoute from './src/module/aluno/aluno.route';

const app: Express = express();
app.use(express.json());

// evitar sobrecarregar o servidor com muitas requisições.
app.use(rateLimit({
  windowMs: 60 * 1000,
  max: 60,
}));

app.use('/aluno', alunoRoute);

app.listen(8080, () => {
  console.log('server running!');
});
