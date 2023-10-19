import { Link } from "react-router-dom"
import { getUser } from "../../../utility/Utils"
import { useState } from "react"
import { toast } from "react-toastify"
import api from "../../../services/api"

const Chat = ({selectedContact, msgs, loadMsgs}) => {
    const currentUser = getUser()

    const [msg, setMsg] = useState('')

    const handleSendMessage = async () => {
        try {
            const { data } = await api.post('chat/message', {
                receiver_id: selectedContact.user.id,
                message_content: msg
            })

            if (data.status === true) {
                loadMsgs()
            } else {
                toast.error('Erro ao enviar mensagem')            
            }
        } catch (error) {
            console.error(error)
            toast.error('Erro ao enviar mensagem')            
        } finally {
            setMsg('')
        }        
    }

    return (
        <section className='chat-display-container'>
            <section className='header-chat-display-container'>
                <img src={selectedContact.user.picture} className='contact-image' />
                <h1 className='contact-name'>{selectedContact.user.name}</h1>

                <Link to='/chat'>
                    <button className="btn">Voltar</button>
                </Link>
            </section>

            <section className="chat-display">
                {msgs.length === 0 && <p className="my-5 text-muted text-center">Nenhuma mensagem disponível</p>}
                {msgs.map(
                    (e) => (
                        <div className={e.sender_id === currentUser.id ? "chat-dialog me" : "chat-dialog to"} key={e.id}>
                            {e.message_content}
                        </div>
                    )
                )}
            </section>

            <footer className="chat-footer">
                <textarea placeholder="Envie sua mensagem" value={msg} onChange={e => setMsg(e.target.value)}></textarea>

                <div className="row align-items-center">
                    <div className="col">
                        {/* <p className="text-muted">Anexar</p> */}
                    </div>
                    <div className="col">
                        <button type="button" onClick={handleSendMessage}>
                            Enviar mensagem
                        </button>
                    </div>
                </div>
            </footer>
        </section>
    )
}

export default Chat