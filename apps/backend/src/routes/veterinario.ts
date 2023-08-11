import { Context } from 'koa';
import Router from 'koa-router';
import { db } from '~/database/index';
import { VeterinarioRepositorio } from '@petclinic/vets';

export function registrarVetsRoutes(mainRoute: Router) {
    const router = new Router();
    const repo = new VeterinarioRepositorio(db);

    router.get('/vets', async (ctx: Context) => {
        ctx.body = await repo.buscarVets();
    })

    mainRoute.use(router.routes());
}
