import { Text } from '@chakra-ui/react';

export const Ul = ({ children }) => (
    <Text as="ul" apply="mdx.ul" fontSize="2xl" pl="3rem" py="1rem">
      {children}
    </Text>
);

  export const Ol = ({ children }) => (
    <Text as="ol" apply="mdx.ul" fontSize="2xl" pl="3rem">
      {children}
    </Text>
);