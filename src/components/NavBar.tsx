import { HStack, Heading, Image, Text } from "@chakra-ui/react";
import logo from "../assets/bookshelf2.jpg";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"} padding="10px">
      <Image src={logo} boxSize="60px" rounded={50} />
      <Heading>Book Shelf</Heading>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
