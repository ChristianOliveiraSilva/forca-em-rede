import { Link, useNavigate } from 'react-router-dom'
import { BsThreeDots, BsFillPersonPlusFill } from "react-icons/bs"
import { getGender, getUser } from '../../../utility/Utils'
import api from '../../../services/api'
import { toast } from 'react-toastify'
import { useState } from 'react'
import logo from '../../../assets/images/logo.png'

const Message = ({msg}) => {
    return (
        <section className='message-component'>
            <div className='container text-center'>
                <img className='img-fluid my-4' src={logo} />
                <h3>{msg}</h3>
            </div>
        </section>
    )
}

export default Message