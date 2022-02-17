import { Box, Button, Divider, Flex, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { InputComponent } from "../../components/Form/Input";

export default function (){
    return(
    <Box  as='main' w='100%' my='9' height=  'auto'>
        <Box p='8' bg='gray.800' borderRadius={'lg'}>
            <Heading>Criar  Usuário</Heading>
            <Divider my={8}/>
            <Box>
                <Stack spacing={8}>
                <SimpleGrid minChildWidth='240px' w='100%' spacing='8'>
                    <Box>
                    <InputComponent name="text" label="Nome Completo" />
                    </Box>
                    <Box>
                    <InputComponent name="email" type='email' label="E-mail" />
                    </Box>
                </SimpleGrid>
                <SimpleGrid minChildWidth='240px' w='100%' spacing='8'>
                    <Box>
                    <InputComponent name="text" label="Senha" type='password' />
                    </Box>
                    <Box>
                    <InputComponent name="email" type='password' label="Confirmar senha" />
                    </Box>
                </SimpleGrid>
                <Flex justifyContent={'end'}>
                    <Button bg='gray.500' fontWeight='bold'>Cancelar</Button>
                    <Button ml={'4'} bg={'pink.500'} fontWeight='bold'>Salvar</Button>
                </Flex>
                </Stack>
            </Box>
        </Box>
    </Box>
    )
}