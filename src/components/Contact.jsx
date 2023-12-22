import { useState } from "react";
import Canvas2 from "./Canvas2";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Envía los datos del formulario por correo electrónico
    const { name, email, phone } = formData;
    const message = `Nombre: ${name}\nEmail: ${email}\nNúmero de teléfono: ${phone}`;

    try {
      await fetch("https://api.tu-servidor.com/enviar-correo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: "rios.bedoya.es@gmail.com",
          subject: "Nuevo mensaje de contacto",
          message,
        }),
      });
      alert("Mensaje enviado con éxito");
      // Puedes redirigir al usuario o realizar otras acciones después de enviar el formulario
    } catch (error) {
      console.error("Error al enviar el mensaje", error);
      alert("Ocurrió un error al enviar el mensaje");
    }
  };

  return (
    <div className="w-screen h-[600px] flex justify-center items-center mt-28">
      <form
        onSubmit={handleSubmit}
        className="bg-black text-white p-4 w-[360px] h-[700px]"
      >
        <div className="mb-4">
          <label htmlFor="name" className="block">
            Nombre:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 rounded border border-gold"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 rounded border border-gold"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block">
            Número de teléfono:
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full p-2 rounded border border-gold"
          />
        </div>
        <button type="submit" className="bg-gold text-black p-2 rounded">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Contact;
