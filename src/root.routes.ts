import Router, { Request, Response } from 'express';

export const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.send('Api is working . Looks to docs to use.');
});

// other routes to use
