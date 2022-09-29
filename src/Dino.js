function Dino(props) {
    return (
        <div className="card" style={{width: '18rem'}}>
            <div className="card-body">
                <h5 className="card-title">{props.oneDino.title}</h5>
                <p className="card-text">By: {props.oneDino.author}</p>
                <p className="card-text">{props.oneDino.body}</p>
            </div>
            <p>Comments: {props.oneDino.comments}</p>
    </div>
    )
}

export default Dino;