import BlankLayout from '../../layouts/BlankLayout/index'

import Chat from './components/Chat.js'
import ContactList from './components/ContactList.js'

import '../../assets/scss/pages/chat.scss'
import { useParams } from 'react-router-dom'

const App = () => {
    const { contactId } = useParams()


    return (
        <BlankLayout>
            <div className='chat-container'>
                <ContactList />
                {contactId && <Chat />}
            </div>
        </BlankLayout>
    )
}

export default App