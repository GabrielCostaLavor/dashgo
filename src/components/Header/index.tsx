import { Container, Flex, Icon, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { Logo } from "./logo";
import { Search } from "./search";
import { User } from "./User";
import {RiMenuLine} from 'react-icons/ri'
import { useSidebarDrawer } from "../context/SidebarDrawerContext";

export function Header(){

    const { onOpen } = useSidebarDrawer()

    const viewWideLg = useBreakpointValue({
        base: false,
        lg: true
    })
    
    console.log(viewWideLg)
    return(
        <Flex 
        as='header'
        w='100%'
        h='20'
        bg='gray.800'
        align='center'
        >
            <Container display='flex' maxW='container.xl' 
            alignItems='center'>
                { !viewWideLg && (
                    <IconButton
                        aria-label="Open Menu"
                        icon={<Icon as={RiMenuLine}/>}
                        fontSize='24'
                        variant='unstyled'
                        onClick={onOpen}
                        flex={1}
                    >

                    </IconButton>
                )}
                <Logo/>
                <Search showSearch={viewWideLg}/>
                <div>{viewWideLg}</div>
                <User showProfileUser={viewWideLg} />
            </Container>
        </Flex >
    )
}