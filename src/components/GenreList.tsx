import {
  HStack,
  List,
  ListItem,
  Spinner,
  Image,
  Button,
  Heading,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}
const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  if (isLoading) return <Spinner />;
  if (error) return null;
  const loadGenres = () => {
    return data?.results.map((genre) => (
      <ListItem paddingY="5px" key={genre.id}>
        <HStack>
          <Image
            boxSize="32px"
            borderRadius={8}
            objectFit={"cover"}
            src={getCroppedImageUrl(genre.image_background, 600, 400)}
          />
          <Button
            whiteSpace={"normal"}
            textAlign={"left"}
            fontWeight={selectedGenre?.id === genre.id ? "bold" : "normal"}
            onClick={() => onSelectGenre(genre)}
            fontSize="lg"
            variant="link"
          >
            {genre.name}
          </Button>
        </HStack>
      </ListItem>
    ));
  };
  return (
    <>
      <Heading paddingX={5} fontSize={"2xl"} marginBottom={3}>
        Genres
      </Heading>
      <List paddingX={5}>{loadGenres()}</List>
    </>
  );
};

export default GenreList;
