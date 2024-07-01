import github from '../assets/github.png';
import twitter from '../assets/signe-twitter.png';
import linkedin from '../assets/logo-linkedin.png'
import angle_droit from '../assets/angle-droit.png';
import copyright from '../assets/copyright.png';

import { NavLink } from 'react-router-dom';

export default function Footer () {


    return (
        <>
            <div className='pt-5 ps-3 d-flex flex-column gap-3 flex-md-row flex-lg-row gap-lg-5 justify-content-lg-center'>
                <div>
                    <h3 className='fs-4'>John Doe</h3>
                    <address>
                        40 rue Laure Diebold <br />
                        69009 Lyon, France <br />
                        Téléphone : 06 20 30 40 50
                    </address>
                    <div className='d-flex gap-4'>
                        <NavLink to='/github-john-doe' rel="noreferrer"><img src={github} alt="github"/></NavLink>
                        <a target="_blank" rel="noreferrer" href="http://twitter.com/"><img src={twitter} alt="twitter"/></a>
                        <a target="_blank" rel="noreferrer" href="http://linkedin.com/"><img src={linkedin} alt="linkedin"/></a>
                    </div>
                </div>

                <div>
                    <h3 className='fs-5'>Liens utiles</h3>
                    <div>
                        <div className='ps-1'><img src={angle_droit} alt="fleche-droite"/><NavLink to="/">Accueil</NavLink></div>
                        <div className='ps-1'><img src={angle_droit} alt="fleche-droite"/><NavLink to="/#a-propos">A propos</NavLink></div>
                        <div className='ps-1'><img src={angle_droit} alt="fleche-droite"/><NavLink to="/services">Services</NavLink></div>
                        <div className='ps-1'><img src={angle_droit} alt="fleche-droite"/><NavLink to="/me-contacter">Me contacter</NavLink></div>
                        <div className='ps-1'><img src={angle_droit} alt="fleche-droite"/><NavLink to="/mentions-legales">Mentions Légales</NavLink></div>
                    </div>
                </div>

                <div>
                    <h3 className='fs-5'>Mes dernières réalisations</h3>
                    <div>
                        <div className='ps-1'><img src={angle_droit} alt="fleche-droite"/><NavLink to="/fresh-food">Fresh food</NavLink></div>
                        <div className='ps-1'><img src={angle_droit} alt="fleche-droite"/><NavLink to="/restaurant-akira">Restaurant Akira</NavLink></div>
                        <div className='ps-1'><img src={angle_droit} alt="fleche-droite"/><NavLink to="/espace-bien-etre">Espace bien-être</NavLink></div>
                    </div>
                </div>

                <div>
                    <h3 className='fs-5'>Mes derniers articles</h3>
                    <div>
                        <div className='ps-1'><img src={angle_droit} alt="fleche-droite"/><NavLink to="/coder-son-site-en-html-css">Coder son site en HTML/CSS</NavLink></div>
                        <div className='ps-1'><img src={angle_droit} alt="fleche-droite"/><NavLink to="/vendre-ses-produits-sur-le-web">Vendre ses produits sur le web</NavLink></div>
                        <div className='ps-1'><img src={angle_droit} alt="fleche-droite"/><NavLink to="/se-positionner-sur-google">Se positionner sur Google</NavLink></div>
                    </div>
                </div>
            </div>
            <small className='z-1'>
                <div className='d-flex flex-column align-items-center justify-content-center gap-1 bg-dark p-3 mt-4'>
                    <div className='d-flex justify-content-center align-items-center gap-1'>
                        <img className='symbole-copyright' src={copyright} alt="symbole de copyright" />
                        <span className='fs-9 text-light'>Designed by John Doe</span>
                    </div>
                </div>
            </small>
        </>
    )
}