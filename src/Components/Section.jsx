//import React from 'react'
import './Section.css'
import React, { useState } from 'react'

const Section = () => {
  const [tipoDenuncia, setTipoDenuncia] = useState('');
  const [fotos, setFotos] = useState([]);

  const manejarCambioSelect = (e) => {
    setTipoDenuncia(e.target.value);
  };

  const handleFiles = (event) => {
    const archivos = Array.from(event.target.files);
    const rutas = archivos.map(archivo => URL.createObjectURL(archivo));
    setFotos([...fotos, ...rutas]);
  };

  return (
    <section className="denuncia-container" >
      <div className="glass-effect denuncia-card">
        <h1 className='titulo'>Realiza tu Denuncia</h1>
        <p>Ayudanos a proteger a los que no tienen voz. Tu reporte puede ser anonimo, eso lo decides tu</p>
        
        <form className="formulario">
          <div className="campo">
            <label>Tipo de denuncia o Reporte</label>
            <select name="tipo_denuncia" value={tipoDenuncia} onChange={manejarCambioSelect}required>
              <option value="" disabled>Seleccione la situación...</option>

              <optgroup label="Situaciones Urgentes">
                <option value="maltrato_fisico">Maltrato físico o agresión directa</option>
                <option value="herida_grave">Animal herido o enfermo sin atención</option>
              </optgroup>

              <optgroup label="Condiciones de Vida">
                <option value="abandono">Abandono (Calle o propiedad privada)</option>
                <option value="negligencia">Negligencia (Sin agua, comida o techo)</option>
                <option value="hacinamiento">Falta de higiene</option>
              </optgroup>

              <optgroup label="Otros Reportes">
                <option value="venta_ilegal">Venta ilegal o criadero clandestino</option>
                <option value="otro">Otro (especificar en descripción)</option>
              </optgroup>
            </select>
          </div>


          <div className='campo'>
            <label>Descripcion de los hechos</label>
            <textarea name="Descripcion" rows="6" placeholder={tipoDenuncia === 'otro'? 'Por favor, detalla aquí el tipo de maltrato que seleccionaste como "Otro"...': 'Describe lo ocurrido (hora, detalles físicos del animal, etc.)'}required></textarea>
          </div>
          

          <div className="campo">
            <label>Ubicación (Lo mas exacta posible)</label>
            <input type="text" placeholder="Escribe aquí tu dirección o coordenadas..." required />
          </div>


          <div className='campo'>
            <label>Añade evidencia (imagen/video)</label>
            <div className='file-drop'>
              <p>
                <label className="drop-link" htmlFor="fileInput">Sube el archivo</label>o arrástralo aquí
              </p>

              <input type="file" id="fileInput" multiple onChange={handleFiles} style={{display: "none"}} required/>

              <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '10px' }}> 
                {fotos.map((url, i) => (<img key={i} src={url} style={{ width: '60px', height: '60px', margin: '5px', borderRadius: '8px', objectFit: 'cover' }} alt="preview" />))}
              </div>
            </div>
          </div>

          <button type="submit" className="btn-enviar">Enviar Denuncia</button>
        </form>
      </div>
    </section>
  )
}

export default Section;