import { Link, useNavigate } from 'react-router-dom'
import '../../../assets/scss/components/ad.scss'
import { BsThreeDots, BsHandThumbsUpFill } from "react-icons/bs"
import { getGender, getUser } from '../../../utility/Utils'
import api from '../../../services/api'
import { toast } from 'react-toastify'
import { useState } from 'react'

const Ad = (props) => {
    return (
        <section className='ad-component'>
            <p className='small text-muted'>ANÚNCIO</p>
            <h3>Nome do anúnciante</h3>
            <p>Descrição do anunciante</p>

            <img className='d-block my-4 img-fluid rounded w-100' src="https://static.escolakids.uol.com.br/2023/09/ilustracao-de-um-megafone-apontado-para-um-balao-de-grito-com-o-escrito-anuncio-publicitario.jpg" alt="anúncio" />

            <button className='btn btn-primary-color'>Ver</button>
        </section>
    )
}

export default Ad