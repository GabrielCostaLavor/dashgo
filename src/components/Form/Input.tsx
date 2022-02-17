import { FormLabel, Input, InputProps as ChakraInput} from "@chakra-ui/react"

interface inputProps extends ChakraInput{
    label?: string,
    name: string
}

export function InputComponent({label, name, ...atributesRestantes}: inputProps){
    return(
        <>
        <FormLabel htmlFor={name}>{label}</FormLabel>
        <Input
            id={name}
            variant='filled'
            bg='gray.700'
            w='100%' 
            h='12'
            type={name}
            focusBorderColor='pink.500'
            borderRadius='40'

            _hover={{
            bg: 'gray.700',
            }}
            {...atributesRestantes}
        />
        </>
    )
}