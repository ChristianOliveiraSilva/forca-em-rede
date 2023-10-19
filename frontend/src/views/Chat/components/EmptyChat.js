import { Link } from "react-router-dom"

import logo from '../../../assets/images/logo.png'

const Chat = () => {
    return (
        <section className='empty-chat-container'>
            <section className='empty-chat-items-container'>
                <img src={logo} className='contact-image' />
                <h1 className='contact-name'>Selecione um contato</h1>
                <Link to='/app' className="btn">Voltar</Link>
            </section>
        </section>
    )
}

export default Chat