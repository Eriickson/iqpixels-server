import { Schema, model, Types } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    lastname: {
      type: String,
      required: true,
      trim: true,
    },
    birthday: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    markets: [
      {
        ref: "Market",
        type: Types.ObjectId,
      },
    ],
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

export const User = model("User", userSchema);
