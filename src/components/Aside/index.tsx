import { Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, useBreakpointValue} from "@chakra-ui/react";
import { useSidebarDrawer } from "../context/SidebarDrawerContext";
import { AsideNav } from "./AsideNav";

export function Aside(){
    const { isOpen, onClose } = useSidebarDrawer()
    const AsideWideMobile = useBreakpointValue({
        base: true,
        lg: false
    })

    if(AsideWideMobile){
        return(
            //Vai abrir um modal com meu menu mobile
            <Drawer isOpen={isOpen} placement="left" onClose={onClose} >
                <DrawerOverlay />
                <DrawerContent bg="gray.800"> 
                    <DrawerCloseButton/>
                    <DrawerHeader>Menu</DrawerHeader>
                    <DrawerBody>
                        <AsideNav/>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        )
    }
    return(
        <Box as="aside" w='180px' height='100%'>
            <AsideNav/>
        </Box>
    )
}