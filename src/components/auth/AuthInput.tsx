interface AuthInputProps {
    label: string
    valor: any
    obrigatorio?: boolean
    tipo?: 'text' | 'email' | 'password'
    ValorMudou: (novoValor: any) => void
}


export default function AuthInput(props : AuthInputProps) {
    return (
        <div className="flex flex-col mt-5">
            <label className={`
            
            `}>{props.label}</label>
            <input 
                type={props.tipo ?? 'text'}
                onChange={e =>props.ValorMudou?.(e.target.value)} 
                value={props.valor}
                required={props.obrigatorio}
                className={`
                    px-4 py-3 rounded-lg bg-gray-200 mt-2
                    border focus:border-blue-500
                    focus:outline-none
                    focus:bg-white
                `}
            ></input>
        </div>

    )
}
