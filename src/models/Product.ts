import { Schema, model, Types } from "mongoose";

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      unique: true,
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
    stock: {
      type: Number,
      required: true,
    },
    market: {
      type: Types.ObjectId,
      ref: "Market",
    },
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

export const Product = model("Product", productSchema);
