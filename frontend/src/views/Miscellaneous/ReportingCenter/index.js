import MiscellaneousLayout from '../../../layouts/MiscellaneousLayout'

const Page = () => {
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
                        <label for="nome">Seu Nome <sub>(opcional / sem será registrado como anônimo)</sub></label>
                        <input type="text" className="form-control" id="nome" name="nome" />
                    </div>

                    <div className="form-group">
                        <label for="email">Email <sub>(opcional)</sub></label>
                        <input type="email" className="form-control" id="email" name="email" />
                    </div>

                    <div className="form-group">
                        <label for="link">Link da postagem ou do perfil</label>
                        <input type="url" className="form-control" id="link" name="link" required />
                    </div>

                    <div className="form-group">
                        <label for="descricao">Descrição do ato</label>
                        <textarea className="form-control" id="descricao" name="descricao" rows="4" required></textarea>
                    </div>

                    <div className='row my-4 align-items-center'>
                        <div className='col'>
                            <button type="submit" className="btn btn-primary mt-4">Enviar Relatório</button>
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