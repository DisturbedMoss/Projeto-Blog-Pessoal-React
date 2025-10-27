//o arquivo é .ts pois .tsx espera retorno em html
import type Postagem from "./Postagem";

export default interface Usuario{
    id: number;
    nome: string;
    usuario: string;
    senha: string;
    foto: string;
    //postagem é opicional e pode ser nula
    postagem?: Postagem[] | null;
}