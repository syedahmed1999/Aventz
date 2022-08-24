import { Model, model, Schema } from "mongoose";

const UserSchema = new Schema(
  {
    uid: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    email: {
      type: String,
      validate:
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    },
    gender: {
      type: String,
      enum: ["male", "female", "other"],
    },
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    dob: {
      type: String,
      required: true,
    },
    active: {
      type: Boolean,
    },
    password: {
      type: String,
      required: true,
    },
    token: {
      type: String,
    },
    expiresAt: {
      type: String,
    },
  },
  {
    versionKey: false,
  }
);

export const User: Model<any> = model("User", UserSchema);
