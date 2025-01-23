import "./MovieCard.css"

const MovieCard = ({ props }) => {
    // console.log("From propsCard:", props)
    return (
        <div className="col-lg-3 col-md-6 col-sm-12 p-1">

            <div className="card rounded-0" style={{ height: "350px" }}>
                <div style={{ height: "250px" }} className="top-0">
                    <img style={{ height: "100%" }}  src={`https://image.tmdb.org/t/p/w500/${props.img}`} alt="" className="card-img-top" />
                
                    <div className="overlay">
                        <button>🤍</button>
                    </div>
                </div>
                <div className="card-body p-1 bg-dark text-light">
                    <h4 className="card-title">{props.title}</h4>
                    <p style={{ fontSize: "0.8rem" }}>{props.description}</p>
                </div>
            </div>
        </div>

    )
}

export default MovieCard