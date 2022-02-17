import { Box, Flex, Icon, Link, Stack, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface AsideSectionProps{
    title: string,
    //Recebe todo tipo de codigo
    children: ReactNode,
}

export function AsideSection({title, children}: AsideSectionProps){
    return(
        <Box mb='8'>
            <Text py='9' fontWeight='bold' color='gray.300' letterSpacing='tight'>{title}</Text>
            <Stack spacing='4'>
                {children}
            </Stack>
        </Box>
    )
}