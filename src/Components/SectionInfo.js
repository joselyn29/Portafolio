import React from 'react'
import ProgramadoraSgv from '../Assets/ProgrmadoraSgv.svg'

const SectionInfo = () => {
  return (
    <div>
      <section className='SectionInfo'>
         <div className='tittle-text'>
             <div className='box-tittle'>
                    <h1>Sobre Mí</h1>
             </div> 
             <div className='box-text'>
                 <p className='text1 text'>¡Hola! Soy Joss, una apasionada desarrolladora web de Medellín con 18 años. Disfruto especialmente trabajando en el frontend de las páginas web, creando experiencias de usuario atractivas.</p>
                 <p className='text2 text'>Aunque me siento cómoda tanto en el backend como en el frontend, sé que todavía tengo mucho por aprender y mejorar. Estoy emocionado por la oportunidad de seguir creciendo en este emocionante campo.</p>
                 <p className='text3 text'>Cuando no estoy programando, estoy escuchando música o tocando el piano. Si tienes un proyecto o simplemente deseas hablar sobre desarrollo web, ¡estaré encantado de escucharte!</p>
                 <p className='text'>¡Gracias por visitar mi portafolio!</p>
              </div>
         </div>
             
         <div className='box-img-sectionInfo'>
             <img className='img-sectionInfo' src={ProgramadoraSgv} alt='Imagen gráfica'>
             </img>
         </div>
      </section>
    </div>
  )
}

export default SectionInfo
