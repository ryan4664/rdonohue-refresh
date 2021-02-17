import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import customTheme from "../lib/theme";
import Fonts from "../lib/Fonts";

const theme = extendTheme({
  ...customTheme,
});

const App = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default App;
