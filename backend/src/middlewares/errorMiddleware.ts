import { NextFunction, Request, Response } from 'express';

type errInformation = {
  [key: string]: { message: string, code: number }
};

const errorsInformation: errInformation = {
  contentNotFound: { message: 'O conteúdo com o Id buscado não existe!', code: 404 },
  invalidFields: { message: 'O título é obrigatório e deve possuir mais de 4 caracteres!', code: 400 },
};

export default function errorMiddleware(
  error: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  const { message } = error;
  if(errorsInformation[message]) {
    const errorType = errorsInformation[message];
    return res.status(errorType.code).json({ message: errorType.message });
  }
  return res.status(500).json({ message: 'Erro do servidor!' });
}
