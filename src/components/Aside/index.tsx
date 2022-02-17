import { Box, Flex, Icon, Link, Stack, Text } from "@chakra-ui/react";
import {RiContactsLine, RiDatabaseLine,RiGitBranchLine} from 'react-icons/ri'
import {AiOutlineForm} from 'react-icons/ai'
import { AsideSection } from "./AsideSection";
import { AsideLink } from "./AsideLink";

export function Aside(){
    return(
        <Box as="aside" w='180px' height='100%'>
            <AsideSection title="GERAL">
                <AsideLink linkUrl="/dashboard" icon={RiDatabaseLine} LinkName="Dashboard">
                </AsideLink>
                <AsideLink linkUrl="/users" icon={RiContactsLine} LinkName="Usuários">
                </AsideLink>
            </AsideSection>
            <AsideSection title="AUTOMAÇÃO">
                <AsideLink linkUrl='/#' icon={AiOutlineForm} LinkName="Formulário">
                </AsideLink>
                <AsideLink linkUrl='/#' icon={RiGitBranchLine} LinkName="Automação">
                </AsideLink>
            </AsideSection>
        </Box>
    )
}