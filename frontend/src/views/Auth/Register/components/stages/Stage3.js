
const Stage = () => {
    return (
        <>
            <div className="form-outline mb-4">
                <input type="text" id="job-input" className="form-control" placeholder="Profissão" />
                <label className="form-label" htmlFor="job-input">Profissão</label>

                <input type="text" id="workplace-input" className="form-control" placeholder="Local de trabalho" />
                <label className="form-label" htmlFor="workplace-input">Local de trabalho</label>

                <input type="text" id="cpf-input" className="form-control" placeholder="CPF" />
                <label className="form-label" htmlFor="cpf-input">CPF</label>

                <input type="text" id="rg-input" className="form-control" placeholder="RG" />
                <label className="form-label" htmlFor="rg-input">RG</label>
            </div>
        </>
    )
}

export default Stage
