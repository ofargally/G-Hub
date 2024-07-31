import { Menu, MenuList, MenuItem, MenuButton, Button } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms, { Platform } from "../hooks/usePlatforms";
import usePlatform from "../hooks/usePlatform";

interface Props {
  selectedPlatformId?: number;
  onSelectPlatform: (platform: Platform) => void;
}

const PlatformSelector = ({ selectedPlatformId, onSelectPlatform }: Props) => {
  const { data, error } = usePlatforms();
  const selectedPlatform = usePlatform(selectedPlatformId);
  if (error) return null;
  const loadPlatforms = () => {
    return data?.results.map((platform) => (
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
