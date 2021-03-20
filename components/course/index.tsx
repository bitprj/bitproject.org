import { Card } from './card'
import {Box, SimpleGrid} from '@chakra-ui/react'
export const Course = (mods) => {
    return (
        <Box as="section">
            <Box maxW={{ base: 'xl', md: '7xl' }} mx="auto">
                <SimpleGrid columns={{ base:1, md:2, lg:4}} gap="6">
                   
                {mods.map((p) => (
                    <Card
                    />
                    <Card
                    />
                 ))}
                
                </SimpleGrid>
            </Box>
        </Box>

    )
}