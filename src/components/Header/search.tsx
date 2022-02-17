import { SearchIcon } from "@chakra-ui/icons";
import { Flex } from "@chakra-ui/react";
import { InputComponent } from "../Form/Input";

export function Search(){
    return(
        <Flex
            flex='5'
            ml='5'
            as='label'
            w='100%'
            maxW='360'
            align='center'
            position='relative'
            >
                <InputComponent name="text" placeholder="Buscar" _placeholder={{
                    pl: '2',
                    color: 'gray.300'
                }}/>
                <SearchIcon position='absolute' right='10'/>
        </Flex>
    )
}