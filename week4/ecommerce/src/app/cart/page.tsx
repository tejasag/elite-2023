"use client";

import ClearCartButton from "@/components/ClearCartButton";
import CartItems from "@/components/CartItems";
import { Heading, Flex } from "@chakra-ui/react";

export default async function Cart() {
  return (
    <>
      <Flex direction="column" alignItems={"center"} justifyContent={"center"}>
        <Flex direction={"row"} alignItems={"center"}>
          <Heading m={"2"} textAlign={"center"}>
            Cart
          </Heading>
          <ClearCartButton />
        </Flex>
        <CartItems />
      </Flex>
    </>
  );
}
