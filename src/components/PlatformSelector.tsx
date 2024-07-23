import { Menu, MenuList, MenuItem, MenuButton, Button } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms, { Platform } from "../hooks/usePlatforms";

interface Props {
  selectedPlatform: Platform | null;
  onSelectPlatform: (platform: Platform) => void;
}

const PlatformSelector = ({ selectedPlatform, onSelectPlatform }: Props) => {
  const { data, error } = usePlatforms();
  if (error) return null;

  const loadPlatforms = () => {
    return data.map((platform) => (
      <MenuItem onClick={() => onSelectPlatform(platform)} key={platform.id}>
        {platform.name}
      </MenuItem>
    ));
  };
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform ? selectedPlatform.name : "All Platforms"}
      </MenuButton>
      <MenuList>{loadPlatforms()}</MenuList>
    </Menu>
  );
};

export default PlatformSelector;
