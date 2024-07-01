

export default function Project (props) {

    return (
        <div className="card-realisation d-flex flex-column justify-content-center align-items-center align-items-md-stretch gap-3 col-11 col-md-5 col-lg-3 card border-0 rounded-4 shadow text-center ">
            <img className="col-12 rounded-top-4" src={props.realisation_image} alt={props.title} />

            <div className="card-body d-flex flex-column justify-content-center align-items-center">
                <h1>{props.title}</h1>
                <p>
                    {props.realisation_description}
                </p>
                <button className="btn btn-outline-primary">Voir</button>
            </div>
            <div className="card-footer col-12 d-flex justify-content-center align-items-center">
                <p>
                    {props.realisation_langage}
                </p>
            </div>
        </div>
    )
}