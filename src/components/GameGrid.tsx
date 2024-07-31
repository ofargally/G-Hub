import useGames from "../hooks/useGames";
import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../App";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

interface Props {
  gameQuery: GameQuery;
}
const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading, fetchNextPage, hasNextPage } =
    useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const fetchedGamesCount =
    data?.pages.reduce((acc, page) => {
      return acc + page.results.length;
    }, 0) || 0;

  const loadGames = () => {
    return data?.pages.map((page, index) => (
      <React.Fragment key={index}>
        {page.results.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </React.Fragment>
    ));
  };
  const loadSkeletons = () => {
    return skeletons.map((index) => (
      <GameCardContainer key={index}>
        <GameCardSkeleton />
      </GameCardContainer>
    ));
  };

  if (error) {
    return <Text>{error.message}</Text>;
  }

  return (
    <InfiniteScroll
      dataLength={fetchedGamesCount}
      hasMore={!!hasNextPage}
      next={() => fetchNextPage()}
      loader={<Spinner />}
    >
      <SimpleGrid
        padding="10"
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={6}
      >
        {isLoading ? loadSkeletons() : loadGames()}
      </SimpleGrid>
    </InfiniteScroll>
  );
};

export default GameGrid;
