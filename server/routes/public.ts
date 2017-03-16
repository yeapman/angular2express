import { Router, Response, Request } from 'express';

const publicRouter: Router = Router();

publicRouter.post('/', (request: Request, response: Response) => {

  response.json({

  })
});

export { publicRouter }
