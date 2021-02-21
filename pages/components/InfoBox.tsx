import { background, Flex, Img, Text } from "@chakra-ui/react";

interface IProps {
  title: string;
  body: string;
  imagePath: string;
  reverse?: boolean;
  circleImage?: boolean;
}

const InfoBox = ({
  title,
  body,
  imagePath,
  reverse = false,
  circleImage = false,
}: IProps) => {
  return (
    <Flex
      align="center"
      flexDirection={["column", reverse ? "row-reverse" : "row"]}
      justify="space-around"
      width={["100%", "80vw", "90vw", "60vw"]}
      borderRadius="lg"
      marginBottom={[4, 0]}
    >
      <Img
        src={imagePath}
        width={"20%"}
        alt="Ryan Donohue"
        objectFit="contain"
        borderRadius={circleImage ? "200px" : 0}
        display={["none", "flex"]}
      />
      <Flex direction="column" flex={1} maxW="70%">
        <Text color="gray.50" fontSize="4xl" textAlign={["center", "left"]}>
          {title}
        </Text>
        <Text color="gray.50">{body}</Text>
      </Flex>
    </Flex>
  );
};

export default InfoBox;
