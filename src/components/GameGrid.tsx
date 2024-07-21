import useGames from "../hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

const GameGrid = () => {
  const { data, error, isLoading } = useGames();
  const loadGames = () => {
    return data.map((game) => (
      <GameCardContainer>
        <GameCard key={game.id} game={game} />
      </GameCardContainer>
    ));
  };
  const loadSkeletons = () => {
    return data.map((game) => (
      <GameCardContainer>
        <GameCardSkeleton key={game.id} />
      </GameCardContainer>
    ));
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
