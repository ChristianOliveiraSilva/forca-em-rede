import MiscellaneousLayout from '../../../layouts/MiscellaneousLayout'

import '../../../assets/scss/pages/about.scss'

const Page = () => {
    return (
        <MiscellaneousLayout>
            <div className='about-container container my-5'>
                <h3>Hey! Essa é a nossa história! 🤗</h3>
                <p className='progress-text'>Em progresso...</p>
            </div>
        </MiscellaneousLayout>
    )
}

export default Page