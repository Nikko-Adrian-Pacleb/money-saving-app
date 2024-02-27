import connectDB from "@db/mongodb";
import Transaction from "@models/Transaction";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const transactionData = body.formData;
    await connectDB();
    await Transaction.create(transactionData);
    return NextResponse.json({ message: "Transaction created" });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
