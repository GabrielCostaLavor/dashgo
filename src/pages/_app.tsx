import type { AppProps } from 'next/app'
import {ChakraProvider, Container, Grid, GridItem} from '@chakra-ui/react'
import { theme } from '../styles/theme'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Aside } from '../components/Aside'
import { SidebarDrawerProvider } from '../components/context/SidebarDrawerContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/**ChakraProvider serve para habilitar o chakra, esse theme é pra por o a variavel com estilização pro thema, resetCSS é pra resetar o css */}
      <ChakraProvider theme={theme}>
        <SidebarDrawerProvider>
          <Component {...pageProps} />
        </SidebarDrawerProvider>
      </ChakraProvider>
    </>
    )
}

export default MyApp
