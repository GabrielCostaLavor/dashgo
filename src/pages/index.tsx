import { Flex, Container, Stack, Button } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { InputComponent } from '../components/Form/input'

const SingIn: NextPage = () => {
  return (
    <>
      <Flex
        w='100%'
        height='100vh'
        maxW='360'
        align='center'
        justify='center'
        margin='auto'>
        <Flex 
          as='form' 
          w='100%'
          flexDirection='column'
          p='8'
          h='auto'
          bg='gray.800'
          borderRadius='16'
          >
          {/**/}
          <Stack spacing={4}>
            <InputComponent name='email' label='Email' />
            <InputComponent name='password' label='Senha' />
          </Stack>
              <Button
                type='submit'
                bg='pink.500'
                color='green.50'
                mt='6'
                _hover={{
                  bg: '#1F2029',
                  border: '1px solid #ffffff',
                  color: '#fffff'
                }}>Entrar</Button>
        </Flex>
      </Flex>
    </>
  )
}

export default SingIn
