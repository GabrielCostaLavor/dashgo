import { Container, Flex, useBreakpointValue } from "@chakra-ui/react";
import { Logo } from "./logo";
import { Search } from "./search";
import { User } from "./User";

export function Header(){

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
            <Container display='flex' maxW='container.xl' alignItems='center'>
                <Logo/>
                <Search showSearch={viewWideLg}/>
                <div>{viewWideLg}</div>
                <User showProfileUser={viewWideLg} />
            </Container>
        </Flex >
    )
}