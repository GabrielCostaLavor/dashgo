import type { AppProps } from 'next/app'
import {ChakraProvider, Container, Grid, GridItem} from '@chakra-ui/react'
import { theme } from '../styles/theme'
import { SidebarDrawerProvider } from '../components/context/SidebarDrawerContext'
import { makeServer } from '../service/mirage'
import {QueryClient, QueryClientProvider} from 'react-query'
import {ReactQueryDevtools} from'react-query/devtools'

function MyApp({ Component, pageProps }: AppProps) {
  
  const queryClient = new QueryClient()

    if(process.env.NODE_ENV === 'development') makeServer()
  return (
    <>
      <QueryClientProvider client={queryClient}>
        {/**ChakraProvider serve para habilitar o chakra, esse theme é pra por o a variavel com estilização pro thema, resetCSS é pra resetar o css */}
        <ChakraProvider theme={theme}>
          <SidebarDrawerProvider>
            <Component {...pageProps} />
          </SidebarDrawerProvider>
        </ChakraProvider>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
    )
}

export default MyApp
