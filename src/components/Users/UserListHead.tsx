import { Input, Th, Tr, Text } from "@chakra-ui/react";

export function UserListHead(){
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
        <Th
        borderBottom='none'
        textAlign='center'>
            <Text fontSize='sm'>DATA DE CADASTRO</Text>
        </Th>
        <Th
        borderBottom='none'>
        </Th>
    </Tr>
    )
}