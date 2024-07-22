import {
  HStack,
  List,
  ListItem,
  Spinner,
  Image,
  Button,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}
const GenreList = ({ onSelectGenre }: Props) => {
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
          <Button
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
  return <List>{loadGenres()}</List>;
};

export default GenreList;
