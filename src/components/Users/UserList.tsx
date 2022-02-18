import { Input, Td, Tr, Text, Button, Icon, useBreakpointValue } from "@chakra-ui/react";
import { RiPencilLine } from "react-icons/ri";

interface UsersProps{
    userNome: string,
    userEmail: string,
    createDate: string
}

export function UsersList({userEmail, userNome, createDate} : UsersProps) {

    const isWideVersion = useBreakpointValue({
      base: true,
      lg: false
    })

    if (isWideVersion) {
      return (
        <Tr borderBottom='1px solid #353646'>
          <Td
            w='0'
            borderBottom='none'
            verticalAlign='baseline'>
            <Input
            type='checkbox'
            borderRadius='none'
            h='15px'
            w='15px'
            p='0'
            />
          </Td>
          <Td
            borderBottom='none'>
            <Text
            fontSize='lg'
            fontWeight='bold'>{userNome}</Text>
            <Text
            fontSize='sm'
            color='gray.100'
            mb='1.5'
            >{userEmail}</Text>
            <Text>{createDate}</Text>
          </Td>
          <Td
              borderBottom='none'
              display='flex'
              justifyContent='right'>
              <Button
              bg='purple.500'
              type='submit'>
              <Icon
              as={RiPencilLine}
              />
              
              </Button>
            </Td>
        </Tr>
      )
    }

    return (
        <Tr borderBottom='1px solid #353646'>
            <Td
              w='0'
              borderBottom='none'
              verticalAlign='baseline'>
              <Input
              type='checkbox'
              borderRadius='none'
              h='15px'
              w='15px'
              p='0'
              />
              </Td>
            <Td
              borderBottom='none'>
              <Text
              fontSize='lg'
              fontWeight='bold'>{userNome}</Text>
              <Text
              fontSize='sm'
              color='gray.100'>{userEmail}</Text>
            </Td>
            <Td borderBottom='none' textAlign='center'>
                <Text>{createDate}</Text>
            </Td>
            <Td
              borderBottom='none'
              display='flex'
              justifyContent='right'>
              <Button
              bg='purple.500'
              type='submit'>
              <Icon
              as={RiPencilLine}
              />
              <Text
              ml='2'>Editar</Text>
              </Button>
              </Td>
        </Tr>
    )
}