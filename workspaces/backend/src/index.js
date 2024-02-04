"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var node_server_1 = require("@hono/node-server");
var zod_1 = require("zod");
var zod_validator_1 = require("@hono/zod-validator");
var hono_1 = require("hono");
var app = new hono_1.Hono();
app.get('/fizzbuzz/:count', (0, zod_validator_1.zValidator)('param', zod_1.z.object({
    count: zod_1.z.string().pipe(zod_1.z.coerce.number().min(1))
})), function (c) {
    return c.json({
        message: "Fizbuzz ".concat(c.req.param().count, "!")
    });
});
console.log('✨Listening on http://localhost:3000');
(0, node_server_1.serve)({ fetch: app.fetch, port: 3000 });
