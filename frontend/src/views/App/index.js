import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'

import '../../assets/scss/pages/app.scss'

const HeaderApp = () => {
    return (
        <Card>
            <Card.Body>
                <h1>Hello app</h1>
            </Card.Body>
        </Card>
    )
}

const PostsComponent = () => {
    const totalComments = 2e1

    return (
        <Card className='my-3 post-container'>
            <Card.Body>
                <h3>Título</h3>
                <p>Descrição</p>
                <img src="https://static.vecteezy.com/ti/fotos-gratis/p3/6671766-fantastica-lua-magica-luz-e-agua-barco-com-arvore-papel-de-parede-gratis-foto.jpg" />
                
                <ButtonGroup className='my-2'>
                    <Button variant="primary">Like</Button>
                    <Button variant="primary">Comentários</Button>
                    <Button variant="primary">Compartilhar</Button>
                </ButtonGroup>

                <p>({totalComments}) Comentários</p>
                <hr />

                {(new Array(totalComments)).fill(1).map(
                    (e, i) => <div key={i}>
                                <h5>Nome do sujeito</h5>
                                <p>Comentario em si</p>
                            </div>
                )}
            </Card.Body>
        </Card>
    )
}

const App = () => {
    return (
        <div>
            <HeaderApp />
            {(new Array(2)).fill(1).map((e, i) => <PostsComponent key={i} />)}
        </div>
    )
}

export default App