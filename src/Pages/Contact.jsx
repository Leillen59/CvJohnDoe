import smartphone from '../assets/smartphone.png';
import marqueur from '../assets/marqueur.png';

export default function Contact () {
    return (
        
        <section className="section-contact d-flex flex-column justify-content-center align-items-center col-12 pt-2">

            <article className="card-contact card d-flex flex-column justify-content-center align-items-center col-11 mb-5 mt-5 pb-5 flex-md-row flex-md-wrap justify-content-md-evenly flex-lg-column justify-content-lg-evenly row-gap-1">

                <div className="d-flex flex-column justify-content-center align-items-center mb-5 pt-5">
                    <h1 className="mb-2">ME CONTACTER</h1>
                    <p className="text-center">
                        Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact.
                    </p>
                    <hr className="sep w-25" />
                </div>

                <div className='d-flex flex-column justify-content-md-evenly flex-md-row col-md-12 flex-lg-row justify-content-lg-evenly align-items-lg-start col-lg-11'>
                    <div className='d-md-flex flex-md-row col-md-5 col-lg-5'>

                        <div className='col-md-12'>
                            <div className="mb-4">
                                <h2 className="mb-3 fs-1">Formulaire de contact</h2>
                                <hr className="sep-secondaire w-100" />
                            </div>
                            <form className="d-flex flex-column justify-content-center align-items-stretch gap-3">
                                <input className="p-2 rounded-2 border border-dark-subtle" placeholder="Votre nom" type="text"  required/>
                                <input className="p-2 rounded-2 border border-dark-subtle" type="email" placeholder="Votre adresse email" required/>
                                <input className="p-2 rounded-2 border border-dark-subtle" type="phone" placeholder="Votre numéro de téléphone" required/>
                                <input className="p-2 rounded-2 border border-dark-subtle" type="text" placeholder="Sujet" required/>
                                <textarea className="p-2 rounded-2 border border-dark-subtle" cols="30" rows="10" placeholder="Votre message" required></textarea>
                                <button className="btn btn-primary col-5 align-self-center">ENVOYER</button>
                            </form>
                        </div>
                    </div>

                    <div className="mt-3 col-md-5">
                        <div className='mb-3'>
                            <h2>Mes coordonnées</h2>
                            <hr className="sep-secondaire w-100"/>
                        </div>
                        <div className='d-flex flex-column justify-content-center align-items-start gap-0'>
                            <address className='d-flex justify-content-center align-items-center gap-1'>
                                <img src={marqueur} alt="marqueur de position" />
                                40 Rue Laure Diebold 69009 Lyon, France
                            </address>
                            <p className='d-flex justify-content-center align-items-center gap-1'>
                                <img src={smartphone} alt="smartphone" />
                                <a href="tel:0620304050">06 20 30 40 50</a>
                            </p>
                        </div>

                        <div className="col-12">

                            <iframe title='maps-frame' className='col-12' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.6271510189868!2d4.7989789!3d45.778662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1686898109600!5m2!1sfr!2sfr" width="600" height="450" loading="lazy" ></iframe>
                        </div>
                    </div>
                </div>
            </article>

        </section>

    )
}