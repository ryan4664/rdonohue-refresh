import {
  Flex,
  Img,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
} from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import ContactForm from "./components/ContactForm";
import InfoBox from "./components/InfoBox";

export default function Home() {
  return (
    <Flex
      minHeight="100vh"
      paddingX="0.5"
      direction="column"
      justify="center"
      align="center"
      background="gray.100"
      padding={[2, 0]}
    >
      <Head>
        <title>Ryan Donohue - rdonohue.ca</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600"
          rel="stylesheet"
        />
      </Head>

      <Flex
        align="center"
        justify="center"
        direction="column"
        marginBottom={10}
      >
        <Text
          fontSize="4rem"
          lineHeight={1.15}
          margin={0}
          textAlign="center"
          fontWeight={500}
        >
          Ryan Donohue
        </Text>

        <Img
          src="./assets/ryan-cropped.jpg"
          borderRadius="400px"
          boxSize="400px"
          alt="Ryan Donohue"
          marginTop={10}
        />
      </Flex>

      <Tabs isFitted variant="enclosed">
        <TabList>
          <Tab>Work</Tab>
          <Tab>Personal</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <VStack spacing={10}>
              <Text
                fontSize="3rem"
                lineHeight={1.15}
                margin={0}
                textAlign="center"
                fontWeight={500}
              >
                Bout Work
              </Text>

              <InfoBox
                title="54e Dev Studios"
                body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum cursus augue, et fermentum elit malesuada eget. Maecenas vehicula lacus eu ex finibus congue."
                imagePath="./assets/54e.webp"
              />

              <InfoBox
                title="Outpost Health"
                body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum cursus augue, et fermentum elit malesuada eget. Maecenas vehicula lacus eu ex finibus congue."
                imagePath="./assets/outpost.svg"
                reverse
              />

              <InfoBox
                title="Brew Ninja"
                body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum cursus augue, et fermentum elit malesuada eget. Maecenas vehicula lacus eu ex finibus congue."
                imagePath="./assets/brewninja.png"
              />

              <InfoBox
                title="Vivvo"
                body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum cursus augue, et fermentum elit malesuada eget. Maecenas vehicula lacus eu ex finibus congue."
                imagePath="./assets/vivvo.svg"
                reverse
              />
            </VStack>
          </TabPanel>
          <TabPanel>
            <VStack spacing={10}>
              <Text
                fontSize="3rem"
                lineHeight={1.15}
                margin={0}
                textAlign="center"
                fontWeight={500}
              >
                Bout Me
              </Text>

              <InfoBox
                title="Who Am I?"
                body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum cursus augue, et fermentum elit malesuada eget. Maecenas vehicula lacus eu ex finibus congue."
                imagePath="./assets/whoamicropped.jpg"
              />

              <InfoBox
                title="What Do I Do?"
                body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum cursus augue, et fermentum elit malesuada eget. Maecenas vehicula lacus eu ex finibus congue."
                imagePath="./assets/me-n-pat.jpg"
                reverse
              />
            </VStack>
          </TabPanel>
        </TabPanels>
      </Tabs>

      <ContactForm />

      <Flex
        w="100%"
        height="100px"
        borderTop="1px solid"
        borderColor="gray.300"
        justify="center"
        align="center"
        marginTop={10}
      >
        <Text>Made by Ryan Donohue</Text>
      </Flex>
    </Flex>
  );
}
