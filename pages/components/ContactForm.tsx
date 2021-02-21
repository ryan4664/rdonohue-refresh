import { EmailIcon } from "@chakra-ui/icons";
import { Button, Flex, Input, Stack, Textarea } from "@chakra-ui/react";

interface IProps {}

const ContactForm = ({}: IProps) => {
  const onSendEmail = async () => {
    let data = {};

    // Default options are marked with *
    const response = await fetch("/api/sendMail");

    let test = await response.json();

    console.log("TEST", test);
  };

  return (
    <Flex
      direction="column"
      align="center"
      background="gray.800"
      justify="space-around"
      width="full"
      py={10}
    >
      <Stack spacing={3} width={["100%", "100%", "100%", "50%"]}>
        <Input placeholder="Name" background="grey.50" />
        <Input placeholder="Email" background="grey.50" />
        <Textarea
          placeholder="Your message"
          resize="none"
          background="grey.50"
        />
        <Button onClick={onSendEmail} leftIcon={<EmailIcon />} colorScheme="blue" variant="solid">
          Email
        </Button>
      </Stack>
    </Flex>
  );
};

export default ContactForm;
