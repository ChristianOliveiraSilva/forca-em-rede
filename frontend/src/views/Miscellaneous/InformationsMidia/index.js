import { useState } from 'react'
import MiscellaneousLayout from '../../../layouts/MiscellaneousLayout'
import api from '../../../services/api'
import { Link } from 'react-router-dom'

const Page = () => {
    const [result, setResult] = useState(null)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [description, setDescription] = useState('')

    const handleSubmit = async () => {
        if ([name, email, subject, description].includes('')) {
            return
        }

        try {
            const { data } = await api.post('report/press/contact', {
                name,
                email,
                subject,
                message: description
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
                    <h2 className='mb-5'>Contato registrado com <span className='text-success'>sucesso</span>!</h2>
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
                    <h2 className='mb-5'>Contato <span className='text-danger'>não foi registrado</span>! Contate um administrador ou tente novamente.</h2>
                    <Link to='/'>
                        <button className='btn btn-primary'>Voltar para home</button>
                    </Link>
                </div>
            </MiscellaneousLayout>
        )        
    }

    return (
        <MiscellaneousLayout>
            <div className='container my-5'>
                <h3>Hey! Esta página é dedicada à Mídia!</h3>
                <p>O objetivo é ajudar a imprensa a nos dilvugar! De uma lida 👇</p>

                <section className='row'>
                    <div className="container col-12 col-md-4 mt-5">
                        <h5>Comunicados de Imprensa</h5>
                        <p className='text-muted'><small>Por enquanto não há Comunicados de Imprensa</small></p>
                    </div>

                    <div className="container col-12 col-md-4 mt-5">
                        <h5>Contatos de Mídia</h5>
                        <p className='text-muted'><small>Por enquanto não há Contatos de Mídia</small></p>
                    </div>

                    <div className="container col-12 col-md-4 mt-5">
                        <h5>Recursos Multimídia</h5>
                        <p className='text-muted'><small>Por enquanto não há Recursos Multimídia</small></p>
                    </div>

                    <div className="container col-12 col-md-4 mt-5">
                        <h5>Informações sobre Nós!</h5>
                        <p>Você pode ler sobre nós <Link to='/about' className='link'>Aqui</Link>!</p>
                    </div>

                    <div className="container col-12 col-md-4 mt-5">
                        <h5>Estatísticas</h5>
                        <p className='text-muted'><small>Como a plataforma está em seu inicio não há Estatísticas ainda 😉📉</small></p>
                    </div>

                    <div className="container col-12 col-md-4 mt-5">
                        <h5>Materiais Adicionais</h5>
                        <p className='text-muted'><small>Por enquanto não há Materiais Adicionais</small></p>
                    </div>

                    <div className="container col-12 col-md-4 mt-5">
                        <h5>Links de Redes Sociais</h5>
                        
                    </div>

                    <div className="container col-12 col-md-4 mt-5">
                        <h5>Informações de Eventos</h5>
                        <p className='text-muted'><small>Ainda não há Eventos confirmados! A plataforma suporta os usuários criarem eventos, de uma olhada!</small></p>
                    </div>

                    <div className="container col-12 col-md-4 mt-5">
                        <h5>FAQ para a Mídia</h5>
                        <p className='text-muted'><small>Em construção ⚙️⚙️</small></p>
                    </div>

                    <div className="container col-12 col-md-4 mt-5">
                        <h5>Políticas de Uso de Conteúdo</h5>
                        <p className='text-muted'><small>Por enquanto não há Políticas de Uso de Conteúdo</small></p>
                    </div>

                    <div className="container col-12 col-md-4 mt-5">
                        <h5>Links Relacionados</h5>
                        <p className='text-muted'><small>Por enquanto não há Links Relacionados</small></p>
                    </div>
                </section>

                <div className="container mt-5">
                    <h5>Formulário de Contato para a Mídia</h5>
                    <section>
                        <div className="mb-3">
                            <label htmlFor="nome" className="form-label">Nome:</label>
                            <input type="text" className="form-control" id="nome" name="nome" value={name} onChange={e => setName(e.target.value)} />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Endereço de E-mail:</label>
                            <input type="email" className="form-control" id="email" name="email" value={email} onChange={e => setEmail(e.target.value)} />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="assunto" className="form-label">Assunto:</label>
                            <input type="text" className="form-control" id="assunto" name="assunto" value={subject} onChange={e => setSubject(e.target.value)} />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="mensagem" className="form-label">Mensagem:</label>
                            <textarea className="form-control" id="mensagem" name="mensagem" rows="4" value={description} onChange={e => setDescription(e.target.value)}></textarea>
                        </div>

                        <button className="btn btn-primary" onClick={handleSubmit}>Enviar</button>
                    </section>
                </div>

            </div>
        </MiscellaneousLayout>
    )
}

export default Page