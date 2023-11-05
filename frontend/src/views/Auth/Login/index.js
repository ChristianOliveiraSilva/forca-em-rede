import AuthLayout from '../../../layouts/AuthLayout/index'

import { Link, useNavigate } from 'react-router-dom'
import { useCallback, useEffect, useState } from 'react'
import api from '../../../services/api'

const Component = () => {
    const [msg, setMsg] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleLogin = async () => {

        console.log({email, password})

        if (email === '' || password === '') {
            setMsg('Preencha todos os dados')
            return
        }

        setMsg('')

        try {
            const { data } = await api.post('auth/login', {email, password})
            const token = data.data.token
            const user = data.data.user
    
            if (token) {
                localStorage.setItem('token', token)
                localStorage.setItem('user', JSON.stringify(user))
                navigate('/app')
            }
        } catch (error) {
            const { data } = error
            setMsg(data.message)
        }
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            console.log(email)
            handleLogin()
        }
    }

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown)

        return () => {
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [handleKeyDown])

    return (
        <AuthLayout>
            <form className='form-container'>
                <section>
                    <h1 className='text-light'>Login</h1>

                    <div className="form-outline mb-4">
                        <input type="email" id="email-input" className="form-control" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                        <label className="form-label" htmlFor="email-input">Email</label>
                    </div>

                    <div className="form-outline mb-4">
                        <input type="password" id="password-input" className="form-control" placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)} />
                        <label className="form-label" htmlFor="password-input">Senha</label>
                    </div>

                    <p className='text-end text-light'>
                        <Link to="/forgot-password">Esqueceu sua senha?</Link>
                    </p>
                </section>

                <p className='text-danger text-center'>{msg}</p>

                <button type="button" className="btn btn-primary btn-block mb-4" onClick={handleLogin}>Logar</button>

                <div className="text-center text-light">
                    <p>Ainda não é um membro? 💜 <Link to="/register">Registre-se</Link></p>
                </div>
            </form>
        </AuthLayout>
    )
}

export default Component
