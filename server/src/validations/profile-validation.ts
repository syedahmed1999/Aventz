import Joi, { ObjectSchema } from 'joi';
import { Mortgage } from '../types/types';

// const mortgageObject = Joi.object().keys({
//   loanNo: Joi.string().required().max(14),
//   type: Joi.string().allow('').max(6),
//   streetNo: Joi.string().allow('').max(6),
//   street1: Joi.string().allow('').max(14),
//   street2: Joi.string().allow('').max(14),
//   city: Joi.string().allow('').max(20),
//   state: Joi.string().allow('').max(2),
//   zipCode: Joi.string().allow('').max(10),
//   borrorOneFirst: Joi.string().allow('').max(16),
//   borrorOneLast: Joi.string().allow('').max(20),
//   borrorOneStreetNo: Joi.string().allow('').max(6),
//   borrorOneStreet1: Joi.string().allow('').max(14),
//   borrorOneStreet2: Joi.string().allow('').max(14),
//   borrorOneCity: Joi.string().allow('').max(20),
//   borrorOneState: Joi.string().allow('').max(2),
//   borrorOneZipCode: Joi.string().allow('').max(10),
//   borrorOneDOB: Joi.date(),
//   borrorOneSocial: Joi.string()
//     .allow('')
//     .max(9)
//     .pattern(/^[0-9]+$/),
//   borrorOnePhone: Joi.string()
//     .allow('')
//     .max(10)
//     .pattern(/^[0-9]+$/),
//   borrorTwoFirst: Joi.string().allow('').max(16),
//   borrorTwoLast: Joi.string().allow('').max(20),
//   borrorTwoStreetNo: Joi.string().allow('').max(6),
//   borrorTwoStreet1: Joi.string().allow('').max(14),
//   borrorTwoStreet2: Joi.string().allow('').max(14),
//   borrorTwoCity: Joi.string().allow('').max(20),
//   borrorTwoState: Joi.string().allow('').max(2),
//   borrorTwoZipCode: Joi.string().allow('').max(10),
//   borrorTwoDOB: Joi.date(),
//   borrorTwoSocial: Joi.string()
//     .allow('')
//     .max(9)
//     .pattern(/^[0-9]+$/),
//   borrorTwoPhone: Joi.string()
//     .allow('')
//     .max(10)
//     .pattern(/^[0-9]+$/)
// });


// export const createMortgageLoanBulkValidation = {
//   body: {
//     data: Joi.array().items(mortgageObject)
//   }
// };

export const validateGetProfile = {
  params: Joi.object().keys({
    id: Joi.string().required()
  })
};

export const validateUpdateProfile = {
  params: Joi.object().keys({
    id: Joi.string().required()
  }),
  body: Joi.object().keys({
    type: Joi.string().allow('').max(6),
  })
};

export const deleteProfile = {
  params: Joi.object().keys({
    id: Joi.string().required()
  })
};
