import { useEffect, useState } from 'react'
import Header from './Header.js'
import Search from './Search.js'
import { Link } from 'react-router-dom'

const img = 'https://cdn.dribbble.com/userupload/9619888/file/original-d6fc509aa31f6336e53ec5da5813adea.png?resize=752x564&vertical=center'

const ContactList = ({contactId, contacts}) => {

    return (
        <section className='contact-left-container'>
            <Header />
            <Search />

            <section className='contact-list-container'>
                {
                    contacts.map((e, i) => (
                        <Link key={e.id} to={`/chat/${e.id}`}>
                            <div className={parseInt(contactId) === e.id ? 'contact-item active' : 'contact-item'}>
                                <div>
                                    <img src={e.picture} className='contact-image' />
                                </div>

                                <div style={{width: '100%'}}>
                                    <p className='last-msg-time'>12d</p>
                                    <h1 className='contact-name'>{e.name}</h1>
                                    <p className='last-msg'>Lorem Lorem Lorem Lorem Lorem </p>
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </section>
        </section>
    )
}

export default ContactList