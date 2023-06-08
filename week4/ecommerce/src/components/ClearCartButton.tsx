"use client";

import { kv } from "@vercel/kv";
import { Button, useToast } from "@chakra-ui/react";

const clearCart = async () => {
  let data = await fetch("/api", {
    method: "DELETE",
  });
  if (!data.ok) throw new Error("error deleting cart");

  return data.json();
};

export default function ClearCartButton() {
  const toast = useToast();

  return (
    <Button
      as={"a"}
      display={{ base: "none", md: "inline-flex" }}
      fontSize={"sm"}
      fontWeight={600}
      color={"white"}
      bg={"red.400"}
      onClick={() => {
        clearCart();
        toast({
          title: "Cart cleared!",
          description: "Cart successfully cleared.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      }}
      _hover={{
        bg: "red.300",
      }}
    >
      Clear Cart
    </Button>
  );
}
