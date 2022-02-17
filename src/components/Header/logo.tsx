import {Text} from '@chakra-ui/react'

export function Logo(){
    return(
        <Text
            flex='1'
            color="white"
            fontSize='4xl'
            fontWeight='bold'
            letterSpacing='tight'
            >
                dasgo<Text ml='1' as='span' color='red.600'>.</Text>
        </Text>
    )
}