import { NextResponse } from "next/server";
import { REVIEWS_DATA } from "@/data/config";

export async function GET() {
  return NextResponse.json(REVIEWS_DATA, { status: 200 });
}
