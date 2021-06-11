import { Schema, model, Types } from "mongoose";

const marketSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    owner: {
      type: Types.ObjectId,
      ref: "User",
    },
    direction: {
      type: String,
      required: true,
      trim: true,
    },
    products: [
      {
        ref: "Product",
        type: Types.ObjectId,
      },
    ],
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

export const Market = model("Market", marketSchema);
