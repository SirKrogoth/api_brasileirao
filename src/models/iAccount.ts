import { AccountStatus } from "./AccountStatus";

export interface iAccount{
    id?: number, 
    nome: string,
    email: string,
    password: string,
    status?: AccountStatus,
    clubeFavorito?: number
}