import { Error } from 'mongoose';

export interface APIError extends Error {
  statusCode: number;
  isOperational?: boolean | undefined;
}

export interface User {
  
}

export interface Mortgage extends Document {
  loanNo: string;
  type: string;
  streetNo: string;
  street1: string;
  street2: string;
  city: string;
  state: string;
  zipCode: string;
  borrorOneFirst: string;
  borrorOneLast: string;
  borrorOneStreetNo: string;
  borrorOneStreet1: string;
  borrorOneStreet2: string;
  borrorOneCity: string;
  borrorOneState: string;
  borrorOneZipCode: string;
  borrorOneDOB: string;
  borrorOneSocial: string;
  borrorOnePhone: string;
  borrorTwoFirst: string;
  borrorTwoLast: string;
  borrorTwoStreetNo: string;
  borrorTwoStreet1: string;
  borrorTwoStreet2: string;
  borrorTwoCity: string;
  borrorTwoState: string;
  borrorTwoZipCode: string;
  borrorTwoDOB: string;
  borrorTwoSocial: string;
  borrorTwoPhone: string;
}
