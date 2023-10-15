import { useState } from "react"

const Stage = ({addData}) => {

    const [stage, setStage] = useState(false)

    const handleChange = (event) => {
        const { name, value } = event.target
        addData(name, value)
    }

    const handleStage = (event) => {
        setStage(event.target.value)
    }
    
    return (
        <>
            <div className="form-outline mb-4">
                <select id="stage-input" className="form-control" onChange={handleStage}>
                    <option value="">Selecione a opção que te classifica</option>
                    <option value="disease">Estou com cancêr</option>
                    <option value="other">Eu apenas quero participar da comunidade</option>
                </select>
                <label className="form-label" htmlFor="stage-input">Quem é você na plataforma?</label>
                
                {stage === "disease" && (
                    <>
                        <input type="text" id="disease-input" className="form-control" placeholder="Câncer que Enfrenta" name='disease' onChange={handleChange} />
                        <label className="form-label" htmlFor="disease-input">Câncer que Enfrenta</label>
                        
                        <input type="text" id="stage-input" className="form-control" placeholder="Estágio" name='stage' onChange={handleChange} />
                        <label className="form-label" htmlFor="stage-input">Estágio</label>
                        
                        <input type="text" id="place_treatment-input" className="form-control" placeholder="Local de tratamento" name='place_treatment' onChange={handleChange} />
                        <label className="form-label" htmlFor="place_treatment-input">Local de tratamento</label>
                    </>
                )}
                
                {stage === "other" && (
                    <>
                        <h5 className="my-5 py-5">Okay, tudo certo por aqui 👇 Faça seu cadastro agora</h5>
                    </>
                )}
            </div>
        </>
    )
}

export default Stage
