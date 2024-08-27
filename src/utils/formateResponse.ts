import { Response } from 'express';
export const sendSuccessRes =
  (statusCode: number) => (res: Response, message: string) => (data: object) => {
    return res.status(statusCode).json({
      success: true,
      data: { type: 'success', message, data }
    });
  };

export const sendFailureRes =
  (statusCode: number) => (res: Response, message: string) => (data: object) => {
    return res.status(statusCode).json({
      success: false,
      data: { type: 'failure', message, data }
    });
  };
