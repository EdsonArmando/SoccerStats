import { Response } from "express";

interface APIResponse {
  status: number;
  msg: string;
  data: object;
}

export const errorResponse = (res: Response, error: Error) => {
  setResponse(res, {
    status: 501,
    msg: "Ha ocurrido un error inesperado",
    data: {
      error,
    },
  });
};

export function setResponse(res: Response, response: APIResponse) {
  res.statusCode = response.status;
  res.json({ ...response });
}