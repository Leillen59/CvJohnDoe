


export default function Service (props) {



    return (
        <div className="card-service d-flex flex-column justify-content-center align-items-center gap-3 col-11 col-lg-3 col-md-5 card border-0 rounded-4 p-4 shadow">

            <img src={props.service_image} alt={props.service_title} />
            <h1 className="fs-4">{props.service_title}</h1>
            <p className="text-center">
                {props.service_description}
            </p>

        </div>
    )
}