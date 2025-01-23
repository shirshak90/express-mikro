"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const http_status_codes_1 = require("http-status-codes");
const errorHandler = (err, _req, res, _next) => {
    const statusCode = err.statusCode || http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR;
    const message = err.message || "Internal Server Error";
    res.status(statusCode).json({
        success: false,
        message: message,
        stack: process.env.NODE_ENV === "production" ? undefined : err.stack,
    });
};
exports.errorHandler = errorHandler;
