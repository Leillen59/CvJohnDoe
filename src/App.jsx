//Import CSS
import './styles/General.css';
import './styles/Home.css';
import './styles/Services.css';
import './styles/Realisations.css';
import './styles/Blog.css';
import './styles/Contact.css';
import './styles/Responsive.css';

//Imports Composants
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Services from './Pages/Services';
import Realisations from './Pages/Realisations';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';
import GithubPage from './Pages/GithubPage';
import MentionsLegales from './Pages/MentionsLegales';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {useEffect} from "react";

import up_arrow from './assets/up-arrow.png';
function App() {
    useEffect(() => {
        window.addEventListener("scroll", scroll);
        let bouton = document.querySelector(".bouton_retour_haut");

        function scroll () {
            let y = window.scrollY;
            if (y < 150) {
                bouton.style.opacity = "0%";
            }
            else {
                bouton.style.opacity = "100%";
            }
        }
    })

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="/services" element={<Services/>} />
            <Route path="/realisations" element={<Realisations/>} />
            <Route path="/blog" element={<Blog/>} />
            <Route path="/me-contacter" element={<Contact/>} />
            <Route path="/github-john-doe" element={<GithubPage/>} />
            <Route path="/mentions-legales" element={<MentionsLegales/>} />
          </Route>
        </Routes>
      </BrowserRouter>
      <div onClick={() => {window.scrollTo(0, 0);}} className="bouton_retour_haut">
        <img src={up_arrow} alt="flèche retour en haut de page"/>
      </div>
    </div>

  )
}

export default App;
