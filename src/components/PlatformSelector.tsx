import { Menu, MenuList, MenuItem, MenuButton, Button } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import usePlatform from "../hooks/usePlatform";
import useGameQueryStore from "../store";

const PlatformSelector = () => {
  const selectedPlatformId = useGameQueryStore(
    (state) => state.gameQuery.platformId
  );
  const setSelectedPlatformId = useGameQueryStore(
    (state) => state.setPlatformId
  );

  const { data, error } = usePlatforms();
  const selectedPlatform = usePlatform(selectedPlatformId);

  if (error) return null;
  const loadPlatforms = () => {
    return data?.results.map((platform) => (
      <MenuItem
        onClick={() => setSelectedPlatformId(platform.id)}
        key={platform.id}
      >
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
