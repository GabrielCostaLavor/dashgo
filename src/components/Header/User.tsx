import { Avatar, Box, Flex, HStack, Icon, Text, useBreakpointValue } from "@chakra-ui/react";
import { RiNotificationLine, RiUserAddLine } from "react-icons/ri";


interface viewWideLgProps{
    showProfileUser?: boolean
}

export function User({showProfileUser = true} : viewWideLgProps){
   // console.log('Teste '+showProfileUser)
    const color = useBreakpointValue({
        base: 'red.900',
        md: 'green.500',
        lg: 'blue.200'
    })
    return(
        <Flex
            flex='6'
            justify='right'
            >
                <HStack spacing='4' borderRight='1px solid' pt='3' pb='3' pr='8' >
                    <Icon as={RiNotificationLine} fontSize='20'/>
                    <Icon as={RiUserAddLine} fontSize='20'/>
                </HStack>
                <Flex>
                {showProfileUser &&
                (<Box ml='8' textAlign='right'>
                    <Text fontWeight='bold'>Gabriel Lavor</Text>
                    <Text color='gray.200'> gabrielcostalavor0@gmail.com</Text>
                </Box>)}
                
                <Avatar ml='6' size='md' name='Gabriel Costa' 
                src="https://lh3.googleusercontent.com/a-/AOh14GgL-7LzLUEvzKEBkP0cgr-qdBbrQDPihvoGTlzaAtc=s28-c-k-no"></Avatar>
                </Flex>
        </Flex>
    )
}