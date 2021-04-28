import Code from '@components/blog/body/code';
import Image from '@components/blog/body/image';
import { H1, H2, H3, H4, H5, H6, P } from '@components/blog/body/typography';
import { Ul, Ol } from '@components/blog/body/lists';
import { chakra} from '@chakra-ui/react';

export default {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  p: P,
  code: Code,
  img: Image,
  ul: Ul,
  ol: Ol,
  //ul: (props) => <chakra.ul apply="mdx.ul" fontSize="2xl" m="10" {...props} />,
  // ol: (props) => <chakra.ol apply="mdx.ul" fontSize="2xl"  {...props} />,
  li: (props) => <chakra.li pb="4px" {...props} />,
};