import { Button } from "@chakra-ui/react";

const addToCart = async (id: string) => {
  let res = await fetch(`/api`, {
    method: "POST",
    body: JSON.stringify({
      id,
    }),
  });

  console.log(res);

  if (!res.ok) throw new Error("error adding to cart");

  return res.json();
};

export default function AddToCart({ id }: { id: string }) {
  return (
    <Button
      rounded={"none"}
      w={"full"}
      mt={8}
      size={"lg"}
      py={"7"}
      // bg={useColorModeValue("gray.900", "gray.50")}
      // color={useColorModeValue("white", "gray.900")}
      textTransform={"uppercase"}
      _hover={{
        transform: "translateY(2px)",
        boxShadow: "lg",
      }}
      onClick={() => addToCart(id)}
    >
      Add to cart
    </Button>
  );
}
