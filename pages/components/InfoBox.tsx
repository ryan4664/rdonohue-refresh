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
      background="gray.300"
      padding="4"
      borderRadius="lg"
    >
      <Img
        src={imagePath}
        borderRadius="250px"
        boxSize="250px"
        alt="Ryan Donohue"
      />
      <Flex direction="column" flex={1} maxW={["100%", "50%"]}>
        <Text fontSize="2xl">{title}</Text>
        <Text>{body}</Text>
      </Flex>
    </Flex>
  );
};

export default InfoBox;
