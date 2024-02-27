import mongoose, { Schema } from "mongoose";

const transactionSchema = new Schema(
  {
    amount: Number,
  },
  {
    timestamps: true,
  }
);

const Transaction =
  mongoose.models.Transaction ||
  mongoose.model("Transaction", transactionSchema);

export default Transaction;
