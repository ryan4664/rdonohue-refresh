import { EmailIcon, CheckIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  Input,
  Stack,
  Textarea,
  Spinner,
} from "@chakra-ui/react";
import React, { useState } from "react";

interface IProps {}

interface IEmailMessage {
  name: string;
  fromEmail: string;
  message: string;
}

const ContactForm = ({}: IProps) => {
  const [name, setName] = useState<string>("");
  const [isNameValid, setIsNameValid] = useState<boolean>(true);
  const [fromEmail, setFromEmail] = useState<string>("");
  const [isFromEmailValid, setIsFromEmailValid] = useState<boolean>(true);
  const [message, setMessage] = useState<string>("");
  const [isMessageValid, setIsMessageValid] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuccessful, setIsSuccessful] = useState<boolean>(false);

  const onSendEmail = async () => {
    name.length === 0 ? setIsNameValid(false) : setIsNameValid(true);
    fromEmail.length === 0
      ? setIsFromEmailValid(false)
      : setIsFromEmailValid(true);
    message.length === 0 ? setIsMessageValid(false) : setIsMessageValid(true);

    if (!isNameValid || !isFromEmailValid || !isMessageValid) {
      return;
    }

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
        setIsSuccessful(true);
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
      minH={300}
    >
      {isLoading ? (
        <>
          <Spinner boxSize={20} color="gray.50" />
        </>
      ) : (
        <>
          {isSuccessful ? (
            <CheckIcon boxSize={20} color="gray.50" />
          ) : (
            <Stack spacing={3} width={["100%", "80vw", "90vw", "60vw"]}>
              <Input
                placeholder="Name"
                background="grey.50"
                onChange={(e) => setName(e.target.value)}
                isInvalid={!isNameValid}
              />
              <Input
                placeholder="Email"
                background="grey.50"
                onChange={(e) => setFromEmail(e.target.value)}
                isInvalid={!isFromEmailValid}
              />
              <Textarea
                placeholder="Your message"
                resize="none"
                background="grey.50"
                onChange={(e) => setMessage(e.target.value)}
                isInvalid={!isMessageValid}
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
          )}
        </>
      )}
    </Flex>
  );
};

export default ContactForm;
