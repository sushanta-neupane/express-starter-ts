import { NextFunction, Request, Response } from 'express';
import { Schema } from 'joi';
import { sendFailureRes } from '../utils/formateResponse';

export const validateJoiSchema =
  (
    schema: Schema,
    dataSource: 'body' | 'query' | 'params' = 'body',
    errorMsg: string = 'Invalid or missing required field/s.'
  ) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      const validation = schema.validate(req[dataSource]);
      if (validation.error) {
        return sendFailureRes(400)(res, errorMsg)(validation.error.details[0]);
      }

      return next();
    } catch (error) {
      return next(error);
    }
  };
