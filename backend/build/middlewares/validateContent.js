"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function contentVAlidation(req, res, next) {
    const { body } = req;
    console.log(body);
    if (!body.titulo || body.titulo.length < 5)
        throw new Error('invalidFields');
    next();
}
exports.default = contentVAlidation;
