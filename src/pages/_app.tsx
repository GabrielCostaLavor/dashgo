import type { AppProps } from 'next/app'
import {ChakraProvider, Container, Grid, GridItem} from '@chakra-ui/react'
import { theme } from '../styles/theme'
import { Header } from '../components/header'
import { Footer } from '../components/footer'
import { Aside } from '../components/aside'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/**ChakraProvider serve para habilitar o chakra, esse theme é pra por o a variavel com estilização pro thema, resetCSS é pra resetar o css */}
      <ChakraProvider theme={theme}>
        <Grid h='100vh' templateRows='auto 1fr auto' templateColumns='auto'>
          <GridItem colSpan={1} rowSpan={1}>
            <Header/>  
          </GridItem>
          <GridItem colSpan={1} rowSpan={1}>
            <Container maxW='container.xl' display='flex'>
              <Aside/>
              <Component {...pageProps} />
            </Container>
          </GridItem>
          <GridItem colSpan={1} rowSpan={1}>
            <Footer/>
          </GridItem>
        </Grid>
      </ChakraProvider>
    </>
    )
}

export default MyApp
