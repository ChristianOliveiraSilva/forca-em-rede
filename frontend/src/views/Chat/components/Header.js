import { BsThreeDotsVertical } from "react-icons/bs"

const Header = () => {
    return (
        <header className='header-container row align-items-center'>
            <h1 className="title col-4">Chat</h1>

            <div className="col-8 text-end">
                <BsThreeDotsVertical />
            </div>
        </header>
    )
}

export default Header