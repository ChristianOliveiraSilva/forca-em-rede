import Header from './Header.js'

const img = 'https://cdn.dribbble.com/userupload/9619888/file/original-d6fc509aa31f6336e53ec5da5813adea.png?resize=752x564&vertical=center'

const ContactList = () => {
    return (
        <section className='contact-left-container'>
            <Header />

            <section className='contact-list-container'>
                {
                    new Array(10).fill(1).map((e, i) => (
                        <div className={i === 0 ? 'contact-item active' : 'contact-item'} key={i}>
                            <div>
                                <img src={img} className='contact-image' />
                            </div>

                            <div style={{width: '100%'}}>
                                <p className='last-msg-time'>12d</p>
                                <h1 className='contact-name'>Contato {i + 1}</h1>
                                <p className='last-msg'>Lorem Lorem Lorem Lorem Lorem </p>
                            </div>
                        </div>
                    ))
                }
            </section>
        </section>
    )
}

export default ContactList