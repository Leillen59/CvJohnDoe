import { useEffect, useState } from "react"

export default function GithubPage () {

    const url = "https://api.github.com/users/github-john-doe";

    const [infos, setInfos] = useState({});

    const getInformations = async () => {
        const reponse = await fetch(url)
            .then(reponse => reponse.json())
        // reponse = reponse.json();
        console.log(reponse);
        setInfos(reponse);
    }

    useEffect(() => {
        getInformations();
    }, []);

    return (
        <section className="d-flex flex-column justify-content-center align-items-center m-5">
            <h1>Github User</h1>
            <div className="d-flex flex-column justify-content-center align-items-center card rounded-2 shadow m-5 p-5 gap-3">
                <h2>{infos.name}</h2>
                <img className="w-50" src={infos.avatar_url} alt={infos.name} />
                <p>{infos.bio}</p>
                <p>Abonnés : {infos.followers}</p>
                <p>Abonnement : {infos.following} </p>
                <p>Créé le : {infos.created_at}</p>
                <p>Modifié le : {infos.updated_at}</p>
                <p>URL Repositories : <a href={infos.repos_url}>{infos.repos_url}</a></p>
            </div>
        </section>
    )
}