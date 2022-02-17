import { Box } from "@chakra-ui/react";

interface PaginiationItemProps{
    number: number,
    isActive?: boolean
}

export function PaginationItem({number, isActive}:PaginiationItemProps){
    return(
        isActive ? 
        <Box
        px='12px'
        py='6px'
        bg='pink.700'
        borderRadius='lg'
        >{number}</Box>
        :<Box
            px='12px'
            py='6px'
            bg='gray.700'
            borderRadius='lg'
            _hover={{
                cursor: 'pointer',
                filter: 'brightness(0.8)'
            }}>{number}</Box>
          )
}