import { useState } from 'react';
import Typewriter from "typewriter-effect";
import './styles/homePage.css'
import './styles/aboutMe.css'
import './styles/skills.css'
import './styles/contact.css'
import './styles/topBar.css'
import './styles/style.css'

function App() {
  const [valueButton, setValueButton] = useState("home");
  return (
    <div className='container'>
      <div className='topBar'>
        <label className='name'>Martin Ramdane</label>
        <div className='buttonContainer'>
          <button className={valueButton === 'home' ? 'buttonSelected': 'button'} onClick={() => setValueButton("home")}>Home</button>
          <button className={valueButton === 'about me' ? 'buttonSelected': 'button'} onClick={() => setValueButton("about me")}>About Me</button>
          <button className={valueButton === 'skills' ? 'buttonSelected': 'button'} onClick={() => setValueButton("skills")}>Skills</button>
          <button className={valueButton === 'contact' ? 'buttonSelected': 'button'} onClick={() => setValueButton("contact")}>Contact</button>
        </div>
      </div>
      {
        valueButton === 'home' ?
        <div className='homePage'>
          <div className='top'>
            <div className='title'>
              <h1 className='title-text'>Hi, I'm Martin Ramdane 👋</h1>
              <h1 className='presentation'><Typewriter onInit={(typewriter)=> {typewriter
              .changeDelay(35)
              .typeString("I'm 19.")
              .pauseFor(1000)
              .deleteAll()
              .typeString("I'm a french IT student.")
              .pauseFor(1000)
              .deleteAll()
              .typeString("I'm a developer.")
              .pauseFor(1000)
              .deleteAll()
              .typeString("I'm a french IT student and developer.")
              .start();}}/></h1>
            </div>
            <img className='me' alt='me' src='/me.jpeg'></img>
          </div>
          <div className='bottom'>
            <p className='miniPresentation'>
              I am currently a 19 years old student at Epitech Marseille, a school specialized in development. I'm passionate about coding and I like to learn new technologies.
            </p>
          </div>
        </div> : null
      }
      {
        valueButton === 'about me' ?
        <div className='aboutMe'>
          <div className='parcours'>
            <h1 className='mini-title'>Mon parcours:</h1>
            <div className='step'>
              <div className='container-orga-date'>
                <h2 className='steps-text'>Expert en technologie de l'information</h2>
                <h2 className='date-text'>2021-2026</h2>
              </div>
              <h4 className='location'>Epitech</h4>
              <p className='infos'>Programme grande école.</p>
            </div>
            <div className='step'>
              <div className='container-orga-date'>
                <h2 className='steps-text'>Baccalauréat</h2>
                <h2 className='date-text'>2018-2021</h2>
              </div>
              <h4 className='location'>Lycée Arthur Rimbaud</h4>
              <p className='infos'>Baccalauréat spécialité Numérique et sciences informatiques, Mathématiques et Physique-Chimie.</p>
              <p className='infos'>Mention assez bien.</p>
            </div>
            <div className='step'>
              <div className='container-orga-date'>
                <h2 className='steps-text'>Brevet des collèges</h2>
                <h2 className='date-text'>2014-2018</h2>
              </div>
              <h4 className='location'>Collège Alain Savary</h4>
              <p className='infos'>Mention bien.</p>
            </div>

          </div>
        </div> : null
      }
      {
        valueButton === 'skills' ?
        <div className='skills'>
          <h1 className='mySkills'>My skills</h1>
          <div className='first-skills'>
            <div className='name-skill'>
              <p>Javascript</p>
              <img className='icon' alt='Js' src='/js.svg'></img>
            </div>
            <div className='name-skill'>
              <p>React</p>
              <img className='icon' alt='React' src='/react.svg'></img>
            </div>
            <div className='name-skill'>
              <p>Html</p>
              <img className='icon' alt='html' src='/html.svg'></img>
            </div>
            <div className='name-skill'>
              <p>Css</p>
              <img className='icon' alt='Css' src='/css.svg'></img>
            </div>
          </div>
          <div className='second-skills'>
            <div className='name-skill'>
              <p>C</p>
              <img className='icon' alt='C' src='/C.svg'></img>
            </div>
            <div className='name-skill'>
              <p>C++</p>
              <img className='icon' alt='C++' src='/C++.svg'></img>
            </div>
            <div className='name-skill'>
              <p>Python</p>
              <img className='icon' alt='Pyhton' src='/python.svg'></img>
            </div>
          </div>
        </div> : null
      }
      {
        valueButton === 'contact' ?
        <div className='contact'>
          <h1 className='contactMe'>Contact me on :</h1>
          <div className='icons'>
            <a href='https://www.linkedin.com/in/martin-ramdane-0874a7233/'><img className='contact-icons' alt='linkedin' src='/linkedin.svg'></img></a>
            <a href='https://github.com/MartinRamdane'><img className='contact-icons' alt='github' src='/github.svg'></img></a>
            <a href='mailto:martin@martinramdane.fr'><img className='contact-icons' alt='mail' src='/mail.svg'></img></a>
          </div>
          <div className='myEmail'>
            <p>Email: </p>
            <p className='email'>martin@martinramdane.fr</p>
          </div>
        </div> : null
      }
    </div>
  );
}

export default App;
