import { Box, Flex, Table, Text, Button, Icon, Grid, GridItem, Container } from '@chakra-ui/react'
import { BsPersonPlusFill } from 'react-icons/bs'
import { RiPencilLine } from 'react-icons/ri'
import { Aside } from '../../components/Aside'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Pagination } from '../../components/Pagination'
import { UsersList } from '../../components/Users/UserList'
import { UserListHead } from '../../components/Users/UserListHead'

export default function Users() {
    return (
<Grid h='100vh' templateRows='auto 1fr auto' templateColumns='auto'>
    <GridItem colSpan={1} rowSpan={1}>
        <Header />
    </GridItem>
    <GridItem colSpan={1} rowSpan={1}>
        <Box as='main' w='100%' my='9' height='auto'>
        <Container maxW='container.xl' display='flex' height='100%'>
            <Aside/>
            <Box bg='gray.800' w='100%' p={8} borderRadius={'lg'}>
                <Flex align='center' justify='space-between' pb='4'>
                    <Text fontSize='xx-large' fontWeight='bold'>Usuários</Text>
                    <Button type='submit' bg='pink.500'>
                        <Icon as={BsPersonPlusFill} />
                        <Text pl='2'>Criar Novo</Text>
                    </Button>
                </Flex>
                <Table>
                    <UserListHead />
                    <UsersList 
                    userNome='Gabriel Costa' userEmail='gabrielcostalavor0@gmail.com'
                    createDate='23 de Julho, 2021'
                    />
                    <UsersList 
                    userNome='Rafael Nunes' userEmail='rf0@gmail.com'
                    createDate='23 de Julho, 2021'
                    />
                    <UsersList 
                    userNome='Son Goku' userEmail='goku0@gmail.com'
                    createDate='23 de Julho, 2021'
                    />
                    <UsersList 
                    userNome='Monkey D. Luffy' userEmail='gomugomuno0@gmail.com'
                    createDate='23 de Julho, 2021'
                    />
                </Table>
                <Pagination/>
            </Box>
            </Container>
        </Box>
    </GridItem>
    <GridItem colSpan={1} rowSpan={1}>
        <Footer />
    </GridItem>
</Grid>
    )
}