"use client";

import { cart } from "@/lib/data";

console.log(cart);

export default async function Cart() {
  return <>{cart.map((x) => x)}</>;
}
