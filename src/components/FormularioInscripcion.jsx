import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { dbClient } from '../aws-config'; 
import { PutItemCommand } from "@aws-sdk/client-dynamodb";
import { marshall } from "@aws-sdk/util-dynamodb";
import '../styles/Formulario.css'; // Asegúrate de tener los estilos que compartiste aquí

function FormularioInscripcion() {
  const navigate = useNavigate();
  const [cargando, setCargando] = useState(false);
  const [exito, setExito] = useState(false); // Estado para mostrar el mensaje de éxito

  const [formData, setFormData] = useState({
    nombre: '',
    apellidos: '',
    documento: '',
    celular: '',
    email: '',
    empresa: '',
    nit: '',
    cargo: '',
    comoSeEntero: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: null }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.nombre.trim()) newErrors.nombre = 'Obligatorio';
    if (!formData.apellidos.trim()) newErrors.apellidos = 'Obligatorio';
    if (!formData.documento.trim()) newErrors.documento = 'Obligatorio';
    if (!formData.celular.trim()) newErrors.celular = 'Obligatorio';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email no válido';
    if (!formData.comoSeEntero.trim()) newErrors.comoSeEntero = 'Obligatorio';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      setCargando(true);
      try {
        const item = { ...formData, fechaInscripcion: new Date().toISOString(), pauta: true, emailConfirmed: false };
        await dbClient.send(new PutItemCommand({ TableName: "InscripcionesEvento", Item: marshall(item) }));
        setExito(true); // Mostramos el mensaje de éxito en lugar de navegar
      } catch (err) {
        alert("Error al enviar. Intenta de nuevo.");
      } finally { setCargando(false); }
    } else { setErrors(newErrors); }
  };

  return (
    <section id="registro" className="register">
      <div className="register-inner">
        <div className="section-label" style={{textAlign:'center'}}>Inscripción gratuita</div>
        <h2 className="section-title reveal">Tu cupo te está<br/><span>esperando</span></h2>
        <p>Los cupos son limitados. Asegura el tuyo ahora, es completamente gratis. En menos de 2 minutos estarás inscrito en el evento de IA más importante del año en Colombia.</p>
        
        <div className="form-card reveal">
          {!exito ? (
            <form onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                <div className="form-group">
                  <label>Nombre</label>
                  <input name="nombre" value={formData.nombre} onChange={handleChange} placeholder="Tu nombre" className={errors.nombre ? 'input-error' : ''}/>
                </div>
                <div className="form-group">
                  <label>Apellido</label>
                  <input name="apellidos" value={formData.apellidos} onChange={handleChange} placeholder="Tu apellido" className={errors.apellidos ? 'input-error' : ''}/>
                </div>
              </div>

              <div className="form-group">
                <label>Correo electrónico</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="correo@ejemplo.com" className={errors.email ? 'input-error' : ''}/>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Empresa / Organización</label>
                  <input name="empresa" value={formData.empresa} onChange={handleChange} placeholder="Tu empresa"/>
                </div>
                <div className="form-group">
                  <label>Cargo</label>
                  <input name="cargo" value={formData.cargo} onChange={handleChange} placeholder="Tu rol"/>
                </div>
              </div>

              <div className="form-group">
                <label>¿Cómo te enteraste?</label>
                <select name="comoSeEntero" value={formData.comoSeEntero} onChange={handleChange}>
                  <option value="">Selecciona una opción</option>
                  <option>Redes sociales</option>
                  <option>Un amigo o colega</option>
                  <option>Otro</option>
                </select>
              </div>

              <button type="submit" className="btn-primary form-submit" disabled={cargando}>
                {cargando ? 'Enviando...' : '¡Reservar mi cupo gratuito! 🚀'}
              </button>
              <div className="form-note">🔒 Tus datos están seguros. No spam, prometido.</div>
            </form>
          ) : (
            <div className="success-msg">
              <div className="success-icon">✅</div>
              <h3>¡Estás dentro!</h3>
              <p>Tu registro fue exitoso. <strong>Nos vemos el 21 de julio en la UPB.</strong></p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default FormularioInscripcion;