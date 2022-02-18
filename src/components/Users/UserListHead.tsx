import { Input, Th, Tr, Text, useBreakpointValue } from "@chakra-ui/react";

export function UserListHead(){
    const isWideVersion = useBreakpointValue({
        base: true,
        lg: false
    })
    return(
    <Tr
    borderBottom='1px
    solid
    #353646'>
        <Th
        w='0'
        borderBottom='none'>
            <Input
            type='checkbox'
            borderRadius='none'
            h='15px'
            w='15px'
            p='0' 
            />
        </Th>
        <Th
        borderBottom='none'>
            <Text fontSize='sm'>USUÁRIO</Text>
        </Th>
        {   !isWideVersion &&
            (<Th
                borderBottom='none'
                textAlign='center'>
                <Text fontSize='sm'>DATA DE CADASTRO</Text>
            </Th>)
        }
        <Th
        borderBottom='none'>
        </Th>
    </Tr>
    )
}