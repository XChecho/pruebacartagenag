import React from 'react'

const AboutUs = () => {
    return(
        <div className="w-full h-auto mb-12 mt-12" id="history">
            <div className="w-full h-full px-6 flex-col space-y-4">
                <p className="text-3xl text-primary font-semibold mt-6">Nuestra historia</p>
                <div>
                    <p className="text.xl font-semibold text-primary">Un sueño que nace</p>
                    <p className="text-md pt-2 dark:text-white">Somos una tienda online que desde hace año y medio empezó con el sueño de cambiar la manera que la gente podía conseguir sus productos favoritos. Enseñando a la gente lo fácil de comprar online.</p>
                </div>
                <div>
                    <p className="text.xl font-semibold text-primary">Grandes escalones, pequeños pasos</p>
                    <p className="text-md pt-2 dark:text-white">Contamos con servicio contraentrega para todos nuestros productos. También contamos con pago mediante todas las tarjetas de crédito, pago PSE y transferencias Nequi</p>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;