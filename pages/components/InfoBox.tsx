import { background, Flex, Img, Text } from "@chakra-ui/react";

interface IProps {
  title: string;
  body: string;
  imagePath: string;
  reverse?: boolean;
}

const InfoBox = ({ title, body, imagePath, reverse = false }: IProps) => {
  return (
    <Flex
      align="center"
      flexDirection={["column", reverse ? "row-reverse" : "row"]}
      justify="space-around"
      width={["100%", "80vw", "90vw", "60vw"]}
      padding="4"
      borderRadius="lg"
    >
      <Img
        src={imagePath}
        borderRadius="200px"
        boxSize="200px"
        alt="Ryan Donohue"
        boxShadow="dark-lg"
      />
      <Flex direction="column" flex={1} maxW="70%">
        <Text color="gray.50" fontSize="2xl">{title}</Text>
        <Text color="gray.50">{body}</Text>
      </Flex>
    </Flex>
  );
};

export default InfoBox;
