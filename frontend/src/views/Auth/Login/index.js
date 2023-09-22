import AuthLayout from '../../../layouts/AuthLayout/index'
import '../../../assets/scss/pages/login.scss'

const Component = () => {
    return (
        <AuthLayout>
            <form className='form-container'>
                <section>
                    <h1>Login</h1>

                    <div className="form-outline mb-4">
                        <input type="email" className="form-control" />
                        <label className="form-label" htmlFor="form2Example1">Email</label>
                    </div>

                    <div className="form-outline mb-4">
                        <input type="password" className="form-control" />
                        <label className="form-label" htmlFor="form2Example2">Senha</label>
                    </div>

                    <div className="row mb-4">
                        <div className="col">
                            <a href="#!">Esqueceu sua senha?</a>
                        </div>
                    </div>
                </section>

                <button type="button" className="btn btn-primary btn-block mb-4">Logar</button>

                <div className="text-center">
                    <p>Ainda não é um membro? 💜 <a href="#!">Registre-se</a></p>
                </div>
            </form>
        </AuthLayout>
    )
}

export default Component
