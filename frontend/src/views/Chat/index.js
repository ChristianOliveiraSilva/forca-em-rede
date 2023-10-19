import BlankLayout from '../../layouts/BlankLayout/index'

import Chat from './components/Chat'
import EmptyChat from './components/EmptyChat'
import ContactList from './components/ContactList'

import '../../assets/scss/pages/chat.scss'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import api from '../../services/api'
import { toast } from 'react-toastify'
import { getUser } from '../../utility/Utils'

const App = () => {
    const { contactId } = useParams()
    const currentUser = getUser()

    const [msgs, setMsgs] = useState([])
    const [contacts, setContacts] = useState([])
    const [selectedContact, setSelectedContact] = useState([])

    const loadMsgs = async () => {
        try {
            const { data } = await api.get(`chat/${contactId}`)

            if (data.status === true) {
                setMsgs(data.data.chat)
            } else {
                toast.error('Erro ao carregar chat')
            }
        } catch (error) {
            toast.error('Erro ao carregar chat')            
        }
    }

    useEffect(() => {
        if (contactId) {
            const timeout = setInterval(() => {
                loadMsgs()
            }, 3e3)

            return () => clearInterval(timeout)
        }
    }, [])

    const loadContacts = async () => {
        try {
            const { data } = await api.get('user')

            if (data.status === true) {
                setContacts(data.data.users.filter(e => e.id !== currentUser.id))
                setSelectedContact(data.data.users.find(e => e.id === parseInt(contactId)))
            }
        } catch (error) {
            console.error(error)
            toast.error('Erro ao obter post, tente novamente ou contate um administrador')            
        }
    }

    useEffect(() => {
        loadContacts()
    }, [])

    return (
        <BlankLayout>
            <div className='chat-container'>
                <ContactList contactId={contactId} contacts={contacts} />
                {contactId && <Chat selectedContact={selectedContact} msgs={msgs} loadMsgs={loadMsgs} />}
                {!contactId && <EmptyChat />}
            </div>
        </BlankLayout>
    )
}

export default App