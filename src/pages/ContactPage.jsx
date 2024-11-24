import React, { useState } from 'react';
import './ContactPage.css';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [messages, setMessages] = useState([]); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Por favor, completa todos los campos.');
      return;
    }
    setMessages([...messages, formData]); 
    setFormData({ name: '', email: '', message: '' }); 
    alert('Mensaje enviado con éxito.');
  };

  return (
    <div className="contactPage">
      <h1>Contacto</h1>
      <form className="contactForm" onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Tu nombre"
          />
        </label>
        <label>
          Correo:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Tu correo electrónico"
          />
        </label>
        <label>
          Mensaje:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tu mensaje"
          />
        </label>
        <button type="submit">Enviar</button>
      </form>

      <h2>Registro de mensajes</h2>
      <ul className="messageList">
        {messages.map((msg, index) => (
          <li key={index}>
            <strong>De:</strong> {msg.name} ({msg.email})
            <br />
            <strong>Mensaje:</strong> {msg.message}
          </li>
        ))}
      </ul>
    </div>
  );
}
