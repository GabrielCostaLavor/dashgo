import { Text, Flex, HStack } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

interface PagnationProps {
    totalUser?: number,
    userPerPages?: number,
    currentPage?: number,
    onPageChange: (page: number) => void 
}

const simblesCount = 1
function generatePagesArray(from: number, to: number) {
        return [...new Array(to - from)].
        map((_, index) => {
            return from + index + 1
        }).filter(page => page > 0)
}
export function Pagination({totalUser, userPerPages = 10, currentPage = 1, onPageChange} : PagnationProps){
    const lastPage = Math.floor(totalUser / userPerPages)

    const previousPages = currentPage > 1 
    ? generatePagesArray(currentPage - 1 - simblesCount, currentPage -1)
    : []

    const nextPages = currentPage < lastPage
    ? generatePagesArray(currentPage, Math.min(currentPage + simblesCount, lastPage))
    :[]
    return(
        <Flex mt='8'>
            <HStack spacing='2'>
                {(currentPage + simblesCount > 2) && currentPage !== 2 && (
                    <>
                    <PaginationItem onPageChange={onPageChange} number={1} />
                    {currentPage > (1 + simblesCount) && <Text>...</Text>}
                    </>
                )}
                {previousPages.length > 0 && previousPages.map(page => {
                    return (
                        <PaginationItem onPageChange={onPageChange} key={page} number={page} />
                    )
                })}
                <PaginationItem onPageChange={onPageChange} number={currentPage} isActive />
                {nextPages.length > 0 && nextPages.map(page => {
                    return (
                        <PaginationItem onPageChange={onPageChange} key={page} number={page} />
                    )
                })}
                {(currentPage + simblesCount) < lastPage && (
                    <>
                        {(currentPage + 1 + simblesCount) < lastPage && <Text>...</Text>}
                        <PaginationItem onPageChange={onPageChange} number={lastPage} />
                    </>
                )}
            </HStack>
        </Flex>
    )
}