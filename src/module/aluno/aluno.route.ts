import express, { Request, Response, Router } from 'express';
import alunoModel from './aluno.model';

const router: Router = express.Router();

router.get('/', async (_, res: Response) => {
  const data = await alunoModel.getAll();
  return res.status(200).json({ data });
});

router.post('/', async (req: Request, res: Response) => {
  const data = await alunoModel.store(req.body);
  return res.status(200).json({ data });
});

export default router;
