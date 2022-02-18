import { Box, Button, Container, Divider, Flex, Grid, GridItem, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import { Aside } from "../../components/Aside";
import { Footer } from "../../components/Footer";
import { InputComponent } from "../../components/Form/Input";
import { Header } from "../../components/Header";

export default function () {
    return (
        <Grid h='100vh' templateRows='auto 1fr auto' templateColumns='auto'>
            <GridItem colSpan={1} rowSpan={1}>
                <Header />
            </GridItem>
            <GridItem colSpan={1} rowSpan={1}>
                <Container maxW='container.xl' display='flex' height='100%'>
                    <Aside/>
                    <Box as='main' w='100%' my='9' height='auto'>
                        <Box p={['4', '6', '8']} bg='gray.800' borderRadius={'lg'}>
                            <Heading>Criar  Usuário</Heading>
                            <Divider my={['4', '6', '8']} />
                            <Box>
                                <Stack spacing={['4', '6','8']}>
                                    <SimpleGrid minChildWidth='240px' w='100%' spacing={['4', '6','8']}>
                                        <Box>
                                            <InputComponent name="text" label="Nome Completo" />
                                        </Box>
                                        <Box>
                                            <InputComponent name="email" type='email' label="E-mail" />
                                        </Box>
                                    </SimpleGrid>
                                    <SimpleGrid minChildWidth='240px' w='100%' spacing={['4', '6','8']}>
                                        <Box>
                                            <InputComponent name="text" label="Senha" type='password' />
                                        </Box>
                                        <Box>
                                            <InputComponent name="email" type='password' label="Confirmar senha" />
                                        </Box>
                                    </SimpleGrid>
                                    <Flex justifyContent={'end'} py={['3', '0']}>
                                        <Link href='/users' passHref>
                                            <Button as='a' bg='gray.500' fontWeight='bold'>Cancelar</Button>
                                        </Link>
                                        <Button ml={'4'} bg={'pink.500'} fontWeight='bold'>Salvar</Button>
                                    </Flex>
                                </Stack>
                            </Box>
                        </Box>
                    </Box>
                </Container>

            </GridItem>
            <GridItem colSpan={1} rowSpan={1}>
                <Footer />
            </GridItem>
        </Grid>
    )
}