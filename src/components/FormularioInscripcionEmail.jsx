import React, { useState } from 'react';
import '../styles/Formulario.css';
import '../styles/Modal.css';

import Modal from './Modal';
import { dbClient } from '../aws-config'; 
import { PutItemCommand } from "@aws-sdk/client-dynamodb";
import { marshall } from "@aws-sdk/util-dynamodb";

function FormularioInscripcionE() {
  const [enviado, setEnviado] = useState(false);
  const [cargando, setCargando] = useState(false); 
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
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
    
    if (value.trim() !== '') {
      setErrors(prevErrors => ({
        ...prevErrors,
        [name]: null,
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.nombre.trim()) newErrors.nombre = 'Campo obligatorio';
    if (!formData.apellidos.trim()) newErrors.apellidos = 'Campo obligatorio'; 
    if (!formData.documento.trim()) newErrors.documento = 'Campo obligatorio'; 
    if (!formData.celular.trim()) newErrors.celular = 'Campo obligatorio';
    if (!formData.email.trim()) newErrors.email = 'Campo obligatorio';
    if (!formData.empresa.trim()) newErrors.empresa = 'Campo obligatorio';
    if (!formData.cargo.trim()) newErrors.cargo = 'Campo obligatorio';
    if (!formData.comoSeEntero.trim()) newErrors.comoSeEntero = 'Campo obligatorio';
    
    if (formData.email.trim() && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'email electrónico no válido';
    }
    
    return newErrors;
  };
  // ---------------------------------

  const handleSubmit = async (event) => {
    event.preventDefault(); 
    const newErrors = validateForm(); 
    setErrors(newErrors); 

    if (Object.keys(newErrors).length === 0) {
      setCargando(true); 
      
      try {
        // --- 3. OBJETO DE DYNAMODB ACTUALIZADO ---
        const item = {
          email: formData.email, 
          nombre: formData.nombre,
          apellidos: formData.apellidos, // NUEVO
          documento: formData.documento, // NUEVO
          celular: formData.celular,
          empresa: formData.empresa,
          nit: formData.nit || 'No aplica', // NUEVO
          cargo: formData.cargo,
          comoSeEntero: formData.comoSeEntero, // NUEVO
          fechaInscripcion: new Date().toISOString(),
          pauta: false // <-- Valor para este formulario
        };
        // ------------------------------------------

        const command = new PutItemCommand({
          TableName: "InscripcionesEvento", 
          Item: marshall(item), 
        });

        await dbClient.send(command);
        setEnviado(true);

      } catch (error) {
        console.error('Error al guardar en DynamoDB:', error);
        alert("Hubo un error al enviar tu inscripción. Por favor, intenta de nuevo.");
      } finally {
        setCargando(false);
      }

    } else {
      console.log('Errores de validación:', newErrors);
    }
  };

  // --- 4. RESETEO ACTUALIZADO ---
  const handleCloseModal = () => {
    setEnviado(false);
    setFormData({
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
    setErrors({});
  };
  // --------------------------------

  return (
    // --- 5. FORMULARIO (JSX) ACTUALIZADO ---
    <div className="form-container">
      <h1 className="form-title">Formulario de Inscripción</h1>
      <p className="form-subtitle">
        Inscríbete gratis al VIII Conferencia Internacional y Workshop.
      </p>

      <form className="inscripcion-form" onSubmit={handleSubmit} noValidate>
        
        {/* Correo Electrónico */}
        <div className="form-group">
          <label htmlFor="email">Correo Electrónico *</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            placeholder="tu@email.com"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? 'input-error' : ''}
            disabled={cargando}
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>
        
        {/* Nombres */}
        <div className="form-group">
          <label htmlFor="nombre">Nombres *</label>
          <input 
            type="text" 
            id="nombre" 
            name="nombre" 
            value={formData.nombre}
            onChange={handleChange}
            className={errors.nombre ? 'input-error' : ''}
            disabled={cargando} 
          />
          {errors.nombre && <span className="error-message">{errors.nombre}</span>}
        </div>
        
        {/* Apellidos (NUEVO) */}
        <div className="form-group">
          <label htmlFor="apellidos">Apellidos *</label>
          <input 
            type="text" 
            id="apellidos" 
            name="apellidos" 
            value={formData.apellidos}
            onChange={handleChange}
            className={errors.apellidos ? 'input-error' : ''}
            disabled={cargando} 
          />
          {errors.apellidos && <span className="error-message">{errors.apellidos}</span>}
        </div>
        
        {/* Documento de identidad (NUEVO) */}
        <div className="form-group">
          <label htmlFor="documento">Documento de identidad *</label>
          <input 
            type="text" 
            id="documento" 
            name="documento" 
            value={formData.documento}
            onChange={handleChange}
            className={errors.documento ? 'input-error' : ''}
            disabled={cargando} 
          />
          {errors.documento && <span className="error-message">{errors.documento}</span>}
        </div>

        {/* Número de Celular */}
        <div className="form-group">
          <label htmlFor="celular">Número de Celular *</label>
          <input 
            type="tel" 
            id="celular" 
            name="celular" 
            placeholder="Ej: 3001234567"
            value={formData.celular}
            onChange={handleChange}
            className={errors.celular ? 'input-error' : ''}
            disabled={cargando}
          />
          {errors.celular && <span className="error-message">{errors.celular}</span>}
        </div>

        {/* Empresa (Etiqueta actualizada) */}
        <div className="form-group">
          <label htmlFor="empresa">Nombre de la Empresa o Institución Educativa o Entidad Pública *</label>
          <input 
            type="text" 
            id="empresa" 
            name="empresa" 
            value={formData.empresa}
            onChange={handleChange}
            className={errors.empresa ? 'input-error' : ''}
            disabled={cargando}
          />
          {errors.empresa && <span className="error-message">{errors.empresa}</span>}
        </div>
        
        {/* NIT de la empresa (NUEVO - Opcional) */}
        <div className="form-group">
          <label htmlFor="nit">NIT de la empresa (si aplica)</label>
          <input 
            type="text" 
            id="nit" 
            name="nit" 
            value={formData.nit}
            onChange={handleChange}
            disabled={cargando}
          />
        </div>

        {/* Cargo (Etiqueta actualizada - ahora obligatorio) */}
        <div className="form-group">
          <label htmlFor="cargo">Cargo o Rol *</label>
          <input 
            type="text" 
            id="cargo" 
            name="cargo" 
            value={formData.cargo}
            onChange={handleChange}
            className={errors.cargo ? 'input-error' : ''}
            disabled={cargando}
          />
          {errors.cargo && <span className="error-message">{errors.cargo}</span>}
        </div>

        {/* Cómo te enteraste (NUEVO - Select) */}
        <div className="form-group">
          <label htmlFor="comoSeEntero">¿Cómo te enteraste de la conferencia? *</label>
          <select 
            id="comoSeEntero" 
            name="comoSeEntero" 
            value={formData.comoSeEntero}
            onChange={handleChange}
            className={errors.comoSeEntero ? 'input-error' : ''}
            disabled={cargando}
            required
          >
            <option value="" disabled>Selecciona una opción...</option>
            <option value="Publicidad en Redes Sociales">Publicidad en Redes Sociales</option>
            <option value="Un amigo">Un amigo</option>
            <option value="Empresa">Empresa</option>
            <option value="Por medio de un volante">Por medio de un volante</option>
            <option value="Por un Correo Electrónico">Por un Correo Electrónico</option>
            <option value="Otro">Otro</option>
          </select>
          {errors.comoSeEntero && <span className="error-message">{errors.comoSeEntero}</span>}
        </div>

        <button type="submit" className="form-submit-btn" disabled={cargando}>
          {cargando ? 'Enviando...' : 'Inscribirme Ahora'}
        </button>
      </form>

      <Modal isOpen={enviado} onClose={handleCloseModal}>
        <h2>¡Inscripción Exitosa!</h2>
        <p>Gracias, estaremos enviando info del evento.</p>
      </Modal>

    </div>
  );
}

export default FormularioInscripcionE;