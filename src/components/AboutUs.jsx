import React from 'react'

const AboutUs = () => {
    return(
        <div className="w-full h-auto mb-12 mt-12" id="history">
            <div className="w-full h-full px-6 flex-col space-y-4">
                <p className="text-3xl text-primary font-semibold mt-6">Nuestra historia</p>
                <div>
                    <p className="text.xl font-semibold text-primary">Una visión al futuro</p>
                    <p className="text-md pt-2 dark:text-white">Contamos con estancias de hasta 3 meses, en este caso es requerido un anticipo con un monto del 50% del valor de la renta.</p>
                </div>
                <div>
                    <p className="text.xl font-semibold text-primary">Grandes escalones, pequeños pasos</p>
                    <p className="text-md pt-2 dark:text-white">Contamos con el servicio de decoración para fechas especiales, con reserva mínima de 5 días calendario. Términos y condiciones.</p>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;