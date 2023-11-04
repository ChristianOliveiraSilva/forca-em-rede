
import Header from './components/Header'

import '../../assets/scss/layouts/main-layout.scss'

const MainLayout = (props) => {
    return (
        <div className='main-layout'>
            <p className='bg-primary text-center text-light'>Sistema em fase de teste</p>
            <Header />

            <main className='content'>
                {props.children}
            </main>
            <p className='bg-primary text-center text-light'>Sistema em fase de teste</p>
        </div>
    )
}

export default MainLayout