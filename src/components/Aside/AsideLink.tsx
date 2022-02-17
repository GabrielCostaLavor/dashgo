import { Flex, Icon, Link, Text, LinkProps } from "@chakra-ui/react";
import { ElementType } from "react";

interface AsideLinkProps extends LinkProps{
    icon: ElementType,
    LinkName: string,
    linkUrl: string
}

export function AsideLink({linkUrl, icon, LinkName, ...rest}: AsideLinkProps){
    return(
        <Link {...rest} href={linkUrl}>
            <Flex align='center'>
                <Icon as={icon} fontSize='20px'></Icon>
                <Text fontWeight={600} fontSize='1xl'  ml='3' letterSpacing='tight'>{LinkName}</Text>
            </Flex>
        </Link>
    )
}