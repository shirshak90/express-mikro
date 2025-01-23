"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = void 0;
const http_status_codes_1 = require("http-status-codes");
const server_1 = require("../server");
const entities_1 = require("../entities");
const api_error_1 = require("../errors/api.error");
const createUser = async (userBody) => {
    const user = new entities_1.User();
    Object.assign(user, userBody);
    await server_1.DI.em
        .persist(user)
        .flush()
        .catch((error) => {
        throw new api_error_1.ApiError(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR, error);
    });
    return user;
};
exports.createUser = createUser;
