import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSubmitSearch: (searchTerm: string) => void;
}
const NavBar = ({ onSubmitSearch }: Props) => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="60px" />
      <SearchInput
        onSubmitSearch={(searchTerm) => onSubmitSearch(searchTerm)}
      />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
