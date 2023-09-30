import AuthLayout from '../../../layouts/AuthLayout/index'


const Component = () => {
    return (
        <AuthLayout>
            <form className='form-container'>
                <h1 className='text-light'>Esqueceu a senha?</h1>

                <div className="form-outline mb-4">
                    <input type="email" id="email-input" className="form-control" placeholder="Seu Email" />
                    <label className="form-label" htmlFor="email-input">Seu Email</label>
                </div>

                <button type="button" className="btn btn-primary btn-block mb-4">Resetar</button>

                <div className="text-center text-light">
                    <p>Ainda não é um membro? 💜 <a href="#!">Registre-se</a></p>
                </div>
            </form>
        </AuthLayout>
    )
}

export default Component
