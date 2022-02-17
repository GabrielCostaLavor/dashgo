import { Box, Flex, HStack } from "@chakra-ui/react";

export function Pagination(){
    return(
        <Flex mt='8'>
            <HStack spacing='2'>
                <Box px='12px' py='6px' bg='gray.700' borderRadius='lg' _hover={{
                    bg: 'pink.500'
                }}>1</Box>
                <Box px='12px' py='6px' bg='gray.700' borderRadius='lg'
                _hover={{
                    bg: 'pink.500'
                }}>2</Box>
                <Box px='12px' py='6px' bg='gray.700' borderRadius='lg'
                _hover={{
                    bg: 'pink.500'
                }}>3</Box>
                <Box px='12px' py='6px' bg='gray.700' borderRadius='lg'
                _hover={{
                    bg: 'pink.500'
                }}>4</Box>
            </HStack>
        </Flex>
    )
}