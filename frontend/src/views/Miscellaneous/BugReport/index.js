import MiscellaneousLayout from '../../../layouts/MiscellaneousLayout'

const Page = () => {
    return (
        <MiscellaneousLayout>
            <div className="container my-5 py-5">
                <h1>Formulário de Relatório de Bug</h1>

                <section>
                    <div className="form-group">
                        <label for="nome">Nome:</label>
                        <input type="text" className="form-control" id="nome" name="nome" required />
                    </div>

                    <div className="form-group">
                        <label for="email">Email:</label>
                        <input type="email" className="form-control" id="email" name="email" required />
                    </div>

                    <div className="form-group">
                        <label for="link">Link:</label>
                        <input type="url" className="form-control" id="link" name="link" required />
                    </div>

                    <div className="form-group">
                        <label for="descricao">Descrição do Bug:</label>
                        <textarea className="form-control" id="descricao" name="descricao" rows="4" required></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary mt-4">Enviar Relatório</button>
                </section>
            </div>
        </MiscellaneousLayout>
    )
}

export default Page