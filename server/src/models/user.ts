import { Model, model, Schema } from "mongoose";

const UserSchema = new Schema(
  {
    uid: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    gender: {
      type: String,
      enum: ["male", "female", "other"],
    },
    firstname: {
      type: String,
    },
    lastname: {
      type: String,
    },
    dob: {
      type: String,
    },
  },
  {
    versionKey: false,
  }
);

export const User: Model<any> = model("User", UserSchema);
