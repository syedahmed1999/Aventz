import { Request, Response } from "express";
import httpStatus from 'http-status';
import { ApiError } from '../utils/ApiError'
import { catchAsync } from './../utils/catchAsync';
import ProfileServcie from "../services/profile-service";
import {RECORD_ALREADY_EXIST} from '../utils/Constants';


export const createProfile = catchAsync(async (request: Request, response: Response) => {
    const profileData = request.body;
    const alreadyExist = await ProfileServcie.profileExists({ uid: profileData.uid });
    if (alreadyExist) {
      throw new ApiError(httpStatus.BAD_REQUEST, RECORD_ALREADY_EXIST);
    }
    const mortgageLoan = await ProfileServcie.createProfile(profileData);
    response.status(httpStatus.CREATED).json({
      data: mortgageLoan
    });
}); 

export const getProfile = catchAsync(async (request: Request, response: Response) => {
    const id = request.params.id;
    const profile = await ProfileServcie.getProfileById(id);
    response.status(httpStatus.OK).json({
      data: profile
    });
});

export const listProfiles = catchAsync(async (request: Request, response: Response) => {
    const listProfiles = await ProfileServcie.getAllProfiles();
    response.status(httpStatus.OK).json({
      data: listProfiles
    });
}); 

export const updateProfile = catchAsync((request: Request, response: Response) => {

}); 

