import { EmailIcon } from "@chakra-ui/icons";
import { Button, Flex, Input, Stack, Textarea } from "@chakra-ui/react";

interface IProps {}

const ContactForm = ({}: IProps) => {
  return (
    <Flex
      direction="column"
      align="center"
      justify="space-around"
      width="50vw"
      padding="4"
      borderRadius="lg"
    >
      <Stack spacing={3} width="50%">
        <Input placeholder="Your Name" background="whiteAlpha.800" />
        <Input placeholder="Your Email" background="whiteAlpha.800" />
        <Textarea
          placeholder="Here is a sample placeholder"
          resize="none"
          background="whiteAlpha.800"
        />
        <Button leftIcon={<EmailIcon />} colorScheme="blue" variant="solid">
          Email
        </Button>
      </Stack>
    </Flex>
  );
};

export default ContactForm;
