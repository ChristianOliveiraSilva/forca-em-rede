import MainLayout from '../../../layouts/MainLayout'

import '../../../assets/scss/pages/notification.scss'

const App = () => {
    return (
        <MainLayout>
            <section className='notification-container'>
                <div className="item">
                    asdasdda asdasdda asdasdda asdasdda asdasdda asdasdda asdasdda asdasdda asdasdda asdasdda asdasdda
                </div>
                {(new Array(5)).fill(1).map((e, i) => (
                    <div className="item seen">
                        asdasdda asdasdda asdasdda asdasdda asdasdda asdasdda asdasdda asdasdda asdasdda asdasdda asdasdda
                    </div>
                ))}
            </section>
        </MainLayout>
    )
}

export default App