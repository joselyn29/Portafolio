import React from 'react'
import imgEjemRest from '../Assets/imgEjemRest.png'

const SectionProyect = () => {
  return (
    <div>
      <section className='sectionProyect'> 
        <div className='boxCard'>
              
          <div className='boxTittle' style={{padding:'20px'}}>
            <h2 style={{textAlign:'center'}}>Poyectos</h2>
          </div>
          <div className='boxLowerInfo'>
            <div className='boxImg'>
             <img src={imgEjemRest} style={{width:'200px', height:'auto'}}></img>
            </div>
            <div className='boxInfo' style={{display:'flex', justifyContent:'center', flexDirection:'column', paddingBottom:'65px'}}>
                <h3>Restaurantes Lynna</h3>
                <p>Página web realizada para un retaurante como proyecto de final de trimestre.</p>
                <a href='https://four-legged-section.000webhostapp.com/index_princ.html' target='_blank' >visitar página</a>
            </div>
         </div>
           
        </div>
      </section>
    </div>
  )
}

export default SectionProyect
