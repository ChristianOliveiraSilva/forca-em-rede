import { Link } from 'react-router-dom'
import '../../assets/scss/layouts/blog-layout.scss'

const BlogLayout = (props) => {
    return (
        <div className='blog-layout'>
            <header className='main-header'>
                <h3 className='title'>Força em Rede - Blog</h3>

                <nav>
                    <Link to='/blog'>Todos</Link>
                    <Link to='/blog/search'>Pesquisar</Link>
                    <Link to='/'>Home</Link>
                    <Link to='/app'>App</Link>
                </nav>
            </header>

            <section className='content-container'>
                {props.children}
            </section>

            <footer className='main-footer'>
                {/* <div className='footer-column'>
                    <h3 title=''>Teste</h3>
                    <p>Teste <a>aaaa</a> </p>
                    <p>Teste</p>
                    <p>Teste</p>
                    <p>Teste</p>
                    <p>Teste</p>
                </div>
                <div className='footer-column'>
                    <h3 title=''>Teste</h3>
                    <p>Teste <a>aaaa</a> </p>
                    <p>Teste</p>
                    <p>Teste</p>
                    <p>Teste</p>
                    <p>Teste</p>
                </div>
                <div className='footer-column'>
                    <h3 title=''>Teste</h3>
                    <p>Teste <a>aaaa</a> </p>
                    <p>Teste</p>
                    <p>Teste</p>
                    <p>Teste</p>
                    <p>Teste</p>
                </div> */}
            </footer>
        </div>
    )
}

export default BlogLayout