import { useQuery } from "react-query"
import { api } from "../../service/api"

type User = {
    id: string,
    name: string,
    email: string,
    createDate: string
} 
type SetUsersProps = {
    totalCount: number,
    users: User[]
}
//CONSULTA DE USUARIOS
export async function getUsers(page: Number): Promise<SetUsersProps>{
    const {data, headers} = await api.get('/users', {
        params: {
            page
        }
    })

    const totalCount = Number(headers['x-total-count'])
    const users = data.users.map((user: User) => {
        return{
            id: user.id,
            name: user.name,
            email: user.email,
            createDate: new Date(user.createDate).toLocaleDateString('pt-br', {
                day: '2-digit',
                month: 'long',
                year: 'numeric'
            })
        }
    })
    return {users, totalCount }
}
//INTEGRANDO CONSULTA NO QUERY
export function useUsers(page: number) {
    return useQuery(['users', page], () => getUsers(page), {
        staleTime: 1000 * 10
    })
}