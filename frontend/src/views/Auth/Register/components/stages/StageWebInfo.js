import { useState } from "react"

const Stage = ({addData}) => {

    const handleChange = (event) => {
        const { name, value } = event.target
        addData(name, value)
    }

    return (
        <>
            <div className="form-outline mb-4">
                <input id="username-input" className="form-control" placeholder="Username" name='username' onChange={handleChange} />
                <label className="form-label" htmlFor="username-input">Username</label>
                
                <input type="email" id="email-input" className="form-control" placeholder="Seu email" name='email' onChange={handleChange} />
                <label className="form-label" htmlFor="email-input">Seu email</label>
                
                <input id="password-input" className="form-control" placeholder="Sua senha" name='password' onChange={handleChange} />
                <label type="password" className="form-label" htmlFor="password-input">Sua senha</label>
                
                <input id="confirm-password-input" className="form-control" placeholder="Confirme sua senha" />
                <label type="password" className="form-label" htmlFor="confirm-password-input">Confirme sua senha</label>
            </div>
        </>
    )
}

export default Stage
