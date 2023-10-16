
const img = 'http://localhost/media/anonimo.webp'

const Chat = () => {
    return (
        <section className='chat-display-container'>
            <section className='header-chat-display-container'>
                <img src={img} className='contact-image' />
                <h1 className='contact-name'>Nome do Contato</h1>

                <button className="btn">Voltar</button>
            </section>

            <section className="chat-display">
                <div className="chat-dialog me">Olá</div>
                <div className="chat-dialog to">Olá tudo bem?</div>

                {(new Array(10)).fill(1).map(
                    (e, i) => (
                        <div className={i % 2 !== 0 ? "chat-dialog to" : "chat-dialog me"} key={i}>
                            Comentário em si
                        </div>
                    )
                )}
            </section>

            <footer className="chat-footer">
                <textarea placeholder="Envie sua mensagem"></textarea>

                <div className="row align-items-center">
                    <div className="col">
                        <p className="text-muted">Anexar</p>
                    </div>
                    <div className="col">
                        <button type="button">
                            Enviar mensagem
                        </button>
                    </div>
                </div>
            </footer>
        </section>
    )
}

export default Chat