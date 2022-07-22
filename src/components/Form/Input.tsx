import { FormControl, FormErrorMessage, FormLabel, Input, InputProps as ChakraInput} from "@chakra-ui/react"
import {forwardRef, ForwardRefRenderFunction} from "react"
import { FieldError } from "react-hook-form"

interface inputProps extends ChakraInput{
    label?: string,
    name: string
    error?: FieldError
}

const InputComponentBase: ForwardRefRenderFunction<HTMLInputElement, inputProps> = ({label, name,error, ...rest}, ref,) =>{
    return(
        <FormControl isInvalid={!!error}>
            {label && <FormLabel htmlFor={name}>{label}</FormLabel>}
            <Input
                id={name}
                name={name}
                variant='filled'
                bg='gray.700'
                w='100%' 
                h='12'
                type={name}
                focusBorderColor='pink.500'
                borderRadius='40'
                ref={ref}
                _hover={{
                bg: 'gray.700',
                }}
                />
                {!!error && (
                    <FormErrorMessage>{error.message}</FormErrorMessage>
                )}
        </FormControl>
    )
}

export const InputComponent = forwardRef(InputComponentBase)