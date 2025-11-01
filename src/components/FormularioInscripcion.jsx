import React, { useState } from 'react';
import '../styles/Formulario.css';
import '../styles/Modal.css'; // 1. Importa los estilos del Modal

// --- ¡IMPORTACIONES NUEVAS! ---
import Modal from './Modal'; // 2. Importa el componente Modal
import { dbClient } from '../aws-config'; 
import { PutItemCommand } from "@aws-sdk/client-dynamodb";
import { marshall } from "@aws-sdk/util-dynamodb";
// ------------------------------

function FormularioInscripcion() {
  const [enviado, setEnviado] = useState(false); // Usaremos 'enviado' para mostrar/ocultar el modal
  const [cargando, setCargando] = useState(false); 
  
  const [formData, setFormData] = useState({
    nombre: '',
    celular: '',
    email: '',
    empresa: '',
    cargo: '',
    ciudad: '',
  });

  const [errors, setErrors] = useState({});

  // ... (Las funciones handleChange y validateForm se quedan igual) ...
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
    if (!formData.celular.trim()) newErrors.celular = 'Campo obligatorio';
    if (!formData.email.trim()) newErrors.email = 'Campo obligatorio';
    if (!formData.empresa.trim()) newErrors.empresa = 'Campo obligatorio';
    
    if (formData.email.trim() && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'email electrónico no válido';
    }
    
    return newErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); 
    const newErrors = validateForm(); 
    setErrors(newErrors); 

    if (Object.keys(newErrors).length === 0) {
      setCargando(true); 
      
      try {
        const item = {
          email: formData.email, 
          nombre: formData.nombre,
          celular: formData.celular,
          empresa: formData.empresa,
          cargo: formData.cargo || 'No especificado', 
          ciudad: formData.ciudad || 'No especificada', 
          fechaInscripcion: new Date().toISOString(),
          pauta:true
        };

        const command = new PutItemCommand({
          TableName: "InscripcionesEvento", 
          Item: marshall(item), 
        });

        await dbClient.send(command);

        setEnviado(true); // 3. Esto ABRIRÁ el modal

      } catch (error) {
        console.error('Error al guardar en DynamoDB:', error);
        alert("Hubo un error al enviar tu inscripción. Por favor, intenta de nuevo.");
      } finally {
        setCargando(false); // Quita el estado de carga (en éxito o error)
      }

    } else {
      console.log('Errores de validación:', newErrors);
    }
  };

  // 4. Nueva función para cerrar el modal Y resetear el formulario
  const handleCloseModal = () => {
    setEnviado(false); // Cierra el modal
    // Resetea el formulario
    setFormData({
      nombre: '',
      celular: '',
      email: '',
      empresa: '',
      cargo: '',
      ciudad: '',
    });
    setErrors({}); // Limpia los errores
  };

  // 5. ¡ELIMINAMOS EL BLOQUE if (enviado) { ... } DE AQUÍ!

  return (
    // 6. El 'div' del formulario ahora es la vista principal
    <div className="form-container">
      <h1 className="form-title">Formulario de Inscripción</h1>
      <p className="form-subtitle">
        Inscríbete gratis al VIII Conferencia Internacional y Workshop.
      </p>

      <form className="inscripcion-form" onSubmit={handleSubmit} noValidate>
        
        {/* ... (Todos tus inputs del formulario se quedan igual) ... */}
         {/* Nombres y Apellidos */}
        <div className="form-group">
          <label htmlFor="nombre">Nombres y Apellidos *</label>
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

        {/* email */}
        <div className="form-group">
          <label htmlFor="email">email Electrónico *</label>
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

        {/* Empresa */}
        <div className="form-group">
          <label htmlFor="empresa">Empresa *</label>
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

        {/* Cargo (Opcional) */}
        <div className="form-group">
          <label htmlFor="cargo">Cargo</label>
          <input 
            type="text" 
            id="cargo" 
            name="cargo" 
            value={formData.cargo}
            onChange={handleChange}
            disabled={cargando}
          />
        </div>

        {/* Ciudad (Opcional) */}
        <div className="form-group">
          <label htmlFor="ciudad">Ciudad</label>
          <input 
            type="text" 
            id="ciudad" 
            name="ciudad" 
            value={formData.ciudad}
            onChange={handleChange}
            disabled={cargando}
          />
        </div>

        <button type="submit" className="form-submit-btn" disabled={cargando}>
          {cargando ? 'Enviando...' : 'Inscribirme Ahora'}
        </button>
      </form>

      {/* 7. AÑADIMOS EL MODAL AQUÍ */}
      {/* Se mostrará solo cuando 'enviado' sea true */}
      <Modal isOpen={enviado} onClose={handleCloseModal}>
        <h2>¡Inscripción Exitosa!</h2>
        <p>Gracias, estaremos enviando info del evento.</p>
      </Modal>

    </div>
  );
}

export default FormularioInscripcion;