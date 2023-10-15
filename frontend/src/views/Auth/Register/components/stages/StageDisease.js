
const Stage = ({addData}) => {

    const handleChange = (event) => {
        const { name, value } = event.target
        addData(name, value)
    }
    
    return (
        <>
            <div className="form-outline mb-4">
                <input type="text" id="disease-input" className="form-control" placeholder="Câncer que Enfrenta" name='disease' onChange={handleChange} />
                <label className="form-label" htmlFor="disease-input">Câncer que Enfrenta</label>
                
                <input type="text" id="stage-input" className="form-control" placeholder="Estágio" name='stage' onChange={handleChange} />
                <label className="form-label" htmlFor="stage-input">Estágio</label>
                
                <input type="text" id="place_treatment-input" className="form-control" placeholder="Local de tratamento" name='place_treatment' onChange={handleChange} />
                <label className="form-label" htmlFor="place_treatment-input">Local de tratamento</label>
            </div>
        </>
    )
}

export default Stage
