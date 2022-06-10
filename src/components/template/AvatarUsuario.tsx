import Link from "next/link";
import useAuth from "../../data/hook/useAuth";

export default function AvatarUsuario() {

    const { usuario } = useAuth()

    return (
        <Link href='/perfil'>
            <img
                src={usuario?.imagemUrl ?? '/images/avatar.svg' }
                alt="Avatar"
                className="h-10 w-10 rounded-full cursor-pointer ml-3"
            ></img>
        </Link>
    )
}