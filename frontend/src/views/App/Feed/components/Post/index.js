import { Link } from 'react-router-dom'
import '../../../../../assets/scss/components/post.scss'
import { BsThreeDots, BsHandThumbsUpFill } from "react-icons/bs"


const generateLabelHeader = (user) => {
    let label = '', data = 0
    const separator = ' • '
    const maxInfoInLabel = 3

    if (user.info.gender) {
        label += user.info.gender
        data++
    }

    if (user.info.pronouns) {
        label += separator + user.info.pronouns
        data++
    }

    if (user.info.job) {
        label += separator + user.info.job
        data++
    }

    if (user.info.workplace && data < maxInfoInLabel) {
        label += separator + user.info.workplace
        data++
    }

    if (user.info.city && data < maxInfoInLabel) {
        label += separator + user.info.city

        if (user.info.state) {
            label += separator + user.info.state
        }
    }

    return label
}

const Post = ({post}) => {
    return (
        <section className='post'>
            <div className='header-container'>
                <div className='img-container'>
                    <img src={`${process.env.REACT_APP_MEDIA_URL}anonimo.webp`} />
                </div>
                <div className='info-container'>
                    <p className='h6 m-0'>{post.user.name}</p>
                    <p className='text-muted small'>
                        @{post.user.name} • {generateLabelHeader(post.user)}
                    </p>
                </div>
                <div className='options-container'>
                    <BsThreeDots className="options-btn" />
                    <div className="dropdown-content">
                        <p>Link 1</p>
                        <p>Link 2</p>
                        <p>Link 3</p>
                    </div> 
                </div>
            </div>
            <div className='content-container'>
                <div className='text'>
                    {post.content}
                </div>

                {post.medias.map(e => <img className='media' src={e} />)}
            </div>
            <div className='footer-container'>
                <Link to='/app/post/asdad'>
                    <p>{post.likes.length} curtida(s) • {post.likes.length} comentário(s)</p>
                </Link>

                <BsHandThumbsUpFill className='like-button liked' />
            </div>
        </section>
    )
}

export default Post