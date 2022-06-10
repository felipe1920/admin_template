import useAppData from "../../data/hook/useAppData";
import AvatarUsuario from "./AvatarUsuario";
import BotalAltenarTema from "./BotalAltenarTema";
import Titulo from "./Titulo";

interface CabecalhoProps {
    titulo: string
    subtitulo: string
}

export default function Cabecalho(props: CabecalhoProps) {

    const {tema, alternarTema} = useAppData();

    return (
        <div className={`
           flex 
        `}>
            <Titulo titulo={props.titulo} subtitulo={props.subtitulo}></Titulo>
            <div className={`
                flex flex-grow justify-end items-center 
            `}>
                <BotalAltenarTema tema={tema} alternarTema = {alternarTema}></BotalAltenarTema>
                <AvatarUsuario></AvatarUsuario>
            </div>
        </div>
    )
}