import { Flex, Img, Text } from "@chakra-ui/react";
import Head from "next/head";

export default function Home() {
  return (
    <Flex
      minHeight="100vh"
      paddingX="0.5"
      direction="column"
      justify="center"
      align="center"
    >
      <Head>
        <title>Ryan Donohue - rdonohue.ca</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex align="center" justify="center" direction="column" flex={1}>
        <Text
          fontSize="4rem"
          lineHeight={1.15}
          margin={0}
          fontFamily="Segoe UI"
        >
          Ryan Donohue
        </Text>

        <Img
          borderradius
          src="./assets/ryan-cropped.jpg"
          borderRadius="400px"
          boxSize="400px"
          alt="Ryan Donohue"
          marginTop="15"
        />
      </Flex>

      <Flex
        w="100%"
        height="100px"
        borderTop="1px solid #eaeaea"
        justify="center"
        align="center"
      >
        <Text>Made by Ryan Donohue</Text>
      </Flex>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </Flex>
  );
}
