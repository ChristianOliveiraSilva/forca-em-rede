import MainLayout from '../../../layouts/MainLayout'

import '../../../assets/scss/pages/notification.scss'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import api from '../../../services/api'

const App = () => {
    const [notifications, setNotifications] = useState([])

    const loadNotifications = async () => {
        try {
            const { data } = await api.get('notification')

            if (data.status === true) {
                setNotifications(data.data.notifications)
            } else {
                toast.error('Erro ao capturar as notificações')
            }
        } catch (error) {
            toast.error('Erro ao capturar as notificações')
        }
    }

    useEffect(() => {
        loadNotifications()
        const timeout = setInterval(() => {
            loadNotifications()
        }, 3e3)

        return () => clearInterval(timeout)
    }, [])

    const handleNotificationSeen = async (id) => {
        try {
            const { data } = await api.get(`notification/view/${id}`)

            if (data.status === true) {
                setNotifications(notifications.map(e => (e.id === id ? {...e, seen_at: true} : e)))
            } else {
                toast.error('Erro ao visualizar as notificações')
            }
        } catch (error) {
            toast.error('Erro ao visualizar as notificações')
        }   
    }

    return (
        <MainLayout>
            {notifications.length === 0 ? <p className='my-5 text-muted text-center h1'>Não há notificações</p> : (
                <section className='notification-container'>
                    {notifications.map((e) => (
                        <div className={e.seen_at ? 'item seen' : 'item'} onClick={() => handleNotificationSeen(e.id)}>
                            {e.notification_content}
                        </div>
                    ))}
                </section>
            )}
        </MainLayout>
    )
}

export default App