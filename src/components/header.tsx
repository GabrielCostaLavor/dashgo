import { Avatar, Box, Container, Flex, HStack, Icon, Text } from "@chakra-ui/react";
import { InputComponent } from "./Form/input";
import {SearchIcon} from '@chakra-ui/icons'
import { RiNotificationLine, RiUserAddLine} from 'react-icons/ri'

export function Header(){
    return(
        <Flex 
        as='header'
        w='100%'
        h='20'
        bg='gray.800'
        align='center'
        >
            <Container display='flex' maxW='container.xl' alignItems='center'>
                <Text
                flex='1'
                color="white"
                fontSize='4xl'
                fontWeight='bold'
                letterSpacing='tight'
                >
                    dasgo<Text ml='1' as='span' color='red.600'>.</Text>
                </Text>
                <Flex
                flex='5'
                ml='5'
                as='label'
                w='100%'
                maxW='360'
                align='center'
                position='relative'
                >
                    <InputComponent name="text" placeholder="Buscar" _placeholder={{
                        pl: '2',
                        color: 'gray.300'
                    }}/>
                    <SearchIcon position='absolute' right='10'/>
                </Flex>
                <Flex
                flex='6'
                justify='right'
                >
                    <HStack spacing='4' borderRight='1px solid' pt='3' pb='3' pr='8' >
                        <Icon as={RiNotificationLine} fontSize='20'/>
                        <Icon as={RiUserAddLine} fontSize='20'/>
                    </HStack>
                    <Flex>
                    <Box ml='8' textAlign='right'>
                        <Text fontWeight='bold'>Gabriel Lavor</Text>
                        <Text color='gray.200'> gabrielcostalavor0@gmail.com</Text>
                    </Box>
                    <Avatar ml='6' size='md' name='Gabriel Costa' 
                    src="https://lh3.googleusercontent.com/a-/AOh14GgL-7LzLUEvzKEBkP0cgr-qdBbrQDPihvoGTlzaAtc=s28-c-k-no"></Avatar>
                    </Flex>
                </Flex>
            </Container>
        </Flex >
    )
}