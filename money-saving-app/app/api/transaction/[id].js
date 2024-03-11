import connectDB from "@db/mongodb";
import Transaction from "@models/Transaction";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  try {
    const { id } = req.query;
    await connectDB();
    console.log("Retrieving transaction by id", id);
    const transaction = await Transaction.findById(id);
    return NextResponse.json(transaction);
  } catch (error) {
    NextResponse.json({ error: error.message }, { status: 500 });
  }
}
