import { Link, useNavigate } from 'react-router-dom'
import '../../../assets/scss/components/friendship.scss'
import { BsThreeDots, BsFillPersonPlusFill } from "react-icons/bs"
import { getGender, getUser } from '../../../utility/Utils'
import api from '../../../services/api'
import { toast } from 'react-toastify'
import { useState } from 'react'

const Friendship = (props) => {

    const currentUser = getUser()

    return (
        <section className='friendship-component'>
            <div className='container'>
                <div className='row align-items-center'>
                    <div className='col-12 col-md-3'>
                        <img className='my-3 img-fluid rounded w-100 img-thumbnail' src='https://static.escolakids.uol.com.br/2023/09/ilustracao-de-um-megafone-apontado-para-um-balao-de-grito-com-o-escrito-anuncio-publicitario.jpg' />
                    </div>
                    <div className='col-12 col-md-6 text-center'>
                        <h3>Sugestão de amizade</h3>

                        <BsFillPersonPlusFill className='display-5 my-2 text-primary-color' />

                        <p>Deseja fazer amizade com esta pessoa?</p>

                        <button className='btn btn-primary-color mt-2'>Confirmar</button>
                    </div>
                    <div className='d-none d-md-block col-3'>
                        <img className='my-3 img-fluid rounded w-100 img-thumbnail' src={process.env.REACT_APP_MEDIA_URL + currentUser.picture} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Friendship