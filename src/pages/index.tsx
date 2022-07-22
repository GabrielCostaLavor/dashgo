import { Flex, Stack, Button } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { SubmitHandler, useForm } from 'react-hook-form'
import { InputComponent } from '../components/Form/Input'

type Values ={
  email: string,
  password: string
}
const SingIn: NextPage = () => {

  const {register, handleSubmit, formState, errors} = useForm()
  console.log(errors)
  const handleSignIn: SubmitHandler<Values> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    console.log(values)
  }

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
          onSubmit={handleSubmit(handleSignIn)}
          >
          {/**/}
          <Stack spacing={4}>(
            <InputComponent
              name='email'
              label='Email'
              ref={register({required: "Email obrigatório"})}
              error={errors.email}
            />
            <InputComponent
              name='password'
              label='Senha'
              error={errors.password}
              ref={register({required: 'Senha obrigatória'})}
            />
          </Stack>
              <Button
                type='submit'
                bg='pink.500'
                color='green.50'
                mt='6'
                isLoading={formState.isSubmitting}
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
