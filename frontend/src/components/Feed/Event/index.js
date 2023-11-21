import { Link, useNavigate } from 'react-router-dom'
import '../../../assets/scss/components/event.scss'
import { BsThreeDots, BsHandThumbsUpFill } from "react-icons/bs"
import { getGender, getUser } from '../../../utility/Utils'
import api from '../../../services/api'
import { toast } from 'react-toastify'
import { useState } from 'react'


const Event = (props) => {
    return (
        <section className='event-component'>
            <h3>Nome do evento</h3>
            <p>Descrição do evento</p>

            <img className='d-block mt-2 mb-5 img-fluid rounded w-100' src="https://static.escolakids.uol.com.br/2023/09/ilustracao-de-um-megafone-apontado-para-um-balao-de-grito-com-o-escrito-anuncio-publicitario.jpg" alt="anúncio" />

            <h4 className='text-center my-4'>xx/xx/xxxx - xx/xx/xxxx</h4>
        </section>
    )
}

export default Event