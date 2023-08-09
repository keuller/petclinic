import Koa, { Context } from 'koa';
import { bodyParser } from '@koa/bodyparser';
import { description, version } from '../package.json';
import mainRouter from './routes';

const app = new Koa();

app.use(bodyParser({ encoding: 'utf-8' }));
app.use(mainRouter.routes());
app.use(mainRouter.allowedMethods());

app.use((ctx: Context) => {
    ctx.body = {
        description,
        version
    }
});

export default app;
