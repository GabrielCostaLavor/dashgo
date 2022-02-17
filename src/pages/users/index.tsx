import { Box, Flex, Table, Text, Button, Icon, Tr, Th, Input, Td } from '@chakra-ui/react'
import {BsPersonPlusFill} from 'react-icons/bs'
import { RiPencilLine } from 'react-icons/ri'
import { Pagination } from '../../components/Pagination'

export default function Users(){
    return(
      <Box as='main' w='100%' my='9' height=  'auto'>
          <Box bg='gray.800' p={8} borderRadius={'lg'}>
            <Flex align='center' justify='space-between' pb='4'>
                <Text fontSize='xx-large' fontWeight='bold'>Usuários</Text>
                <Button type='submit' bg='pink.500'>
                    <Icon as={BsPersonPlusFill}/>
                    <Text pl='2'>Criar Novo</Text>
                </Button>
            </Flex>
            <Table>
                <Tr borderBottom='1px solid #353646'>
                    <Th w='0' borderBottom='none'>
                        <Input type='checkbox' borderRadius='none' h='15px' w='15px' p='0'></Input>
                    </Th>
                    <Th borderBottom='none'>
                        <Text fontSize='sm'>USUÁRIO</Text>
                    </Th>
                    <Th borderBottom='none' textAlign='center'>
                        <Text fontSize='sm'>DATA DE CADASTRO</Text>
                    </Th>
                    <Th borderBottom='none'>

                    </Th>
                </Tr>
                <Tr borderBottom='1px solid #353646'>
                    <Td w='0' borderBottom='none' verticalAlign='baseline'>
                        <Input type='checkbox' borderRadius='none' h='15px' w='15px' p='0'></Input>
                    </Td>
                    <Td borderBottom='none'>
                        <Text fontSize='lg' fontWeight='bold'>Gabriel Costa</Text>
                        <Text fontSize='sm' color='gray.100'>gabrielcostalavor0@gmail.com</Text>
                    </Td>
                    <Td borderBottom='none' textAlign='center'>
                        <Text>04 de Abril, 2021</Text>
                    </Td>
                    <Td borderBottom='none' display='flex' justifyContent='right'>
                        <Button bg='purple.500' type='submit'>
                            <Icon as={RiPencilLine}/>
                            <Text ml='2'>Editar</Text>
                        </Button>
                    </Td>
                </Tr>
                <Tr borderBottom='1px solid #353646'>
                    <Td w='0' borderBottom='none' verticalAlign='baseline'>
                        <Input type='checkbox' borderRadius='none' h='15px' w='15px' p='0'></Input>
                    </Td>
                    <Td borderBottom='none'>
                        <Text fontSize='lg' fontWeight='bold'>Gabriel Costa</Text>
                        <Text fontSize='sm' color='gray.100'>gabrielcostalavor0@gmail.com</Text>
                    </Td>
                    <Td borderBottom='none' textAlign='center'>
                        <Text>04 de Abril, 2021</Text>
                    </Td>
                    <Td borderBottom='none' display='flex' justifyContent='right'>
                        <Button bg='purple.500' type='submit'>
                            <Icon as={RiPencilLine}/>
                            <Text ml='2'>Editar</Text>
                        </Button>
                    </Td>
                </Tr>
                <Tr borderBottom='1px solid #353646'>
                    <Td w='0' borderBottom='none' verticalAlign='baseline'>
                        <Input type='checkbox' borderRadius='none' h='15px' w='15px' p='0'></Input>
                    </Td>
                    <Td borderBottom='none'>
                        <Text fontSize='lg' fontWeight='bold'>Gabriel Costa</Text>
                        <Text fontSize='sm' color='gray.100'>gabrielcostalavor0@gmail.com</Text>
                    </Td>
                    <Td borderBottom='none' textAlign='center'>
                        <Text>04 de Abril, 2021</Text>
                    </Td>
                    <Td borderBottom='none' display='flex' justifyContent='right'>
                        <Button bg='purple.500' type='submit'>
                            <Icon as={RiPencilLine}/>
                            <Text ml='2'>Editar</Text>
                        </Button>
                    </Td>
                </Tr>
            </Table>
            <Pagination/>
          </Box>
      </Box>
    )
}