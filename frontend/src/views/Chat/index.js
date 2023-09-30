import BlankLayout from '../../layouts/BlankLayout/index'

import Chat from './components/Chat.js'
import ContactList from './components/ContactList.js'

import '../../assets/scss/pages/chat.scss'

const App = () => {
    return (
        <BlankLayout>
            <div className='chat-container'>
                <ContactList />
                <Chat />
            </div>
        </BlankLayout>
    )
}

export default App