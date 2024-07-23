import { Heading } from "@chakra-ui/react";

interface Props {
  platform: string;
  genre: string;
}
const GameHeading = ({ platform, genre }: Props) => {
  return (
    <Heading marginY={5} fontSize="5xl" as="h1">
      {platform + " " + genre} Games
    </Heading>
  );
};

export default GameHeading;
