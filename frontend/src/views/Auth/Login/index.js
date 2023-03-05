import AuthLayout from '../../../layouts/AuthLayout/index'
import '../../../assets/scss/pages/login.scss'

const Component = () => {
    return (
        <AuthLayout>
            <form className='form-container'>
                <h1>Login</h1>

                <div className="form-outline mb-4">
                    <input type="email" id="form2Example1" className="form-control error" />
                    <label className="form-label" htmlFor="form2Example1">Email</label>
                </div>

                <div className="form-outline mb-4">
                    <input type="password" id="form2Example2" className="form-control" />
                    <label className="form-label" htmlFor="form2Example2">Senha</label>
                </div>

                <div className="row mb-4">
                    <div className="col d-flex justify-content-center">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="form2Example31" checked />
                        <label className="form-check-label" htmlFor="form2Example31"> Remember me </label>
                    </div>
                    </div>

                    <div className="col">
                    <a href="#!">Forgot password?</a>
                    </div>
                </div>

                <button type="button" className="btn btn-primary btn-block mb-4">Logar</button>

                <div className="text-center">
                    <p>Ainda não é um membro? 🤔 <a href="#!">Registre-se</a></p>
                </div>
            </form>
        </AuthLayout>
    )
}

export default Component
