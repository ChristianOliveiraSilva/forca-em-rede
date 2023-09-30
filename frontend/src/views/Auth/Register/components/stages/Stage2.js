
const Stage = () => {
    return (
        <>
            <div className="form-outline mb-4">
                <input id="gender-input" className="form-control" placeholder="Gênero" />
                <label className="form-label" htmlFor="gender-input">Gênero</label>
                
                <input id="birthdate-input" className="form-control" placeholder="Data de nascimento" />
                <label className="form-label" htmlFor="birthdate-input">Data de nascimento</label>
                
                <input id="pronouns-input" className="form-control" placeholder="Pronomes" />
                <label className="form-label" htmlFor="pronouns-input">Pronomes</label>
                
                <input id="address-input" className="form-control" placeholder="Endereço" />
                <label className="form-label" htmlFor="address-input">Endereço</label>
                
                <input id="city-input" className="form-control" placeholder="Cidade" />
                <label className="form-label" htmlFor="city-input">Cidade</label>
                
                <input id="state-input" className="form-control" placeholder="Estado" />
                <label className="form-label" htmlFor="state-input">Estado</label>
            </div>
        </>
    )
}

export default Stage
