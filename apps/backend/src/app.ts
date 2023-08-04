import Koa, { Context } from 'koa';
import { bodyParser } from '@koa/bodyparser';
import { description, version } from '../package.json';

const app = new Koa();
app.use(bodyParser({ encoding: 'utf-8' }));

app.use((ctx: Context) => {
    ctx.body = {
        description,
        version
    }
});

export default app;
