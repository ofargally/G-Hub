import useGames from "../hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  const loadGames = () => {
    return games.map((game) => <GameCard key={game.id} game={game} />);
  };
  const loadSkeletons = () => {
    return games.map((game) => <GameCardSkeleton key={game.id} />);
  };
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="10"
        spacing={10}
      >
        {isLoading ? loadSkeletons() : loadGames()}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
