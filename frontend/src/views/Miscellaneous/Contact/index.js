import { Link } from 'react-router-dom'
import MiscellaneousLayout from '../../../layouts/MiscellaneousLayout'

const Page = () => {
    return (
        <MiscellaneousLayout>
            <div className='container my-5'>
                <h3>Formulário de Contato</h3>
                <p>Entre em contato conosco por aqui! Você também pode nos procurar em nossas redes sociais!</p>

                <div class="container mt-5">
                    <section>
                        <div class="mb-3">
                            <label for="nome" class="form-label">Nome:</label>
                            <input type="text" class="form-control" id="nome" name="nome" required />
                        </div>

                        <div class="mb-3">
                            <label for="email" class="form-label">Endereço de E-mail:</label>
                            <input type="email" class="form-control" id="email" name="email" required />
                        </div>

                        <div class="mb-3">
                            <label for="assunto" class="form-label">Assunto:</label>
                            <input type="text" class="form-control" id="assunto" name="assunto" required />
                        </div>

                        <div class="mb-3">
                            <label for="mensagem" class="form-label">Mensagem:</label>
                            <textarea class="form-control" id="mensagem" name="mensagem" rows="4" required></textarea>
                        </div>

                        <button type="submit" class="btn btn-primary">Enviar</button>
                    </section>
                </div>

            </div>
        </MiscellaneousLayout>
    )
}

export default Page