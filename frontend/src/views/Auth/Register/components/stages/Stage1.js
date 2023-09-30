
const Stage = () => {
    return (
        <>
            <div className="form-outline mb-4">
                <input id="social-name-input" className="form-control" placeholder="Seu nome social" />
                <label className="form-label" htmlFor="social-name-input">Seu nome social</label>

                <input id="name-input" className="form-control" placeholder="Seu nome" />
                <label className="form-label" htmlFor="name-input">Seu nome</label>

                <input id="username-input" className="form-control" placeholder="Username" />
                <label className="form-label" htmlFor="username-input">Username</label>
                
                <input type="email" id="email-input" className="form-control" placeholder="Seu email" />
                <label className="form-label" htmlFor="email-input">Seu email</label>
                
                <input id="password-input" className="form-control" placeholder="Sua senha" />
                <label type="password" className="form-label" htmlFor="password-input">Sua senha</label>
                
                <input id="confirm-password-input" className="form-control" placeholder="Confirme sua senha" />
                <label type="password" className="form-label" htmlFor="confirm-password-input">Confirme sua senha</label>
                
                <input type="tel"  id="phone-input" className="form-control" placeholder="Seu telefone" />
                <label className="form-label" htmlFor="phone-input">Seu telefone</label>
            </div>
        </>
    )
}

export default Stage
