import { Box, Flex, HStack } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

export function Pagination(){
    return(
        <Flex mt='8'>
            <HStack spacing='2'>
                <PaginationItem number={1} isActive />
                <PaginationItem number={2} />
                <PaginationItem number={3} />
                <PaginationItem number={4} />
                <PaginationItem number={5} />
                <PaginationItem number={6} />
            </HStack>
        </Flex>
    )
}