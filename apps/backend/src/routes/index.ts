import Router from 'koa-router';
import { registrarVetsRoutes } from './veterinario';

const mainRouter = new Router();
registrarVetsRoutes(mainRouter);

export default mainRouter;
