import { Box, Flex, Table, Text, Button, Icon, Grid, GridItem, Container, Spinner } from '@chakra-ui/react'
import Link from 'next/link'
import { useState } from 'react'
import { BsPersonPlusFill } from 'react-icons/bs'
import { Aside } from '../../components/Aside'
import { useUsers } from '../../components/context/useUsers'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Pagination } from '../../components/Pagination'
import { UsersList } from '../../components/Users/UserList'
import { UserListHead } from '../../components/Users/UserListHead'

export default function Users() {

    const [page, setPage] = useState(1)
    const {data, isLoading, isFetching, error, status, refetch } = useUsers(page)
    const [user, setUser] = useState()
    console.log(data)
    console.log(page)

    function handlePrefetchUser () {
        
    }

    return (
    <Grid h='100vh' templateRows='auto 1fr auto' templateColumns='auto'>
        <GridItem colSpan={1} rowSpan={1}>
            <Header />
        </GridItem>
        <GridItem colSpan={1} rowSpan={1}>
            <Box as='main' w='100%' my='9' height='auto'>
            <Container maxW='container.xl' display='flex' height='100%'>
                <Aside/>
                <Box bg='gray.800' w='100%' p={['4','6','8']}  borderRadius={'lg'}>
                    <Flex align='center' justify='space-between' pb='4'>
                        <Text fontSize='xx-large' fontWeight='bold'>Usuários</Text>
                        <Box>
                            <Button type='submit' onClick={() => refetch()}>
                                {!isLoading && isFetching ?  
                                (<Spinner />) : 'Atualizar' 
                                }
                            </Button>
                            <Link href='/users/create' passHref>
                                <Button as='a' bg='pink.500'>
                                    <Icon as={BsPersonPlusFill} />
                                    <Text pl='2'>Criar Novo</Text>
                                </Button>
                            </Link>
                        </Box>
                    </Flex>
                    <Table>
                        <UserListHead />
                        {
                            status === 'success' ? data?.users.map(user => {
                                return(
                                    <UsersList 
                                    userNome={user.name} userEmail={user.email}
                                    createDate={user.createDate}
                                    />
                                )
                            }) : status === 'loading' ?
                                (<Flex justify={'center'} mt={4} w={'100%'}>
                                    <Spinner />
                                </Flex>) 
                                : (
                                    <Flex justify={'center'}>
                                        <h1>Falha ao carregar usuarios</h1>
                                    </Flex>
                                ) 

                        }
                    </Table>
                
                            <Pagination onPageChange={setPage} totalUser={data?.totalCount} currentPage={page}/>
                
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