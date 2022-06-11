import useAuth from "../../data/hook/useAuth";
import { IconeHome, IconeConfiguracao, IconeNotificacao, IconeSair } from "../icons";
import Logo from "./Logo";
import MenuItem from "./MenuItem";

export default function MenuLateral(props) {

    const { logout } = useAuth()

    return (
        <aside className={`
            flex flex-col
             dark:bg-gray-900 dark:text-gray-200
             bg-gray-300 
             `}>
            <div className={`
                flex flex-col items-center justify-center
                bg-gradient-to-r from-indigo-500 to-purple-800
                h-20 w-20
            `}>
                <Logo></Logo>
            </div>
            <ul className="flex-grow">
                <MenuItem url="/" texto="Home" icone={IconeHome}></MenuItem>
                <MenuItem url="/configuracoes" texto="Configurações" icone={IconeConfiguracao}></MenuItem>
                <MenuItem url="/notificacoes" texto="Notificacões" icone={IconeNotificacao}></MenuItem>
            </ul>
            <ul>
            <MenuItem
                    texto="Sair" icone={IconeSair} 
                    onClick={logout}
                    className={`
                        text-red-600 dark:text-red-400
                        hover:bg-red-400 hover:text-white
                        dark:hover:text-white
                    `}
                />
            </ul>
        </aside>
    )
}