import Card from 'react-bootstrap/Card'

const Contacts = (props) => {
    return (
        <div className="contacts-container">
            <Card>
                <Card.Body>
                    <h2>Contacts</h2>

                    {(new Array(1e3)).fill(1).map(
                        (e, i) => <p>Pessoa {i + 1}</p>
                    )}
                </Card.Body>
            </Card>
        </div>
    )
}

export default Contacts