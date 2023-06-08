import { kv } from "@vercel/kv";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const user: string = (await kv.get("cart")) || "";
  return NextResponse.json(user.split(","));
}

export async function POST(req: NextRequest) {
  let body = await req.json();
  const cart = (await kv.get<string[]>("cart")) || [];
  const user = await kv.set("cart", [...cart!, body.id].join(","));
  return NextResponse.json(user);
}
