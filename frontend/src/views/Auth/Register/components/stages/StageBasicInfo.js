import { useState } from "react"

const Stage = ({addData}) => {

    const [useSocialName, setUseSocialName] = useState(false)

    const handleChange = (event) => {
        const { name, value } = event.target
        addData(name, value)
    }

    return (
        <>
            <div className="form-outline mb-4">

                <input id="name-input" className="form-control" placeholder="Seu nome" name='name' onChange={handleChange} />
                <label className="form-label" htmlFor="name-input">Seu nome</label>

                <div className="checkbox-container">
                    <input type="checkbox" id="social-name-checkbox" value={useSocialName} onChange={e => setUseSocialName(e.target.checked)} />
                    <label htmlFor="social-name-checkbox">Possuo nome social 🤗</label>
                </div>

                {useSocialName && (
                    <>
                        <input id="social-name-input" className="form-control" placeholder="Seu nome social" name='socialName' onChange={handleChange} />
                        <label className="form-label" htmlFor="social-name-input">Seu nome social</label>
                    </>
                )}
                
                <input type="tel"  id="phone-input" className="form-control" placeholder="Seu telefone" name='phone' onChange={handleChange} />
                <label className="form-label" htmlFor="phone-input">Seu telefone</label>
            </div>
        </>
    )
}

export default Stage
