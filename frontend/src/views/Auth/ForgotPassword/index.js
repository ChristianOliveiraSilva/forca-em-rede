import AuthLayout from '../../../layouts/AuthLayout/index'


const Component = () => {
    return (
        <AuthLayout>
            <form className='form-container'>
                <h1>Esqueceu a senha?</h1>

                <div className="form-outline mb-4">
                    <input type="email" id="form2Example1" className="form-control" />
                    <label className="form-label" htmlFor="form2Example1">Seu Email</label>
                </div>

                <button type="button" className="btn btn-primary btn-block mb-4">Resetar</button>

                <div className="text-center">
                    <p>Ainda não é um membro? 💜 <a href="#!">Registre-se</a></p>
                </div>
            </form>
        </AuthLayout>
    )
}

export default Component
