import { Schema, model } from "mongoose";

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

export const Product = model("Product", productSchema);
