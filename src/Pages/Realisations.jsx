import Project from "../Components/Project";
import fresh_food from '../assets/portfolio/fresh-food.jpg';
import espace_bien_etre from '../assets/portfolio/espace-bien-etre.jpg';
import akira from '../assets/portfolio/restaurant-japonais.jpg';

export default function Realisations () {
    return (
        <section>
            <article className="section-image"></article>

            <div className="realisations d-flex flex-column justify-content-center align-items-center gap-3 mt-3 p-4">
                <h2 className="titre-realisations text-center">PORTFOLIO</h2>
                <div>
                    <p className='fs-3 lg-fs-3 text-center'>Voici quelques-unes de mes réalisations</p>
                </div>
                <hr className="sep w-25" />
            </div>

            <article className="d-flex justify-content-center align-items-center flex-column flex-sm-column flex-md-row flex-lg-row flex-md-wrap align-items-md-stretch gap-3 mt-5 mb-5 col-12 col-lg-12 justify-content-lg-center"> 

                <Project 
                    realisation_image={fresh_food} 
                    title="Fresh food"
                    realisation_description="Réalisation d'un site avec commande en ligne."
                    realisation_langage="Site réalisé avec PHP et MySQL"    
                />
                <Project 
                    realisation_image={akira} 
                    title="Restaurant Akira"
                    realisation_description="Réalisation d'un site vitrine."
                    realisation_langage="Site réalisé avec WordPress"    
                />
                <Project 
                    realisation_image={espace_bien_etre} 
                    title="Espace bien-être"
                    realisation_description="Réalisation d'un site vitrine pour un praticien de bien-être."
                    realisation_langage="Site réalisé en HTML/CSS"    
                />

            </article>
        </section>
    )
}