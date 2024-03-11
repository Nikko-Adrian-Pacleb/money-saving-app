import connectDB from "@db/mongodb";
import Transaction from "@models/Transaction";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    await connectDB();
    const transactions = await Transaction.find({});
    return NextResponse.json(transactions);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
