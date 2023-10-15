import { useState } from 'react'
import MiscellaneousLayout from '../../../layouts/MiscellaneousLayout'
import api from '../../../services/api'
import { Link } from 'react-router-dom'

const Page = () => {
    const [result, setResult] = useState(null)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [link, setLink] = useState('')
    const [description, setDescription] = useState('')

    const handleSubmit = async () => {
        if ([name, email, link, description].includes('')) {
            return
        }

        try {
            const { data } = await api.post('report/bug', {
                name,
                email,
                link,
                bug: description
            })

            setResult(data.status)
        } catch (error) {
            setResult(false)
        } finally {
            setName('')
            setEmail('')
            setLink('')
            setDescription('')
        }
    }

    if (result === true) {
        return (
            <MiscellaneousLayout>
                <div className="container my-5 py-5">
                    <h2 className='mb-5'>Bug registrado com <span className='text-success'>sucesso</span>!</h2>
                    <Link to='/'>
                        <button className='btn btn-primary'>Voltar para home</button>
                    </Link>
                </div>
            </MiscellaneousLayout>
        )
    }

    if (result === false) {
        return (
            <MiscellaneousLayout>
                <div className="container my-5 py-5">
                    <h2 className='mb-5'>Bug <span className='text-danger'>não foi registrado</span>! Contate um administrador ou tente novamente.</h2>
                    <Link to='/'>
                        <button className='btn btn-primary'>Voltar para home</button>
                    </Link>
                </div>
            </MiscellaneousLayout>
        )        
    }

    return (
        <MiscellaneousLayout>
            <div className="container my-5 py-5">
                <h1>Formulário de Relatório de Bug</h1>

                <section>
                    <div className="form-group">
                        <label htmlFor="nome">Nome:</label>
                        <input type="text" className="form-control" id="nome" name="nome" value={name} onChange={e => setName(e.target.value)} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" className="form-control" id="email" name="email" value={email} onChange={e => setEmail(e.target.value)} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="link">Link:</label>
                        <input type="url" className="form-control" id="link" name="link" value={link} onChange={e => setLink(e.target.value)} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="descricao">Descrição do Bug:</label>
                        <textarea className="form-control" id="descricao" name="descricao" rows="4" value={description} onChange={e => setDescription(e.target.value)}></textarea>
                    </div>

                    <button className="btn btn-primary mt-4" onClick={handleSubmit}>Salvar bug</button>
                </section>
            </div>
        </MiscellaneousLayout>
    )
}

export default Page