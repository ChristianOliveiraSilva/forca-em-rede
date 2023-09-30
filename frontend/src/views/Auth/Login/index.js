import AuthLayout from '../../../layouts/AuthLayout/index'
import '../../../assets/scss/pages/login.scss'

import { Link } from 'react-router-dom'

const Component = () => {
    return (
        <AuthLayout>
            <form className='form-container'>
                <section>
                    <h1 className='text-light'>Login</h1>

                    <div className="form-outline mb-4">
                        <input type="email" className="form-control" placeholder="Email" />
                        <label className="form-label" htmlFor="form2Example1">Email</label>
                    </div>

                    <div className="form-outline mb-4">
                        <input type="password" className="form-control" placeholder="Senha" />
                        <label className="form-label" htmlFor="form2Example2">Senha</label>
                    </div>

                    <p className='text-end text-light'>
                            <Link to="/forgot-password">Esqueceu sua senha?</Link>
                    </p>
                </section>

                <button type="button" className="btn btn-primary btn-block mb-4">Logar</button>

                <div className="text-center text-light">
                    <p>Ainda não é um membro? 💜 <Link to="/register">Registre-se</Link></p>
                </div>
            </form>
        </AuthLayout>
    )
}

export default Component
