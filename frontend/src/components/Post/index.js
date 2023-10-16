import { Link, useNavigate } from 'react-router-dom'
import '../../assets/scss/components/post.scss'
import { BsThreeDots, BsHandThumbsUpFill } from "react-icons/bs"
import { getUser } from '../../utility/Utils'
import api from '../../services/api'
import { toast } from 'react-toastify'
import { useState } from 'react'


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

const Post = ({post, showAll, removePostFromList}) => {
    const user = getUser()
    const navigate = useNavigate()
    let canDelete = user.id === post.user_id

    const [like, setLike] = useState(post.likes.find(e => e.user_id === user.id))

    const deleteAction = async () => {
        if (!canDelete) {
            return
        }

        canDelete = false

        try {
            const { data } = await api.delete(`post/${post.id}`)

            if (data.data.result === true) {
                if (removePostFromList) {
                    removePostFromList(post.id)
                } else {
                    navigate('/app')
                }
            } else {
                toast.error('Não foi possivel deletar o post')   
            }
        } catch (error) {
            console.log(error)
            toast.error('Não foi possivel deletar o post')   
        }
    }

    const toggleLikeAction = async () => {
        try {
            if (!like) {
                const { data } = await api.post(`like`, {post_id: post.id})
    
                if (data.status === true) {
                    setLike(data.data.like)
                }
            } else {
                const { data } = await api.delete(`like/${like.id}`, {post_id: post.id})
    
                if (data.status === true) {
                    setLike(null)
                }
            }
        } catch (error) {
            console.log(error)
            toast.error('Não foi possivel curtir o post')   
        }
    }

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
                        {user.id === post.user_id && (
                            <>
                                <p onClick={deleteAction}>Deletar</p>
                            </>
                        )}

                        {user.id !== post.user_id && (
                            <>
                                <p>Denunciar</p>
                                <Link to={`/chat/${post.user_id}`}>Conversar no chat</Link>
                            </>
                        )}
                    </div>
                </div>
            </div>

            <div className='content-container'>
                <div className='text'>
                    {post.content}
                </div>

                {post.medias.map(e => <img className='media' src={e} />)}
            </div>

            <div className='statics-container'>
                <Link to={`/app/post/${post.id}`}>
                    <p>{post.likes.length} curtida(s) • {post.comments.length} comentário(s)</p>
                </Link>

                <BsHandThumbsUpFill
                    className={like ? 'like-button liked' : 'like-button'}
                    onClick={toggleLikeAction}
                />
            </div>
            
            {showAll && (
                <>
                    <div className='create-comment-container'>
                        <img src='https://web.whatsapp.com/img/native-desktop-hero_a22b846aefcd2de817624e95873b2064.png' className='profile-picture' />
                        <textarea className='create-comment-textarea' placeholder='Publique sua ideia sobre o post'></textarea>
                        <button className='publish-button'>Publicar</button>
                    </div>

                    <div className='comment-list-container'>
                        {(new Array(3)).fill().map((e, i) => (
                            <div key={i} className='comment'>
                                <img src='https://web.whatsapp.com/img/native-desktop-hero_a22b846aefcd2de817624e95873b2064.png' className='profile-picture' />
                                <section>
                                    <p className='info'>@nickname • dados</p>
                                    <p className='comment-content'>
                                        Oii boa tarde, queria sabe se vc pode me ajuda na última coisa,🤦🏻‍♀️ seu pai tem carretinha n é? Será q ele te emprestava pra trazer minhas coisas
                                    </p>
                                </section>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </section>
    )
}

export default Post