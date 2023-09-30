import { Link } from 'react-router-dom'
import MiscellaneousLayout from '../../../layouts/MiscellaneousLayout'

const Page = () => {
    return (
        <MiscellaneousLayout>
            <div className='container my-5'>
                <h3>Hey! Esta página é dedicada à Mídia!</h3>
                <p>O objetivo é ajudar a imprensa a nos dilvugar! De uma lida 👇</p>

                <section className='row'>
                    <div class="container col-4 mt-5">
                        <h5>Comunicados de Imprensa</h5>
                        <p className='text-muted'><small>Por enquanto não há Comunicados de Imprensa</small></p>
                    </div>

                    <div class="container col-4 mt-5">
                        <h5>Contatos de Mídia</h5>
                        <p className='text-muted'><small>Por enquanto não há Contatos de Mídia</small></p>
                    </div>

                    <div class="container col-4 mt-5">
                        <h5>Recursos Multimídia</h5>
                        <p className='text-muted'><small>Por enquanto não há Recursos Multimídia</small></p>
                    </div>

                    <div class="container col-4 mt-5">
                        <h5>Informações sobre Nós!</h5>
                        <p>Você pode ler sobre nós <Link to='/about' className='link'>Aqui</Link>!</p>
                    </div>

                    <div class="container col-4 mt-5">
                        <h5>Estatísticas</h5>
                        <p className='text-muted'><small>Como a plataforma está em seu inicio não há Estatísticas ainda 😉📉</small></p>
                    </div>

                    <div class="container col-4 mt-5">
                        <h5>Materiais Adicionais</h5>
                        <p className='text-muted'><small>Por enquanto não há Materiais Adicionais</small></p>
                    </div>

                    <div class="container col-4 mt-5">
                        <h5>Links de Redes Sociais</h5>
                        
                    </div>

                    <div class="container col-4 mt-5">
                        <h5>Informações de Eventos</h5>
                        <p className='text-muted'><small>Ainda não há Eventos confirmados! A plataforma suporta os usuários criarem eventos, de uma olhada!</small></p>
                    </div>

                    <div class="container col-4 mt-5">
                        <h5>FAQ para a Mídia</h5>
                        <p className='text-muted'><small>Em construção ⚙️⚙️</small></p>
                    </div>

                    <div class="container col-4 mt-5">
                        <h5>Políticas de Uso de Conteúdo</h5>
                        <p className='text-muted'><small>Por enquanto não há Políticas de Uso de Conteúdo</small></p>
                    </div>

                    <div class="container col-4 mt-5">
                        <h5>Links Relacionados</h5>
                        <p className='text-muted'><small>Por enquanto não há Links Relacionados</small></p>
                    </div>
                </section>

                <div class="container mt-5">
                    <h5>Formulário de Contato para a Mídia</h5>
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