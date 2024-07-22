import { HStack, List, ListItem, Spinner, Image, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
  const { data, isLoading, error } = useGenres();

  if (isLoading) return <Spinner />;
  if (error) return null;
  const loadGenres = () => {
    return data.map((genre) => (
      <ListItem paddingY="5px" key={genre.id}>
        <HStack>
          <Image
            boxSize="32px"
            borderRadius={8}
            src={getCroppedImageUrl(genre.image_background, 600, 400)}
          />
          <Text fontSize="lg">{genre.name}</Text>
        </HStack>
      </ListItem>
    ));
  };
  return <List>{loadGenres()}</List>;
};

export default GenreList;
