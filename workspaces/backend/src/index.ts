import {serve} from '@hono/node-server'
import {z} from 'zod';
import {zValidator} from '@hono/zod-validator';
import {Hono} from 'hono'

const app = new Hono()

app.get(
    '/fizzbuzz/:count',
    zValidator(
        'param',
        z.object({
          count: z.string().pipe(z.coerce.number().min(1))
        }),
    ),
    (c) => {
    return c.json({
        message: `Fizbuzz ${c.req.param().count}!`
    })
})

console.log('✨Listening on http://localhost:3000');
serve({ fetch: app.fetch, port: 3000 });
