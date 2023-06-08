"use client";

import { SimpleGrid, Heading } from "@chakra-ui/react";
import Link from "next/link";
import Product from "@/components/Product";

const getData = async () => {
  let res = await fetch("https://exunkart.vercel.app/api/", {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("error fetching details");

  let ids = `${await res.json()}`.split(",");
  ids.shift();
  return ids;
};

const getProductData = async () => {
  let ids = await getData();
  let res = ids.map((id) =>
    fetch("https://fakestoreapi.com/products/" + id, {
      cache: "no-store",
    })
      .then((x) => x.json())
      .catch((er) => console.error)
  );
  return await Promise.all(res);
};

const CartItems = async () => {
  let data = await getProductData();

  return (
    <>
      <SimpleGrid columns={[1, 2, 3]} spacing="20px">
        {data.map((x: any, index: number) => (
          <Link key={index} href={`/products/${x.id}`}>
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
};

export default CartItems;
