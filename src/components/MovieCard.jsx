import "./MovieCard.css"

const MovieCard = ({ props }) => {
    // console.log("From propsCard:", props)
    return (
        <div className="col-lg-3 col-md-6 col-sm-12 p-1">

            <div className="card rounded-0" style={{ height: "100%" }}>
                <div style={{ height: "250px" }} className="top-0">
                    <img style={{ height: "100%" }}  src={`https://image.tmdb.org/t/p/w500/${props.poster_path}`} alt="" className="card-img-top" />
                
                    <div className="overlay">
                        <button>🤍</button>
                    </div>
                </div>
                <div className="card-body p-1 bg-dark text-light">
                    <h4 className="card-title fs-6 fw-bolder">{props.title}</h4>
                    <p style={{ fontSize: "0.8rem" }}>{props.overview}</p>
                </div>
                <div className="card-footer bg-dark p-1">
                    <p className="text-white m-0">{props.release_date}</p>
                </div>
            </div>
        </div>

    )
}

export default MovieCard