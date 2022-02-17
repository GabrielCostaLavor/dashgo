import { Avatar, Box, Container, Flex, HStack, Icon, Text } from "@chakra-ui/react";
import { InputComponent } from "../Form/Input";
import {SearchIcon} from '@chakra-ui/icons'
import { RiNotificationLine, RiUserAddLine} from 'react-icons/ri'
import { Logo } from "./logo";
import { Search } from "./search";
import { User } from "./User";

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
                <Logo/>
                <Search/>
                <User/>
            </Container>
        </Flex >
    )
}