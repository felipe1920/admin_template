import next from "next";
import { useState } from "react";
import AuthInput from "../components/auth/AuthInput";
import { IconeAtencao } from "../components/icons";
import useAuth from "../data/hook/useAuth";
import Cookies from 'js-cookie'
import route from "next/router";

export default function autenticacao() {

    const { cadastrar, login, loginGoogle } = useAuth();

    const [modo, setModo] = useState<'login' | 'cadastro'>('login')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [erro, setErro] = useState(null)

    function exibirErro(msg, tempo = 5) {
        setErro(msg)
        setTimeout(() => setErro(null), tempo * 1000)
    }

    async  function submeter() {

        try {
            if (modo === 'login') {
                await login(email, senha)
            } else {
                await cadastrar(email, senha)
            }
        } catch (e) {
            exibirErro(e?.message ?? 'DEU PT')
        }

    }

    if (Cookies.get('admin-template-FF-auth')) {
        route.push('/')
    }

    return (
        <div className={`flex h-screen items-center justify-center`}>
            <div className={`hidden md:block md:w-1/2 lg:w-2/3 `}>
                <img
                    src="https://source.unsplash.com/random"
                    className="h-screen w-full object-cover"
                ></img>
            </div>
            <div className={`m-10 w-full md:w-1/2 lg:w-1/3`}>
                <h1 className={`text-xl font-bold mb-5`}>
                    {modo === 'login' ? 'Autenticação' : 'realize seu cadastro'}
                </h1>

                {erro ? (
                    <div className={`bg-red-400 text-white py-3 px-5 my-2 border-4 border-red-700 rounded-lg flex items-center`}>
                        {IconeAtencao}
                        <span className="ml-3">{erro}</span>
                    </div>
                ) : false}

                <AuthInput
                    label="E-mail"
                    valor={email}
                    ValorMudou={setEmail}
                    tipo='email'
                    obrigatorio
                ></AuthInput>
                <AuthInput
                    label="Senha"
                    valor={senha}
                    ValorMudou={setSenha}
                    tipo='password'
                    obrigatorio
                ></AuthInput>
                <button onClick={submeter} className={`
                w-full bg-indigo-500 hover:bg-indigo-400
                text-white rounded-lg px-4 py-3 mt-6
            `}>
                    {modo === 'login' ? 'Entrar' : 'Cadastrar'}
                </button>
                <hr className="my-6 border-gray-300 w-full"></hr>
                <button onClick={loginGoogle} className={`
                    w-full bg-red-500 hover:bg-red-400
                    text-white rounded-lg px-4 py-3
                `}>
                    {modo === 'login' ? 'Logar com o Google' : 'Se cadastar usando o Google'}
                </button>
                {modo === 'login' ? (
                    <p className="mt-8">
                        Novo por aqui ?
                        <a onClick={() => setModo('cadastro')} className={`
                            text-blue-500 hover:text-blue-700 font-semibold
                            cursor-pointer
                        `}> Crie Um conta
                        </a>
                    </p>
                ) : (
                    <p className="mt-8">
                        Já faz parte dessa comunidade?
                        <a onClick={() => setModo('login')} className={`
                            text-blue-500 hover:text-blue-700 font-semibold
                            cursor-pointer
                        `}> Entre com suas credenciais
                        </a>
                    </p>
                )}
            </div>
        </div>
    )
}
