import { Fragment } from "react";

import Service from "../Components/Service";

import mac from '../assets/imac.png';
import web from '../assets/web-programming.png';
import loupe from '../assets/find.png';

export default function Services () {
    return (
        
        <section>
            <article className='section-image'></article>


            <div className="offres d-flex flex-column justify-content-center align-items-center gap-3 mt-3 p-4">
                <h2 className='titre-services text-center'>MON OFFRE DE SERVICES</h2>
                <div>
                    <p className='fs-3 lg-fs-3 text-center'>Voici les offres sur lesquelles je peux intervenir.</p>
                </div>
                <hr className='sep w-25' />
            </div>

            <article className="d-flex flex-column flex-md-row flex-md-wrap justify-content-md-center flex-lg-row align-items-center gap-3 mt-5 mb-5 col-12 col-lg-12 justify-content-lg-center"> 

                <Service service_image={mac} service_title='UX DESIGN' service_description={
                    <Fragment>
                        L'<strong>UX Design</strong> est une méthode de conception centrée sur l'utilisateur. Son but est d'offir une expérience de navigation optimale à l'internaute.
                    </Fragment>
                } />
                
                <Service service_image={web} service_title='DEVELOPPEMENT WEB' service_description={
                    <Fragment>
                        Le <strong>développement de sites web</strong> repose sur l'utilisation des langages HTML, CSS, JavaScript et PHP.
                    </Fragment>
                } />
                <Service service_image={loupe} service_title='REFERENCEMENT' service_description={
                    <Fragment>
                        Le <strong>référencement naturel d'un site,</strong> aussi appelé SEO, consiste à mettre des techniques en oeuvre pour <em>améliorer sa position</em> dans les résultats des moteurs de recherche.
                    </Fragment>
                } />

            </article>
        </section>
    )
}