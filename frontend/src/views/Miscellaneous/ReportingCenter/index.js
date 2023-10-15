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
        if (link === '' || description === '') {
            return
        }

        try {
            const { data } = await api.post('report/complaint', {
                name,
                email,
                link,
                complaint: description
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
                    <h2 className='mb-5'>Denúncia registrado com <span className='text-success'>sucesso</span>!</h2>
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
                    <h2 className='mb-5'>Denúncia <span className='text-danger'>não foi registrada</span>! Contate um administrador ou tente novamente.</h2>
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
                <h1>Central de Denúncias</h1>
                <p className='mb-5'>
                    Se você deseja fazer uma denúncia sobre algum usuário ou postagem, por favor, esteja ciente do que constitui abuso das regras da plataforma.
                    Certifique-se de fornecer informações precisas e relevantes ao fazer sua denúncia, para que as medidas apropriadas possam ser tomadas.
                    A segurança e o bem-estar de nossa comunidade online são fundamentais, e sua colaboração é valiosa para mantermos um ambiente seguro para todos os usuários.
                </p>

                <section>
                    <div className="form-group">
                        <label htmlFor="name">Seu Nome <sub>(opcional / sem será registrado como anônimo)</sub></label>
                        <input type="text" className="form-control" id="name" name="name" value={name} onChange={e => setName(e.target.value)} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email <sub>(opcional)</sub></label>
                        <input type="email" className="form-control" id="email" name="email" value={email} onChange={e => setEmail(e.target.value)} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="link">Link da postagem ou do perfil</label>
                        <input type="url" className="form-control" id="link" name="link" value={link} onChange={e => setLink(e.target.value)} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="description">Descrição do ato</label>
                        <textarea className="form-control" id="description" name="description" rows="4" value={description} onChange={e => setDescription(e.target.value)} ></textarea>
                    </div>

                    <div className='row my-4 align-items-center'>
                        <div className='col'>
                            <button className="btn btn-primary mt-4" onClick={handleSubmit}>Enviar Relatório</button>
                        </div>
                        <div className='col-9 pt-2 text-end text-muted small'>
                            <p>Ao enviar sua denúncia, garantimos que ela será processada o mais rapidamente possível.</p>
                            <p>Agradecemos por sua colaboração em manter nossa plataforma coesa e segura 🙏</p>
                        </div>
                    </div>
                </section>
            </div>
        </MiscellaneousLayout>
    )
}

export default Page