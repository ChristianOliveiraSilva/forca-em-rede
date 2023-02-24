
import Header from './components/Header'
import MenuAside from './components/MenuAside'
import Contacts from './components/Contacts'

import '../../assets/scss/layouts/main-layout.scss'

const MainLayout = (props) => {
    return (
        <div className='main-layout'>
            <Header />

            <main className='content'>
                <MenuAside />
                
                <section className='main-content'>
                    {props.children}
                </section>

                <Contacts />
            </main>
        </div>
    )
}

export default MainLayout