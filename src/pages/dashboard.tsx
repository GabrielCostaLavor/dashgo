import { Box, Container, Flex, Grid, GridItem, SimpleGrid, Text, theme } from "@chakra-ui/react";
import { Aside } from "../components/Aside";
import { Header } from "../components/Header";
import dynamic from "next/dynamic";

import { ApexOptions } from  'apexcharts';
import { Footer } from "../components/Footer";


const Chart = dynamic(() => import('react-apexcharts'), {
    ssr: false,
})

const options: ApexOptions = {
    chart: {
        toolbar: {
            show: false,
        },
        zoom: {
            enabled: false,
        },
        foreColor: theme.colors.gray[500],
    },
    grid: {
        show: false,
    },
    dataLabels:{
        enabled: false,
    },
    tooltip: {
        enabled: false,
    },
    xaxis: {
        type: 'datetime',
        axisBorder: {
            color: theme.colors.gray[600]
        },
        axisTicks: {
            color: theme.colors.gray[600]
        },
        categories: [
            '2021-06-23T00:00:00.000Z',
            '2021-06-24T00:00:00.000Z',
            '2021-06-25T00:00:00.000Z',
            '2021-06-26T00:00:00.000Z',
            '2021-06-27T00:00:00.000Z',
            '2021-06-28T00:00:00.000Z',
            '2021-06-29T00:00:00.000Z',
        ],
    },

    fill: {
        opacity: 0.3,
        type: 'gradient',
        gradient: {
            shade: 'dark',
            opacityFrom: 0.7
        },
    }

};
const series = [
    {
        name: 'series1',
        data: [21, 65 ,142 , 65, 43,131, 87]
    }
]


export default function Dashboard(){
    return(
    <>
    <Grid h='100vh' templateRows='auto 1fr auto' templateColumns='auto'>
        <GridItem colSpan={1} rowSpan={1}>
            <Header/>  
        </GridItem>
        <GridItem colSpan={1} rowSpan={1}>
            <Container maxW='container.xl' display='flex' height='100%'>
                <Aside/>
            <Box as="main" w='100%' my={10}>
            <SimpleGrid flex='1' gap='4' minChildWidth='320px' alignContent='flex-start'>
                <Box
                    p='8'
                    bg='gray.800'
                    borderRadius={8}
                >
                    <Text
                        fontSize='lg'
                        mb='4'>Inscritos
                        da
                        semana</Text>
                        <Chart options={options} series={series} type="area" height={160} />
                </Box>
                <Box
                    p='8'
                    bg='gray.800'
                    borderRadius={8}
                >
                    <Text fontSize='lg' mb='4'>Inscritos da semana</Text>
                    <Chart options={options} series={series} type="area" height={160} />
                </Box>
            </SimpleGrid>
            </Box>
            </Container>
        </GridItem>
        <GridItem colSpan={1} rowSpan={1}>
            <Footer/>
        </GridItem>
    </Grid>
    </>
    )
}