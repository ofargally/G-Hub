import { Menu, MenuList, MenuItem, MenuButton, Button } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";

const PlatformSelector = () => {
  const { data, error } = usePlatforms();
  if (error) return null;

  const loadPlatforms = () => {
    return data.map((platform) => (
      <MenuItem key={platform.id}>{platform.name}</MenuItem>
    ));
  };
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Actions
      </MenuButton>
      <MenuList>{loadPlatforms()}</MenuList>
    </Menu>
  );
};

export default PlatformSelector;
