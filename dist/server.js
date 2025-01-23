"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.init = exports.app = exports.DI = void 0;
require("express-async-errors");
const env_1 = require("./config/env");
const mikro_orm_config_1 = __importDefault(require("./mikro-orm.config"));
// Routers
const user_route_1 = __importDefault(require("./routes/user.route"));
// Middlewares
const error_handler_middleware_1 = require("./middlewares/error-handler.middleware");
const http_status_codes_1 = require("http-status-codes");
const express_1 = __importDefault(require("express"));
const postgresql_1 = require("@mikro-orm/postgresql");
exports.DI = {};
exports.app = (0, express_1.default)();
const port = env_1.PORT || 3000;
exports.init = (async () => {
    exports.DI.orm = await postgresql_1.MikroORM.init(mikro_orm_config_1.default);
    exports.DI.em = exports.DI.orm.em;
    exports.app.use(express_1.default.json());
    exports.app.use((_req, _res, next) => postgresql_1.RequestContext.create(exports.DI.orm.em, next));
    exports.app.get("/", (_req, res) => {
        res.json({
            message: "MikroORM express TS example!",
        });
    });
    exports.app.use("/api/user", user_route_1.default);
    exports.app.use((_req, res) => {
        res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json({ message: "No route found" });
    });
    exports.app.use(error_handler_middleware_1.errorHandler);
    exports.DI.server = exports.app.listen(port, () => {
        console.log(`MikroORM express TS example started at http://localhost:${port}`);
    });
})();
