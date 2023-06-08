"use client";

import Product from "@/components/Product";
import { SimpleGrid } from "@chakra-ui/react";
import Link from "next/link";

const getData = async () => {
  let res = await fetch("https://fakestoreapi.com/products?limit=5");

  if (!res.ok) {
    throw new Error("error fetching data");
  }

  return res.json();
};

export default async function Products() {
  let data = await getData();

  return (
    <>
      <SimpleGrid columns={[1, 2, 3]} spacing="20px">
        {data.map((x: any, index: number) => (
          <Link href={`/products/${x.id}`}>
            <Product
              key={index}
              name={x.title}
              price={x.price}
              category={x.category}
              image={x.image}
            />
          </Link>
        ))}
      </SimpleGrid>
    </>
  );
}
