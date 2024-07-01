

export default function BlogPost (props) {

    return (
        <article className="card d-flex border-0 rounded-3 shadow col-11 col-lg-3 col-md-4">
            <img className="rounded-top-3" src={props.blogpost_image} alt={props.blogpost_title} />
            <div className="p-3">
                <h1 className="fs-3">
                    {props.blogpost_title}
                </h1>
                <p>
                    {props.blogpost_description}
                </p>
                <button className="btn btn-primary">Lire la suite</button>
            </div>
            <div className="card-footer p-0 mt-3">
                <p>Publié le {props.blogpost_published_date}</p>
            </div>
        </article>
    )
}