import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

import { createUser } from "../services/user.service";

export const create = async (req: Request, res: Response) => {
  const user = await createUser(req.body);
  res.status(StatusCodes.CREATED).json(user);
};
