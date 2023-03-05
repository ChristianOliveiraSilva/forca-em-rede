import { useState } from 'react'

const Component = () => {
    const [fail, setFail] = useState(false)

    const setFailure = () => {
        setFail(true)
    }

    return (
        <>
            <h1>Confirme seu e-mail</h1>

            {fail && <p className='text-danger'>Falha ao verificar seu e-mail, por favor tente novamente</p>}

            <div className="form-outline mb-4">
                <input type="text" id="form2Example1" className="form-control" />
                <label className="form-label" htmlFor="form2Example1">Qual foi o código enviado no seu e-email?</label>
            </div>

            <button type="button" className="btn btn-primary btn-block mb-4">Confirmar</button>

            <div className="text-center">
                <p>Ainda não é um membro? 🤔 <a href="#!">Registre-se</a></p>
            </div>
        </>
    )
}

export default Component
