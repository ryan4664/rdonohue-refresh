import { EmailIcon } from "@chakra-ui/icons";
import { Button, Flex, Input, Stack, Textarea } from "@chakra-ui/react";
import { useEffect, useState } from "react";

interface IProps {}

interface IEmailMessage {
  name: string;
  fromEmail: string;
  message: string;
}

const ContactForm = ({}: IProps) => {
  const [name, setName] = useState<string>("");
  const [fromEmail, setFromEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onSendEmail = async () => {
    let body: IEmailMessage = {
      name: name,
      fromEmail: fromEmail,
      message: message,
    };

    setIsLoading(true);

    try {
      const response = await fetch("/api/sendMail", {
        method: "POST",
        body: JSON.stringify(body),
      });

      if (response.status === 200) {
      }
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
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
        <Input
          placeholder="Name"
          background="grey.50"
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="Email"
          background="grey.50"
          onChange={(e) => setFromEmail(e.target.value)}
        />
        <Textarea
          placeholder="Your message"
          resize="none"
          background="grey.50"
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button
          onClick={onSendEmail}
          leftIcon={<EmailIcon />}
          colorScheme="blue"
          variant="solid"
        >
          Email
        </Button>
      </Stack>
    </Flex>
  );
};

export default ContactForm;
