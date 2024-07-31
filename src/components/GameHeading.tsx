import { Heading } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import { GameQuery } from "../App";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
  gameQuery: GameQuery;
}
const GameHeading = ({ gameQuery }: Props) => {
  const { data: genres } = useGenres();
  const genre = genres?.results.find((g) => g.id === gameQuery.genreId);
  const { data } = usePlatforms();
  const selectedPlatform = data?.results.find(
    (platform) => platform.id === gameQuery.platformId
  );
  const heading = `${selectedPlatform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading marginY={5} fontSize="5xl" as="h1">
      {heading}
    </Heading>
  );
};

export default GameHeading;
