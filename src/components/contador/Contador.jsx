import React, { useState, useEffect } from 'react';

function Contador() {
  // Utilizamos el estado para almacenar el tiempo restante
  const [tiempoRestante, setTiempoRestante] = useState({
    dias:0,
    horas:0,
    minutos:0,
    segundos:0

  });

  useEffect(() => {
    // Definimos la función para actualizar el tiempo restante
    const actualizarTiempoRestante = () => {
      // Definimos el tiempo de inicio (en este caso, la fecha de cumpleaños)
      const inicioCumple = new Date('April 22, 2024 00:00:00').getTime();
      // Definimos el tiempo actual en milisegundos
      const tiempoActual = new Date().getTime();
      // Calculamos el tiempo restante
      let tiempoRestante = inicioCumple - tiempoActual;

      

      // Convertimos el tiempo restante a segundos
      tiempoRestante /= 1000;
      // Calculamos días, horas, minutos y segundos
      const dias = Math.floor(tiempoRestante / (60 * 60 * 24));
      const horas = Math.floor((tiempoRestante % (60 * 60 * 24)) / (60 * 60));
      const minutos = Math.floor((tiempoRestante % (60 * 60)) / 60);
      const segundos = Math.floor(tiempoRestante % 60);
      // Actualizamos el estado con el tiempo restante
      setTiempoRestante({ dias, horas, minutos, segundos });
    };

    // Llamamos a la función de actualización al montar el componente
    actualizarTiempoRestante();

    // Configuramos un intervalo para actualizar el tiempo restante cada segundo
    const intervalo = setInterval(actualizarTiempoRestante, 1000);

    // Limpiamos el intervalo cuando el componente se desmonta
    return () => clearInterval(intervalo);
  }, []); 
  // Renderizamos el tiempo restante en el JSX
  return (
    <div className="contador">
    <h2 className="contador__titulo">Comienzo de mis 19 🫣</h2>
    <div className="contador__container">
      {tiempoRestante.dias > 0 && (
        <div className="contador__unidad contador__unidad--dias">
          {tiempoRestante.dias} días
        </div>
      )}
      {tiempoRestante.horas > 0 &&(
        <div className="contador__unidad contador__unidad--horas">
        {tiempoRestante.horas} horas
      </div>
      )}
      {tiempoRestante.minutos > 0 &&(
        <div className="contador__unidad contador__unidad--minutos">
        {tiempoRestante.minutos} minutos
      </div>
      )}
      {tiempoRestante.segundos > 0 &&(
        <div className="contador__unidad contador__unidad--segundos">
        {tiempoRestante.segundos} segundos
      </div>
      )}
    </div>
  </div>
  );
}

export default Contador;
