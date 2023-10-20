import { useEffect, useState } from 'react'
import Header from './Header.js'
import { Link } from 'react-router-dom'

const ContactList = ({contactId, contacts}) => {
    return (
        <section className='contact-left-container'>
            <Header />

            <section className='contact-list-container'>
                {
                    contacts.map((e) => (
                        <Link key={e.user.id} to={`/chat/${e.user.id}`}>
                            <div className={parseInt(contactId) === e.user.id ? 'contact-item active' : 'contact-item'}>
                                <div>
                                    <img src={process.env.REACT_APP_MEDIA_URL + e.user.picture} className='contact-image' />
                                </div>

                                <div style={{width: '100%'}}>
                                    <p className='last-msg-time'>{e.last_message.created_at}</p>
                                    <h1 className='contact-name'>{e.user.name}</h1>
                                    <p className='last-msg'>{e.last_message.message_content}</p>
                                    <span className='unread-messages-count'>{e.unread_messages_count}</span>
                                </div>
                            </div>
                        </Link>
                    )
                    )
                }
            </section>
        </section>
    )
}

export default ContactList