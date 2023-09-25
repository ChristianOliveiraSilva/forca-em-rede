import '../../assets/scss/layouts/blog-layout.scss'

const BlogLayout = (props) => {
    return (
        <div className='blog-layout'>
            <header className='main-header'>
                <h3 className='title'>Força em Rede</h3>

                <nav>
                    <a href='#'>Link</a>
                    <a href='#'>Link</a>
                    <a href='#'>Link</a>
                    <a href='#'>Link</a>
                    <a href='#'>Link</a>
                    <a href='#'>Link</a>
                    <a href='#'>Link</a>
                    <a href='#'>Link</a>
                    <a href='#'>Link</a>
                    <a href='#'>Link</a>
                </nav>
            </header>

            <section className='content-container'>
                {props.children}
            </section>

            <footer className='main-footer'>
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
                </div>
                <div className='footer-column'>
                    <h3 title=''>Teste</h3>
                    <p>Teste <a>aaaa</a> </p>
                    <p>Teste</p>
                    <p>Teste</p>
                    <p>Teste</p>
                    <p>Teste</p>
                </div>
            </footer>
        </div>
    )
}

export default BlogLayout