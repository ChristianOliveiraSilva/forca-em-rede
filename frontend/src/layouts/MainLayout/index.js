
import Header from './components/Header'

import '../../assets/scss/layouts/main-layout.scss'

const MainLayout = (props) => {
    return (
        <div className='main-layout'>
            <Header />

            <main className='content'>
                {props.children}
            </main>
        </div>
    )
}

export default MainLayout