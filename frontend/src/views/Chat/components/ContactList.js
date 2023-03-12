
const ContactList = () => {
    return (
        <section className='contect-list-container'>
            <p>Lista de Contatos</p>
            <hr />
            {
                new Array(1e3).fill(1).map((e, i) => (
                    <div className='contact-item' key={i}>
                        <p>Contato {i + 1}</p>
                    </div>
                ))
            }
        </section>
    )
}

export default ContactList