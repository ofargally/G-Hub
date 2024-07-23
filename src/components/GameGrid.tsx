import useGames from "../hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}
const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGames(gameQuery);
  const loadGames = () => {
    return data.map((game) => (
      <GameCardContainer key={game.id}>
        <GameCard game={game} />
      </GameCardContainer>
    ));
  };
  const loadSkeletons = () => {
    return data.map((game) => (
      <GameCardContainer key={game.id}>
        <GameCardSkeleton />
      </GameCardContainer>
    ));
  };
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="10"
        spacing={2}
      >
        {isLoading ? loadSkeletons() : loadGames()}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
