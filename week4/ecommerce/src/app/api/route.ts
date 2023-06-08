import { kv } from "@vercel/kv";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const user: string = (await kv.get("cart")) || "";
  return NextResponse.json(user);
}

export async function POST(req: NextRequest) {
  let body = await req.json();
  const cart = (await kv.get<string[]>("cart")) || [];
  const user = await kv.set("cart", cart + "," + body.id);
  return NextResponse.json(user);
}

export async function DELETE() {
  const user = await kv.set("cart", "");
  return NextResponse.json(user);
}
