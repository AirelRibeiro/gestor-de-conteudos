import { NextFunction, Request, Response } from 'express';

export default function contentVAlidation(req: Request, res: Response, next: NextFunction) {
  const { body } = req;
  if (!body.titulo || body.titulo.length < 5) throw new Error('invalidFields');
  next();
}