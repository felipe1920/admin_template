import Link from 'next/link'

interface menuItemProps {
    texto: string
    icone: any
    url?: string
    className?: string
    onClick?: (evento: any) => void
}

export default function MenuItem(props: menuItemProps) {

    function renderizarLink() {
        return (
            <a className={` flex flex-col justify-center items-center h-20 w-20 text-gray-200 ${props.className}`}>
                <span className={` text-gray-900 dark:text-gray-300`}>{props.icone}</span>
                
                <span className={`text-xs font-light text-gray-900 dark:text-gray-300`}>
                    {props.texto}
                </span>
            </a>
        )
    }

    return (
        <li onClick={props.onClick} className={`hover:bg-gray-400 cursor-pointer dark:hover:bg-gray-800`}>
            {props.url ? (
                <Link href={props.url}>
                    {renderizarLink()}
                </Link>
            ) : (
                renderizarLink()
            )}

        </li>
    )
}