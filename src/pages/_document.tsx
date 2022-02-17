import { Box } from "@chakra-ui/react"
import Document, { Html, Main, NextScript, Head } from "next/document"

export default class MyDocument extends Document{
    render() {
        return(
            
            <Html>
                <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
                </Head>
                <Box as="body" bg='#171923'>
                    <Main/>
                    <NextScript />
                </Box>
            </Html>
            
        )
    }
}