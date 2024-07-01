import john_doe from '../assets/john-doe-about.jpg';

export default function Home () {
    return (
        <>
            <section className='section-home d-flex justify-content-center align-items-center'>
                <div className='d-flex flex-column align-items-center gap-3'>

                    <h1 className='titre-home'>Bonjour, je suis John Doe</h1>

                    <h2 className='titre-metier-home'>Développeur web full stack</h2>

                    <a className='bouton-savoir-plus-home btn btn-primary text-light' href="#a-propos">En savoir plus</a>

                </div>
            </section>


            <section className='gap-5 d-flex align-items-center justify-content-center mb-5 ' id="a-propos">
                
                <div className='card-a-propos d-flex justify-content-evenly flex-column flex-md-row col-md-11 flex-lg-row card p-4 mt-5 border-0 col-12 col-xl-11'>

                    <div className='d-flex flex-column col-lg-5 col-md-6 gap-5'>

                        <div className="titre-section-a-propos">
                            <h3>À propos</h3>
                            <hr />
                        </div>
                        <div className=' col-lg-11 fs-4 d-flex flex-column gap-2'>
                            <p>
                                Passionné par l'informatique et les nouvelles <br />technologies, j'ai suivi une formation d'<strong>intégrateur-développeur web</strong> au CEF. Au cours de cette formation, j'ai pu acquérir des bases solides pour travailler dans le domaine du dévelopemment web.
                            </p>
                            <p>
                                Basé à Lyon, je suis en recherche d'une alternance au sein d'une agence digitale pour consolider ma formation de <strong>développeur web full stack.</strong>
                            </p>
                            <p>
                                J'accorde une attention particulière à la qualité du code que j'écris et je respecte les bonnes pratiques du web.
                            </p>
                        </div>
                    </div>

                    <div className="image_john_competences col-md-5 col-lg-6">
                        <img className="rounded-2 col-12 col-lg-12" src={john_doe} alt="John_Doe" />
                        <h3 className='mt-2'>Mes compétences</h3>

                        <div className="competences d-flex flex-column gap-md-4">
                            <div>
                                <p className='mb-0 mt-3'>HTML5 90%</p>
                                <div className="progress" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                                    <div className="progress-bar bg-danger" style={{width: "90%"}}></div>
                                </div>
                            </div>
                            <div>
                                <p className='mb-0 mt-3'>CSS3 80%</p>

                                <div className="progress" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                                    <div className="progress-bar bg-info" style={{width: "80%"}}></div>
                                </div>
                            </div>
                            <div>
                                <p className='mb-0 mt-3'>JAVASCRIPT 70%</p>
                                <div className="progress" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
                                    <div className="progress-bar bg-warning" style={{width: "70%"}}></div>
                                </div>
                            </div>
                            <div>
                                <p className='mb-0 mt-3'>PHP 60%</p>
                                <div className="progress" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
                                    <div className="progress-bar bg-success" style={{width: "60%"}}></div>
                                </div>
                            </div>
                            <div>
                                <p className='mb-0 mt-3'>REACT 50%</p>
                                <div className="progress" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                                    <div className="progress-bar bg-primary" style={{width: "50%"}}></div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}