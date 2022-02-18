import { Flex, Icon, Link as LinkChakra, Text, LinkProps } from "@chakra-ui/react";
import Link from "next/link";
import { ElementType } from "react";
import { ActiveLink } from "../ActiveLink";

interface AsideLinkProps extends LinkProps{
    icon: ElementType,
    LinkName: string,
    linkUrl: string
}

export function AsideLink({linkUrl, icon, LinkName, ...rest}: AsideLinkProps){
    return(
        <ActiveLink href={linkUrl} passHref>
            <LinkChakra {...rest} >
                <Flex align='center'>
                    <Icon as={icon} fontSize='20px'></Icon>
                    <Text fontWeight={600} fontSize='1xl'  ml='3' letterSpacing='tight'>{LinkName}</Text>
                </Flex>
            </LinkChakra>
        </ActiveLink>
    )
}