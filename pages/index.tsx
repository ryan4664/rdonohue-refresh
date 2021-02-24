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
      background="grey.50"
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

      <Flex align="center" justify="center" direction="column" py={10}>
        <Img
          src="./assets/ryan-cropped.jpg"
          borderRadius="300px"
          boxSize="300px"
          alt="Ryan Donohue"
          boxShadow="dark-lg"
          mb={2}
        />
        <Text fontSize="5xl" textAlign="center" mb={2}>
          Ryan Donohue
        </Text>
        <Text fontSize="2xl" textAlign="center">
          Software Developer
        </Text>
      </Flex>

      <VStack background="gray.400" width="full" py={10} spacing={[5, 20]}>
        <Text fontSize="4xl" textAlign="center" color="gray.50">
          Work
        </Text>

        <InfoBox
          title="54e Dev Studios / OneShot Golf"
          body="Robotics and Gaming brought together using our proprietary real-time video technologies for a true-to-life Esports experience. "
          imagePath="./assets/osg.png"
        />

        <InfoBox
          title="Outpost Health"
          body="We are a Physician-led, global virtual healthcare organization, born in Canada."
          imagePath="./assets/outpost.svg"
          reverse
        />

        <InfoBox
          title="Brew Ninja"
          body="Brew Ninja provides full traceability from costing to regulatory lot-tracking."
          imagePath="./assets/brewninja.png"
        />

        <InfoBox
          title="Vivvo"
          body="Vivvo is a Canadian software company founded in 2015. After discovering the limitations of working with available software for identity and access management, we started on our own path developing software that aligns with our vision for how to address the challenges of managing the trust and privacy layer in business."
          imagePath="./assets/vivvo.jpg"
          reverse
          circleImage
        />
      </VStack>
      <VStack background="gray.600" width="full" py={10} spacing={[5, 20]}>
        <Text fontSize="4xl" textAlign="center" color="gray.50">
          Bout Me
        </Text>

        <InfoBox
          title="Who Am I?"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum cursus augue, et fermentum elit malesuada eget. Maecenas vehicula lacus eu ex finibus congue."
          imagePath="./assets/whoamicropped.jpg"
          circleImage
        />

        <InfoBox
          title="What Do I Do?"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum cursus augue, et fermentum elit malesuada eget. Maecenas vehicula lacus eu ex finibus congue."
          imagePath="./assets/me-n-pat.jpg"
          reverse
          circleImage
        />
      </VStack>

      <ContactForm />

      <Flex
        w="100%"
        height="100px"
        borderTop="1px solid"
        borderColor="gray.300"
        justify="center"
        align="center"
      >
        <Text>Made by Ryan Donohue</Text>
      </Flex>
    </Flex>
  );
}
