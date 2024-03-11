import Image from 'next/image'
import leftImageLogin from '@/public/assets/leftImageLogin.svg'
import rightUserLogin from '@/public/assets/rightUserLogin.png'
import rightKeyLogin from '@/public/assets/rightKeyLogin.png'

const LoginComponent = ({ user = '', password = '' }: { user: string, password: string }) => {

    return (
        <>

<div className="h-screen flex">
            <div className="bg-gray-900 w-3/5">
                <Image
                    src={leftImageLogin}
                    alt='Meninas sentadas no sofa'
                    style={{ maxWidth: '100%', height: '100%' }}
                />
            </div>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8" >
            
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-4xl font-bold leading-9 tracking-tight text-pink-600">
                        Entrar
                    </h2>
                </div>

                <div className="mt-11 sm:mx-auto sm:w-full sm:max-w-sm" >
                    <form className="space-y-6" action="#" method="POST">
                        <div>
                            <label htmlFor="email" className="block text-xl font-medium leading-6 text-pink-600">
                                Login
                            </label>
                            <div className="mt-2">
                                <div className='h-4 w-7'>
                                    <Image
                                        src={rightUserLogin}
                                        alt="Login"
                                        style={{ paddingTop: '1.5em', marginLeft: '0.4em', width: '2em' }}
                                    />
                                </div>

                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="block w-full rounded-md border-0 py-3 text-pink-600 shadow-sm ring-1 ring-inset ring-pink-300 placeholder:text-pink-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-xl sm:leading-6 pl-10"
            
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-xl font-medium leading-6 text-pink-600">
                                    Password
                                </label>
                            </div>
                            <div className="mt-2">
                                <div className='h-4 w-7'>
                                    <Image
                                        src={rightKeyLogin}
                                        alt="Login"
                                        style={{ paddingTop: '1.5em', marginLeft: '0.4em', width: '2em' }}
                                    />
                                </div>

                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="block w-full rounded-md border-0 py-3 text-pink-600 shadow-sm ring-1 ring-inset ring-pink-300 placeholder:text-pink-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-xl sm:leading-6 pl-10 "
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-pink-600 px-3 py-3 text-xl font-semibold leading-6 text-white  shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600 "
                            >
                                Entrar
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center">
                        <a href="#" className="font-semibold leading-6 text-pink-600 hover:text-pink-500">
                            Esqueceu a sua senha?
                        </a>
                    </p>
                </div>
            </div>
        </div>
        </>
    )
}

export default LoginComponent