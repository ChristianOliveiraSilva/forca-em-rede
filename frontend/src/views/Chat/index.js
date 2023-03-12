import BlankLayout from '../../layouts/BlankLayout/index'

import Chat from './components/Chat.js'
import ContactList from './components/ContactList.js'
import Header from './components/Header.js'

import '../../assets/scss/pages/chat.scss'

const App = () => {
    return (
        <BlankLayout>
            <div className='chat-container'>
                <Header />

                <div className='chat-content'>
                    <ContactList />
                    <Chat />
                </div>
            </div>
        </BlankLayout>
    )
}

export default App