
const Chat = () => {
    return (
        <section className='chat-display-container'>
            <p>Chat</p>
            <hr />

            <section className="chat-display">
                <div className="chat-dialog me">Olá</div>
                <div className="chat-dialog to">Olá tudo bem?</div>

                {(new Array(1e3)).fill(1).map(
                    (e, i) => (
                        <div className={i % 2 !== 0 ? "chat-dialog to" : "chat-dialog me"} key={i}>
                            Comentário em si
                        </div>
                    )
                )}
            </section>

            <footer className="chat-footer">
                <input />
                <button type="button">OK</button>
            </footer>
        </section>
    )
}

export default Chat