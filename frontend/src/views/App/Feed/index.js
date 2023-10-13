import Card from 'react-bootstrap/Card'

import MainLayout from '../../../layouts/MainLayout'
import Post from './components/Post'
const img = 'data:image/jpeg;base64,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'

import '../../../assets/scss/pages/feed.scss'
import { BsFill1CircleFill, BsFill2CircleFill, BsFill3CircleFill } from "react-icons/bs"

const HeaderApp = () => {
    return (
        <Card>
            <Card.Body>
                <section className='header-app-container'>
                    <div className='img-container'>
                        <img src={img} />
                    </div>

                    <div className='create-post-container'>
                        <textarea placeholder='Como você está se sentindo agora?' />

                        <div className='row align-items-center'>
                            <div className='options-container col-6 col-md-10'>
                                <div className='option'><BsFill1CircleFill /></div>
                                <div className='option'><BsFill2CircleFill /></div>
                                <div className='option'><BsFill3CircleFill /></div>
                            </div>
                            <div className='col'>
                                <button className='btn'>Postar</button>
                            </div>
                        </div>
                    </div>
                </section>
            </Card.Body>
        </Card>
    )
}

const App = () => {
    return (
        <MainLayout>
            <section className='feed-container'>
                <HeaderApp />

                {(new Array(2e1)).fill(1).map((e, i) => <Post key={i} />)}
            </section>
        </MainLayout>
    )
}

export default App