import React from 'react'
import Html from '../Assets/Html.png'
import Css from '../Assets/Css.png'
import Js from '../Assets/Js.png'
import ImgEjemH from '../Assets/ImgEjemH.png'
import ImgEjemC from '../Assets/ImgEjemC.png'
import ImgEjemJ from '../Assets/ImgEjemJ.png'

const SectionImg = () => {
  const disapperImg1 =()=>{
    const imgHtml = document.querySelector('.imgHtml');
    const invisible = document.querySelector('.invisible')
    imgHtml.classList.toggle('imgNone')
    invisible.classList.toggle('text-visible')
  }
  const appearImg1=()=>{
    const imgHtml = document.querySelector('.imgHtml');
    const invisible = document.querySelector('.invisible')
    imgHtml.classList.remove('imgNone')
    invisible.classList.remove('text-visible')
  }
  const disapperImg2 =()=>{
    const imgCss = document.querySelector('.imgCss');
    const invisible2 = document.querySelector('.invisible2')
    imgCss.classList.toggle('imgNone')
    invisible2.classList.toggle('text-visible')
  }
  const appearImg2=()=>{
    const imgCss = document.querySelector('.imgCss');
    const invisible2 = document.querySelector('.invisible2')
    imgCss.classList.remove('imgNone')
    invisible2.classList.remove('text-visible')
  }
  const disapperImg3 =()=>{
    const imgJs = document.querySelector('.imgJs');
    imgJs.classList.toggle('imgNone')
    const invisible3 = document.querySelector('.invisible3')
    invisible3.classList.toggle('text-visible')
  }
  const appearImg3=()=>{
    const imgJs = document.querySelector('.imgJs');
    const invisible3 = document.querySelector('.invisible3')
    imgJs.classList.remove('imgNone')
    invisible3.classList.remove('text-visible')
  }

  return (
    <div>
      <section className='SectionImg'>
        <div className='img1 img' onMouseOver={disapperImg1} onMouseOut={appearImg1}>
          <img  src={Html} alt='Html' className='imgHtml'></img>
          <div className='invisible'>
           <p>
            Conocimientos sólidos en HTML para estructurar y dar forma a proyectos web.
          </p>
          <div  className='ImgEjemH'><img src={ImgEjemH}></img></div>
          </div>
        </div> 
        <div className='img2 img' onMouseOver={disapperImg2} onMouseOut={appearImg2}>
          <img  src={Css} alt='Css' className='imgCss'></img>
          <div className='invisible2'>
            <p>Domino CSS para mejorar la apariencia y la experiencia de usuario en mis proyectos web</p>
           <div  className='ImgEjemC'><img src={ImgEjemC}></img></div>
          </div>
        </div> 
        <div className='img3 img' onMouseOver={disapperImg3} onMouseOut={appearImg3}>
          <img  src={Js} alt='JavaScript' className='imgJs'></img>
          <div className='invisible3'>
            <p>JavaScript: añadiendo interacción y funcionalidad a mis proyectos web.</p>
           <div  className='ImgEjemS'><img src={ImgEjemJ}></img></div>
          </div>
        </div>       
        </section>
    </div>
  )
}

export default SectionImg
