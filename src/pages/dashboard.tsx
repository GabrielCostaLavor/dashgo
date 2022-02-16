import { Box, Container, Flex, Grid, GridItem, SimpleGrid, Text } from "@chakra-ui/react";
import { Aside } from "../components/aside";
import { Header } from "../components/header";



export default function Dashboard(){
    return(
    <>
        <Header />
        <Grid height='calc(100vh - 80px)'  templateColumns='1fr' templateRows='1fr  auto' margin='auto'>
            <GridItem colSpan={1} rowSpan={1} ml='auto' mr='auto' w='100%'>
                <Container maxW='container.xl' height='100%'>
                    <Flex h="100%">
                        <Aside />
                        <Dashboard/>
                    </Flex>
                </Container>
            </GridItem>
            <GridItem w='auto' bg='pink.600' colSpan={1} rowSpan={1} height='auto'>
                <footer>DC</footer>
            </GridItem>
        </Grid>
    </>
    )
}