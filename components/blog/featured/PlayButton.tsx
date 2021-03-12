import { Circle } from '@chakra-ui/react'
import * as React from 'react'
import { BsPlayFill } from 'react-icons/bs'

export const PlayButton = () => (
  <Circle
    centerContent
    size="20"
    fontSize="3xl"
    bg="blue.500"
    color="white"
    pos="absolute"
    top="50%"
    insetStart="50%"
    transform="translate(-50%, -50%)"
  >
    <BsPlayFill />
  </Circle>
)
