"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = void 0;
const http_status_codes_1 = require("http-status-codes");
const user_service_1 = require("../services/user.service");
const create = async (req, res) => {
    const user = await (0, user_service_1.createUser)(req.body);
    res.status(http_status_codes_1.StatusCodes.CREATED).json(user);
};
exports.create = create;
