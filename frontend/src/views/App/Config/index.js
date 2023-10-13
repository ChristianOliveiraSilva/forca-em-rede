import MainLayout from '../../../layouts/MainLayout'

import '../../../assets/scss/pages/config.scss'

const App = () => {
    return (
        <MainLayout>
            <section className="config-container">
                <section className='config-container'>
                    <section className='config-list-container'>
                        {(new Array(5)).fill(1).map((e, i) => <div className="item">AAAA</div>)}
                    </section>

                    <section className='config-panel-container'>
                        <h3>saas</h3>
                    </section>
                </section>
            </section>
        </MainLayout>
    )
}

export default App