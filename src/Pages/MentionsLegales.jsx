import smartphone from '../assets/smartphone.png';
import marqueur from '../assets/marqueur.png';
import enveloppe from '../assets/envelope.png';
import globe from '../assets/globe.png';

export default function MentionsLegales () {
    return (
        <section>
            <article>
                <div className="d-flex flex-column justify-content-center align-items-center p-5 gap-3">
                    <h1 className="text-uppercase">Mentions légales</h1>
                    <hr className="sep w-25" />
                </div>

                <div className='d-flex flex-column justify-content-center align-items-center m-5'>
                    <div className="accordion col-10" id="accordionMentions">
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Editeur du site
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionMentions">
                                <div className="accordion-body d-flex flex-column justify-content-center align-items-start gap-2">
                                    <h1 className='mb-2'>John Doe</h1>
                                    <div className='d-flex flex-row justify-content-start align-items-center gap-1'>
                                        <img src={marqueur} alt="marqueur d'adresse" />
                                        <address className='mb-0'>
                                            40 Rue Laure Diebold 69009 Lyon, France
                                        </address>
                                    </div>

                                    <div className='d-flex flex-row justify-content-start align-items-center gap-1'>
                                        <img src={smartphone} alt="logo smartphone" />
                                        <a href="tel:0620304050">06 20 30 40 50</a>
                                    </div>

                                    <div className='d-flex flex-row justify-content-start align-items-center gap-1'>
                                        <img src={enveloppe} alt="Enveloppe" />
                                        <a href="mailto:john.doe@gmail.com">john.doe@gmail.com</a>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Hébergeur
                                </button>
                            </h2>

                            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionMentions">
                                <div className="accordion-body">
                                    <div className='d-flex flex-column justify-content-center align-items-start gap-2'>
                                        <h1 className='mb-2'>Always Data</h1>
                                        <address className='mb-0'>
                                            91 rue du Faubourg Saint Honoré
                                            75008 Paris
                                        </address>
                                        <div>
                                            <img src={globe} alt="logo de globe" />
                                            <a href="https://www.alwaysdata.com/">www.alwaysdata.com</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Crédits
                            </button>
                            </h2>

                            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionMentions">
                                <div className="accordion-body d-flex flex-column justify-content-center align-items-start gap-2">
                                    <h1 className='mb-2'>Crédits</h1>
                                    <p>
                                        Site développé par John Doe, étudiant du CEF.
                                    </p>
                                    <p>
                                        Les images libres de droit sont issues du site <a href="https://pixabay.com/fr/">Pixabay</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </section>
    )
}