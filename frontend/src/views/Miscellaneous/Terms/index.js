import MiscellaneousLayout from '../../../layouts/MiscellaneousLayout'

import '../../../assets/scss/pages/terms.scss'
import logo from '../../../assets/images/logo.svg'


const Page = () => {
    return (
        <MiscellaneousLayout>
            <div className='terms-container container my-5 py-5'>
                <h1>Termos de Uso da Rede Social Força em Rede</h1>

                <p className='my-3'><small>Última atualização: 30 de setembro de 2023</small></p>

                <p className='my-3'>
                    Bem-vindo à nossa Rede Social de Combate ao Câncer! Estamos felizes por você se juntar a nós nesta missão importante de apoiar aqueles que lutam contra o câncer e promover a conscientização sobre esta doença. Antes de começar a usar nossa plataforma, pedimos que você leia atentamente e concorde com os seguintes termos de uso. Eles definem as regras e diretrizes para a sua participação em nossa comunidade.
                </p>
                
                <h6 className="my-4">1. Aceitação dos Termos de Uso</h6>
                <p>Ao acessar ou usar nossa plataforma, você concorda em cumprir estes Termos de Uso e nossa Política de Privacidade. Se você não concordar com qualquer parte destes termos, não poderá usar nossos serviços.</p>

                <h6 className="my-4">2. Elegibilidade</h6>
                <p>Nosso compromisso é criar uma comunidade acessível e inclusiva. Portanto, qualquer pessoa pode utilizar nossos serviços, independentemente da idade. No entanto, se você tiver menos de 18 anos, solicitamos que obtenha a permissão de seus pais ou responsáveis legais antes de utilizar nossa plataforma. Valorizamos a segurança e bem-estar dos nossos usuários mais jovens e encorajamos a participação ativa dos pais na experiência online de seus filhos.</p>

                <h6 className="my-4">3. Responsabilidade pelo Conteúdo</h6>
                <p>Você é o único responsável pelo conteúdo que compartilha em nossa plataforma. Não é permitido publicar, enviar ou transmitir conteúdo que seja difamatório, ilegal, abusivo, ameaçador, ofensivo, obsceno, discriminatório ou de qualquer outra forma inadequado.</p>

                <h6 className="my-4">4. Respeito e Empatia</h6>
                <p>Nossa comunidade é dedicada ao combate ao câncer e ao apoio aos afetados por ele. Portanto, esperamos que todos os membros se comportem de maneira respeitosa e empática. Qualquer forma de assédio, bullying, discriminação ou comportamento prejudicial não será tolerada.</p>

                <h6 className="my-4">5. Privacidade</h6>
                <p>Respeitamos profundamente sua privacidade e valorizamos a confiança que você deposita em nós ao usar nossa plataforma. Estamos em conformidade com a Lei Geral de Proteção de Dados (LGPD) e adotamos medidas rigorosas para garantir a segurança e a privacidade dos dados pessoais que você compartilha conosco. Nossa Política de Privacidade detalha como suas informações são coletadas, usadas e protegidas. Seu bem-estar digital e a segurança de suas informações são nossa prioridade. Estamos dedicados a proporcionar a você uma experiência online segura e confiável. Caso tenha alguma dúvida sobre como tratamos seus dados, sinta-se à vontade para entrar em contato conosco.</p>

                <h6 className="my-4">6. Conteúdo Médico</h6>
                <p>É importante destacar que não fornecemos aconselhamento médico ou prescrição de medicamentos. As informações compartilhadas na plataforma não substituem o conselho de um profissional de saúde qualificado. Consulte sempre um médico ou especialista para orientação médica.
                    No entanto, reconhecemos a importância vital de informações precisas sobre o câncer. Estamos comprometidos em oferecer um espaço onde você possa acessar dados confiáveis e informações de especialistas qualificados. Valorizamos a voz dos profissionais de saúde, pesquisadores e especialistas no campo do câncer. Estamos abertos a fornecer um espaço de destaque para eles compartilharem seus conhecimentos, pesquisas e descobertas. Acreditamos que ao facilitar o acesso a informações fundamentadas, podemos contribuir significativamente para a conscientização e a compreensão do câncer.</p>

                <h6 className="my-4">7. Segurança da Conta</h6>
                <p>Você é responsável por manter a segurança de sua conta. Não compartilhe sua senha e informe-nos imediatamente caso detecte qualquer atividade não autorizada em sua conta.
                    Para garantir a segurança da sua conta e proteger suas informações, solicitamos que você verifique tanto seu endereço de e-mail quanto o número de telefone associado à sua conta durante o uso da plataforma. A verificação de e-mail e telefone é uma camada adicional de segurança que ajuda a proteger sua conta contra atividades não autorizadas. Ao garantir que suas informações de contato estejam verificadas, podemos oferecer uma experiência mais segura e personalizada enquanto você faz parte da nossa comunidade de combate ao câncer.</p>

                <h6 className="my-4">8. Encerramento da Conta</h6>
                <p>Reservamos o direito de encerrar ou suspender sua conta, a nosso critério, se violar estes Termos de Uso ou se considerarmos que sua conduta é prejudicial para a comunidade.
                    Você tem total controle sobre sua participação nesta comunidade. Se em algum momento decidir encerrar sua conta, você pode fazê-lo à vontade. Ao solicitar o encerramento da sua conta, todos os dados associados a ela serão apagados permanentemente, garantindo sua privacidade e segurança. Queremos assegurar que sua experiência em nossa plataforma seja totalmente voluntária e que você tenha o poder de decidir quando e como participar.</p>

                <h6 className="my-4">9. Alterações nos Termos</h6>
                <p>Podemos atualizar estes Termos de Uso periodicamente. Sempre que isso acontecer, notificaremos você e você terá a oportunidade de revisar e aceitar os novos termos via e-mail e SMS.</p>

                <h6 className="my-4">10. Contato</h6>
                <p>
                    Se tiver alguma dúvida ou preocupação sobre estes Termos de Uso, entre em contato conosco através de nossos canais de suporte.
                    Agradecemos por se juntar à nossa Rede Social de Combate ao Câncer. Juntos, podemos fazer a diferença na vida daqueles que enfrentam essa doença.
                </p>

                <img src={logo} className='d-block m-auto' alt='Logo da Força em rede' title='Logo da Força em rede' />
            </div>
        </MiscellaneousLayout>
    )
}

export default Page