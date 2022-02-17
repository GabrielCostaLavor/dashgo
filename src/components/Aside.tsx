import { Box, Flex, Icon, Link, Stack, Text } from "@chakra-ui/react";
import {RiContactsLine, RiDatabaseLine,RiGitBranchLine} from 'react-icons/ri'
import {AiOutlineForm} from 'react-icons/ai'

export function Aside(){
    return(
        <Box as="aside" w='180px' height='100%'>
            <Box mb='8'>
                <Text py='9' fontWeight='bold' color='gray.300' letterSpacing='tight'>GERAL</Text>
                <Stack spacing='4'>
                    <Link>
                        <Flex align='center'>
                            <Icon as={RiDatabaseLine } fontSize='20px'></Icon>
                            <Text fontWeight={600} fontSize='1xl'  ml='3' letterSpacing='tight'>Dashboard</Text>
                        </Flex>
                    </Link>
                    <Link>
                        <Flex align='center'>
                            <Icon as={RiContactsLine } fontSize='20px'></Icon>
                            <Text fontWeight={600} fontSize='1xl'  ml='3' letterSpacing='tight'>Usuários</Text>
                        </Flex>
                    </Link>
                </Stack>
            </Box>
            <Box>
                <Text py='9' fontWeight='bold' color='gray.300' letterSpacing='tight'>AUTOMAÇÃO</Text>
                <Stack spacing='4'>
                    <Link>
                        <Flex align='center'>
                            <Icon as={AiOutlineForm } fontSize='20px'></Icon>
                            <Text fontWeight={600} fontSize='1xl'  ml='3' letterSpacing='tight'>Formulário</Text>
                        </Flex>
                    </Link>
                    <Link>
                        <Flex align='center'>
                            <Icon as={RiGitBranchLine } fontSize='20px'></Icon>
                            <Text fontWeight={600} fontSize='1xl'  ml='3' letterSpacing='tight'>Automação</Text>
                        </Flex>
                    </Link>
                </Stack>
            </Box>
        </Box>
    )
}