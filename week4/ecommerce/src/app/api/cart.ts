import { kv } from "@vercel/kv";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const user = await kv.hgetall("user:me");
  return NextResponse.json(user);
}

export async function POST(req: NextRequest) {
  let body = await req.json();
  const user = await kv.lpush("user:me:cart " + body.id);
  return NextResponse.json(user);
}
