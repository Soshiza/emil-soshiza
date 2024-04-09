import React, { useState, useEffect } from "react";
import {
  getDocs,
  collection,
  addDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../config/firebase";
import '@/app/globals.css';
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { es } from "date-fns/locale";
import Image from "next/image";
import Header2 from '@/components/Header2';


const UID = process.env.NEXT_PUBLIC_FIREBASE_UID;
const paymentUrl = process.env.NEXT_PUBLIC_APP_PAYMENT_URL;

const BookingForm = () => {
  const [dates, setDates] = useState([]);
  const [services, setServices] = useState([]);
  const [selectedService, setSelectedService] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("");
  const [fullName, setFullName] = useState("");
  const [rut, setRut] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false); // Estado de la sumisión del formulario

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(
        collection(db, `clientes/${UID}/availableDates`)
      );
      const datesData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setDates(datesData);

      const serviceSnapshot = await getDocs(
        collection(db, `clientes/${UID}/services`)
      );
      const servicesData = serviceSnapshot.docs.map((doc) => doc.data().name);
      setServices(servicesData);
    };

    fetchData();
  }, []);

  const handleServiceChange = (event) => {
    setSelectedService(event.target.value);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    const selectedDateData = dates.find(
      (d) =>
        new Date(d.selectedDate).toISOString().split("T")[0] ===
        date.toISOString().split("T")[0]
    );
    if (selectedDateData && selectedDateData.times.length > 0) {
      setSelectedTime(selectedDateData.times[0]); // Set the first available time as the default
    } else {
      setSelectedTime(""); // Reset selected time when date changes
    }
  };

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handleRutChange = (event) => {
    let rut = event.target.value.replace(/\./g, "").replace("-", "");
    if (rut.length >= 7) {
      rut =
        rut.substring(0, rut.length - 1) + "-" + rut.substring(rut.length - 1);
    }
    if (rut.length >= 5) {
      rut =
        rut.substring(0, rut.length - 5) + "." + rut.substring(rut.length - 5);
    }
    if (rut.length >= 9) {
      rut =
        rut.substring(0, rut.length - 9) + "." + rut.substring(rut.length - 9);
    }
    setRut(rut);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneChange = (event) => {
    let phone = event.target.value;
    if (!phone.startsWith("+569")) {
      phone = "+569" + phone;
    }
    setPhone(phone);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await addDoc(collection(db, `clientes/${UID}/reservasPorConfirmar`), {
        fullName,
        rut,
        email,
        phone,
        service: selectedService,
        selectedDate:
          selectedDate.toISOString().split("T")[0] + "T00:00:00.000Z", // Formatted date string
        selectedTime,
      });

      const selectedDateData = dates.find(
        (date) =>
          new Date(date.selectedDate).toISOString().split("T")[0] ===
          selectedDate.toISOString().split("T")[0]
      );

      const dateDoc = doc(
        db,
        `clientes/${UID}/availableDates`,
        selectedDateData.id
      );
      await updateDoc(dateDoc, {
        times: selectedDateData.times.filter((time) => time !== selectedTime),
      });

      // Abre una nueva pestaña en el navegador con la URL de pago
      window.open(paymentUrl, "_blank");

      // Indica que el formulario ha sido enviado correctamente
      setSubmitted(true);
    } catch (error) {
      console.error("Error al guardar la reserva: ", error);
    }
  };

  const selectedDateData = dates.find(
    (date) =>
      new Date(date.selectedDate).toISOString().split("T")[0] ===
      selectedDate.toISOString().split("T")[0]
  );

  const tileClassName = ({ date, view }) => {
    const dateString = date.toISOString().split("T")[0];

    if (view === "month") {
      const dateData = dates.find(
        (d) =>
          new Date(d.selectedDate).toISOString().split("T")[0] === dateString
      );
      if (dateData && dateData.times.length > 0) {
        return "available-date";
      }
    }
  };

  if (submitted) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-center">
          <p className="text-lg font-semibold mb-2">¡Gracias por su reserva!</p>
          <p className="mb-2">
            Fue redirigido a una página de pago para la confirmación de la
            reserva.
          </p>
          <p className="mb-4">
            Una vez que el pago se haya efectuado, se enviarán los datos a su
            correo electrónico con la ubicación del servicio.
          </p>
          <div className="mb-4">
            <Image src="/check.png" width={100} height={100} alt="Check mark" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
    <Header2 />
    <div className="flex flex-wrap mt-28">
      <div className="w-full md:w-1/2 p-4 bg-white">
        <form onSubmit={handleSubmit} className="w-full">
          <div className="mb-4">
            <input
              type="text"
              value={fullName}
              onChange={handleFullNameChange}
              placeholder="Nombre Completo"
              className="w-full border border-gray-300 rounded-md px-3 py-2"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              value={rut}
              onChange={handleRutChange}
              placeholder="Ingrese Su RUT"
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Email"
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold">Teléfono:</label>
            <input
              type="tel"
              value={phone}
              onChange={handlePhoneChange}
              placeholder="Numero de Telefono sin +569"
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold">Servicio:</label>
            <select
              value={selectedService}
              onChange={handleServiceChange}
              required
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            >
              <option value="">Seleccione un servicio</option>
              {services.map((service, index) => (
                <option key={index} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <Calendar
              onChange={handleDateChange}
              value={selectedDate}
              locale={es}
              tileClassName={tileClassName}
              className="border border-gray-300 rounded-md px-3 py-2"
            />
          </div>
          {selectedDateData && (
            <div className="mb-4">
              <label className="block text-sm font-semibold">
                Horas Disponibles:
              </label>
              <select
                value={selectedTime}
                onChange={handleTimeChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2"
              >
                {selectedDateData.times.map((time, index) => (
                  <option key={index} value={time}>
                    {time}
                  </option>
                ))}
              </select>
            </div>
          )}
          <button
            type="submit"
            className="bg-rose-pale hover:text-white font-bold py-2 px-4 rounded transform transition-transform hover:scale-105"
          >
            Guardar y Pagar
          </button>
        </form>
      </div>
      <div className="w-full md:w-1/2 p-4 bg-gray-100">
        <div className="mt-4">
          <h3 className="text-lg font-bold mb-2">Condiciones de Reserva</h3>

          <div>
            <h4 className="text-md font-medium mb-1">1. Precio y Pago</h4>
            <p>
              El valor de la reserva es de 5.000 pesos chilenos para cualquier servicio. Este monto funciona como un abono y se descontará del precio final del servicio.
            </p>
            <p>
              Una vez procesado el pago, se confirmará la hora y se enviará la dirección del servicio, junto con los datos de la reserva.
            </p>
            <p>
              El pago se realiza a través de un link de Mercado Pago. Al confirmar el pago, es importante indicar el nombre de la persona que realiza el pago para verificar que coincida con la información de la reserva.
            </p>
          </div>

          <div>
            <h4 className="text-md font-medium mb-1">2. Cancelaciones</h4>
            <p>
              Si el cliente cancela la cita con más de 48 horas de anticipación, se le devolverá el dinero de la reserva.
            </p>
            <p>
              En caso de cancelar la cita dentro de las 48 horas previas al servicio, el dinero de la reserva no será devuelto. Este monto se retendrá como compensación por la hora reservada.
            </p>
          </div>

          <div>
            <h4 className="text-md font-medium mb-1">3. Modificaciones</h4>
            <p>
              Las modificaciones a la reserva, como cambio de fecha u hora, están sujetas a disponibilidad y pueden generar cargos adicionales.
            </p>
          </div>

          <div>
            <h4 className="text-md font-medium mb-1">4. No presentarse</h4>
            <p>
              Si el cliente no se presenta al servicio sin haber cancelado previamente, se retendrá el total del dinero de la reserva.
            </p>
          </div>

          <div>
            <h4 className="text-md font-medium mb-1">5. Datos Personales</h4>
            <p>
              Al realizar la reserva, el cliente proporciona datos personales como nombre, correo electrónico y número de teléfono. Esta información se utiliza únicamente para gestionar la reserva y el servicio, y no se compartirá con terceros sin el consentimiento del cliente.
            </p>
          </div>

          <div>
            <h4 className="text-md font-medium mb-1">6. Responsabilidad</h4>
            <p>
              El prestador del servicio no se hace responsable por daños o pérdidas de objetos personales del cliente durante el servicio.
            </p>
          </div>

          <div>
            <h4 className="text-md font-medium mb-1">7. Aceptación de las condiciones</h4>
            <p>
              Al realizar la reserva, el cliente acepta las presentes condiciones.
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default BookingForm;
