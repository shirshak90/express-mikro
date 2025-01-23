import { StatusCodes } from "http-status-codes";

import { DI } from "../server";
import { User } from "../entities";
import { ApiError } from "../errors/api.error";

export const createUser = async (userBody: User) => {
  const user = new User();

  Object.assign(user, userBody);

  await DI.em
    .persist(user)
    .flush()
    .catch((error) => {
      throw new ApiError(StatusCodes.INTERNAL_SERVER_ERROR, error);
    });

  return user;
};
