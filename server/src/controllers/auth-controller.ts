import { Request, Response } from "express";
import httpStatus from "http-status";
import { ApiError } from "../utils/ApiError";
import { catchAsync } from "./../utils/catchAsync";
import { RECORD_ALREADY_EXIST } from "../utils/Constants";
import AuthService from "../services/auth-service";

export const createUser = catchAsync(
  async (request: Request, response: Response) => {
    const profileData = request.body;
    const alreadyExist = await AuthService.userExists({
      email: profileData.email,
    });
    if (alreadyExist) {
      throw new ApiError(httpStatus.BAD_REQUEST, RECORD_ALREADY_EXIST);
    }
    const mortgageLoan = await AuthService.createUser(profileData);
    response.status(httpStatus.CREATED).json({
      data: mortgageLoan,
    });
  }
);

export const getUser = catchAsync(
  async (request: Request, response: Response) => {
    console.log(request.params);
    const { email, password } = request.body;
    const profile = AuthService.getUserByEmailAndPassword({
      email,
      password,
    });
    console.log(profile);
    response.status(httpStatus.OK).json({
      data: profile,
    });
  }
);

export const updateProfile = catchAsync(
  (request: Request, response: Response) => {}
);
