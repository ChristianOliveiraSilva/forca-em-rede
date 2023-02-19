import Card from 'react-bootstrap/Card'

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
    return (
        <Card className='my-3'>
            <Card.Body>
                <h3>Título</h3>
                <img src="https://static.vecteezy.com/ti/fotos-gratis/p3/6671766-fantastica-lua-magica-luz-e-agua-barco-com-arvore-papel-de-parede-gratis-foto.jpg" />
                <p>Comentário</p>
            </Card.Body>
        </Card>
    )
}

const App = () => {
    const a = [1, 2, 3, 4]
    return (
        <div>
            <HeaderApp />
            {(new Array(1e3)).fill(1).map((e, i) => <PostsComponent key={i} />)}
        </div>
    )
}

export default App