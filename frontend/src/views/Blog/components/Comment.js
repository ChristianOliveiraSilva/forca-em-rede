

const Comment = () => {
    return (
        <section className='comment-container'>
            <div className="img-container">
                <img src="https://avatars.githubusercontent.com/u/41245411?v=4" />
            </div>
            <div className="comment-content">
                <h3 className="title">Nome do comentarista</h3>
                <p className="comment">Comentário</p>
            </div>
        </section>
    )
}

export default Comment
