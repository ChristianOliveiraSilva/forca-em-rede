import BlankLayout from '../../layouts/BlankLayout/index'

import Chat from './components/Chat'
import EmptyChat from './components/EmptyChat'
import ContactList from './components/ContactList'

import '../../assets/scss/pages/chat.scss'
import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import api from '../../services/api'
import { toast } from 'react-toastify'
import { getUser } from '../../utility/Utils'

import logo from '../../assets/images/logo.png'

const App = () => {
    const { contactId } = useParams()
    const currentUser = getUser()

    const [msgs, setMsgs] = useState(null)
    const [contacts, setContacts] = useState(null)
    const [selectedContact, setSelectedContact] = useState(null)

    const loadMsgs = async () => {
        if (!contactId) {
            return
        }

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
        loadMsgs()

        const timeout = setInterval(() => {
            loadMsgs()
        }, 3e3)

        return () => clearInterval(timeout)
    }, [contactId])

    const loadContacts = async () => {
        try {
            const { data } = await api.get('chat/contacts')

            if (data.status === true) {
                setContacts(data.data.contacts)
                setSelectedContact(data.data.contacts.find(e => e.user.id === parseInt(contactId)))
            }
        } catch (error) {
            console.error(error)
            toast.error('Erro ao obter post, tente novamente ou contate um administrador')            
        }
    }

    useEffect(() => {
        loadContacts()

        const timeout = setInterval(() => {
            loadContacts()
        }, 3e3)

        return () => clearInterval(timeout)
    }, [contactId])

    const isLoading = contactId ? (!msgs || !contacts || !selectedContact) : !contacts

    if (isLoading) {
        return (
            <BlankLayout>
                <div className='loading-chat-container'>
                    <section>
                        <h2 className='my-5 text-center h1'>Carregando dados</h2>
                        <img src={logo} className='d-block my-5' />
                        <Link to='/app' className="btn my-5">Voltar</Link>
                    </section>
                </div>
            </BlankLayout>
        )
    }

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