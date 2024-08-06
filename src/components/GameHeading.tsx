import { Heading } from "@chakra-ui/react";
import usePlatform from "../hooks/usePlatform";
import useGenre from "../hooks/useGenre";
import useGameQueryStore from "../store";

const GameHeading = () => {
  const genreId = useGameQueryStore((state) => state.gameQuery.genreId);
  const genre = useGenre(genreId);

  const platformId = useGameQueryStore((state) => state.gameQuery.platformId);
  const selectedPlatform = usePlatform(platformId);

  const heading = `${selectedPlatform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading marginY={5} fontSize="5xl" as="h1">
      {heading}
    </Heading>
  );
};

export default GameHeading;
