import { Box, Button, Container, Divider, Flex, Grid, GridItem, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { Aside } from "../../components/Aside";
import { Footer } from "../../components/Footer";
import { InputComponent } from "../../components/Form/Input";
import { Header } from "../../components/Header";

type CreateUsers = {
    name: string,
    password: string,
    confirmPass: string,
    email: string,
}

export default function () {

    const { register, handleSubmit, formState, errors } = useForm()

    const handleCreateUser: SubmitHandler<CreateUsers> = async(values) => {
        await new Promise(resolve => setTimeout(resolve, 2000))
        console.log(values)
    }

    return (
        <Grid h='100vh' templateRows='auto 1fr auto' templateColumns='auto'>
            <GridItem colSpan={1} rowSpan={1}>
                <Header />
            </GridItem>
            <GridItem colSpan={1} rowSpan={1}>
                <Container maxW='container.xl' display='flex' height='100%'>
                    <Aside />
                    <Box as='main' w='100%' my='9' height='auto'>
                        <Box p={['4', '6', '8']} bg='gray.800' borderRadius={'lg'}>
                            <Heading>Criar  Usuário</Heading>
                            <Divider my={['4', '6', '8']} />
                            <Box as="form" onSubmit={handleSubmit(handleCreateUser)}>
                                <Stack spacing={['4', '6', '8']}>
                                    <SimpleGrid minChildWidth='240px' w='100%' spacing={['4', '6', '8']}>
                                        <Box>
                                            <InputComponent
                                              name="text"
                                              label="Nome Completo" 
                                              ref={register({required: "Nome obrigatório"})}
                                              error={errors.name}
                                            />
                                        </Box>
                                        <Box>
                                            <InputComponent
                                              name="email"
                                              type='email'
                                              label="E-mail" 
                                              ref={register({required: "Email obrigatório"})}
                                              error={errors.email}  
                                            />
                                        </Box>
                                    </SimpleGrid>
                                    <SimpleGrid minChildWidth='240px' w='100%' spacing={['4', '6', '8']}>
                                        <Box>
                                            <InputComponent
                                              name="password"
                                              label="Senha"
                                              ref={register({required: "Senha obrigatório"})}
                                              error={errors.password}
                                              />
                                        </Box>
                                        <Box>
                                            <InputComponent
                                              name="password"
                                              label="Confirmar senha" 
                                              ref={register({required: "Confirmar senha obrigatório"})}
                                              error={errors.confirmPass}
                                              />
                                        </Box>
                                    </SimpleGrid>
                                    <Flex justifyContent={'end'} py={['3', '0']}>
                                        <Link href='/users' passHref>
                                            <Button as='a' bg='gray.500' fontWeight='bold'>Cancelar</Button>
                                        </Link>
                                        <Button
                                          type="submit"
                                          ml={'4'}
                                          bg={'pink.500'}
                                          fontWeight='bold'
                                          isLoading={formState.isSubmitting}>Salvar</Button>
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