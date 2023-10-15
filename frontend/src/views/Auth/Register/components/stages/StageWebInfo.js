import { useState } from "react"

const Stage = ({addData}) => {

    const [password, setPassword] = useState('')
    const [confirm, setConfirm] = useState('')

    const [error, setError] = useState('')

    const handleChange = (event) => {
        const { name, value } = event.target
        addData(name, value)
    }

    const handlePassword = (event) => {
        const { value } = event.target

        setPassword(value)
        handleChange(event)
    }

    const handleConfirmPassword = (event) => {
        const { value } = event.target
        setConfirm(value)

        if (password === value) {
            setError('')
        } else {
            setError('As senhas estão diferentes')
        }
    }

    return (
        <>
            <div className="form-outline mb-4">
                <input id="username-input" className="form-control" placeholder="Username" name='username' onChange={handleChange} />
                <label className="form-label" htmlFor="username-input">Username</label>
                
                <input type="email" id="email-input" className="form-control" placeholder="Seu email" name='email' onChange={handleChange} />
                <label className="form-label" htmlFor="email-input">Seu email</label>
                
                <input id="password-input" className="form-control" placeholder="Sua senha" name='password' value={password} onChange={handlePassword} />
                <label type="password" className="form-label" htmlFor="password-input">Sua senha</label>
                
                <input id="confirm-password-input" className="form-control" placeholder="Confirme sua senha" value={confirm} onChange={handleConfirmPassword} />
                <label type="password" className="form-label" htmlFor="confirm-password-input">Confirme sua senha</label>

                {error && <p className="error-text">{error}</p>}
            </div>
        </>
    )
}

export default Stage
