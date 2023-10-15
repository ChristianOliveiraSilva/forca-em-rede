
const Stage = ({addData}) => {

    const handleChange = (event) => {
        const { name, value } = event.target
        addData(name, value)
    }

    return (
        <>
            <div className="form-outline mb-4">
                <select id="gender-input" className="form-control" name='gender' onChange={handleChange}>
                    <option value="">Selecione uma opção</option>
                    <option value="male">Masculino</option>
                    <option value="femmale">Feminino</option>
                    <option value="other">Outro</option>
                </select>
                <label className="form-label" htmlFor="gender-input">Gênero</label>
                
                <input type="date" id="birthdate-input" className="form-control" placeholder="Data de nascimento" name='birthdate' onChange={handleChange} />
                <label className="form-label" htmlFor="birthdate-input">Data de nascimento</label>
                
                <input id="pronouns-input" className="form-control" placeholder="Pronomes, exemplo: ele/dele" name='pronouns' onChange={handleChange} />
                <label className="form-label" htmlFor="pronouns-input">Pronomes</label>
                
                <input id="address-input" className="form-control" placeholder="Endereço" name='address' onChange={handleChange} />
                <label className="form-label" htmlFor="address-input">Endereço</label>
                
                <input id="city-input" className="form-control" placeholder="Cidade" name='city' onChange={handleChange} />
                <label className="form-label" htmlFor="city-input">Cidade</label>
                
                <input id="state-input" className="form-control" placeholder="Estado" name='state' onChange={handleChange} />
                <label className="form-label" htmlFor="state-input">Estado</label>
            </div>
        </>
    )
}

export default Stage
