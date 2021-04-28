import { ChakraProvider } from '@chakra-ui/react';
import customTheme from "@components/theme";
import '@components/main.css'
import { Hubspot } from '@components/hubspot'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={customTheme}>
      <Hubspot />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;