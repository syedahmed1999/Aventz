import Joi from "joi";

export const validateGetProfile = {
  body: Joi.object().keys({
    uid: Joi.string().required(),
  }),
};

export const validateUpdateProfile = {
  params: Joi.object().keys({
    id: Joi.string().required(),
  }),
  body: Joi.object().keys({
    type: Joi.string().allow("").max(6),
  }),
};

export const deleteProfile = {
  params: Joi.object().keys({
    id: Joi.string().required(),
  }),
};
