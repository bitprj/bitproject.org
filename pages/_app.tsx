import { ChakraProvider } from '@chakra-ui/react';
import customTheme from "@components/theme";
import '@components/main.css'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={customTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;