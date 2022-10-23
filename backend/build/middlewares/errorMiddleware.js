"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorsInformation = {
    contentNotFound: { message: 'O conteúdo com o Id buscado não existe!', code: 404 },
    invalidFields: { message: 'O título é obrigatório e deve possuir mais de 4 caracteres!', code: 400 },
};
function errorMiddleware(error, _req, res, _next) {
    const { message } = error;
    if (errorsInformation[message]) {
        const errorType = errorsInformation[message];
        return res.status(errorType.code).json({ message: errorType.message });
    }
    return res.status(500).json({ message: 'Erro do servidor!' });
}
exports.default = errorMiddleware;
