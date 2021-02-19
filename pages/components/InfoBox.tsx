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
      direction={reverse ? "row-reverse" : "row"}
      align="center"
      justify="space-around"
      width="60vw"
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
      <Flex direction="column" flex={1} maxW="50%">
        <Text fontSize="2xl">{title}</Text>
        <Text>{body}</Text>
      </Flex>
    </Flex>
  );
};

export default InfoBox;
