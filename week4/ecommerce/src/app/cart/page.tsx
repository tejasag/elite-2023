"use client";

const getData = async () => {
  let res = await fetch(`/api`, {
    method: "GET",
  });
  if (!res.ok) throw new Error("error fetching details");
  return res.json();
};

export default async function Cart() {
  let data = await getData();

  return <>{data.map((x: any) => x)}</>;
}
