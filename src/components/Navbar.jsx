import React from 'react'

//Styles
import Navbar from '@styles/navbar.scss'

const Navbar = () => { 

    return (
        <nav className="w-full h-12 hidden bg-tinto lg:flex p-4 justify-between items-center fixed z-50 dark:bg-gray-800 dark rounded-b-md">
            <div className="h-auto w-auto">
                <p className="text-xl text-white font-black pl-1">LA CRUZANA RESTAURANTE</p>
            </div>
            <div className="flex space-x-8">
                <a className="font-bold text-md text-ebano hover:text-black dark:text-white dark:hover:text-carmesi" href="#home">Inicio</a>
                <a className="font-bold text-md text-ebano hover:text-black dark:text-white dark:hover:text-carmesi" href="#popular">Populares</a>
                <a className="font-bold text-md text-ebano hover:text-black dark:text-white dark:hover:text-carmesi" href="#recomended">Selección del chef</a>
                <a className="font-bold text-md text-ebano hover:text-black dark:text-white dark:hover:text-carmesi" href="#faqs">Dudas</a>
                <a className="font-bold text-md text-ebano hover:text-black dark:text-white dark:hover:text-carmesi" href="#aboutus">Nosotros</a>
            </div>
            <div className="flex space-x-4">
                <svg width="21" height="21" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="fill-current text-primary hover:text-black  dark:hover:text-black" fill-rule="evenodd" clip-rule="evenodd" d="M6 1.99997C4.93913 1.99997 3.92172 2.4214 3.17157 3.17155C2.42143 3.92169 2 4.93911 2 5.99997C2 7.06084 2.42143 8.07825 3.17157 8.8284C3.92172 9.57855 4.93913 9.99997 6 9.99997C7.06087 9.99997 8.07828 9.57855 8.82843 8.8284C9.57857 8.07825 10 7.06084 10 5.99997C10 4.93911 9.57857 3.92169 8.82843 3.17155C8.07828 2.4214 7.06087 1.99997 6 1.99997ZM1.13461e-07 5.99997C-0.00012039 5.05568 0.222642 4.12468 0.650171 3.28271C1.0777 2.44074 1.69792 1.71157 2.4604 1.1545C3.22287 0.597426 4.10606 0.228185 5.03815 0.0768059C5.97023 -0.0745733 6.92488 -0.00381595 7.82446 0.283323C8.72404 0.570462 9.54315 1.06587 10.2152 1.72927C10.8872 2.39266 11.3931 3.20531 11.6919 4.10111C11.9906 4.9969 12.0737 5.95056 11.9343 6.88452C11.795 7.81848 11.4372 8.70637 10.89 9.47597L15.707 14.293C15.8892 14.4816 15.99 14.7342 15.9877 14.9964C15.9854 15.2586 15.8802 15.5094 15.6948 15.6948C15.5094 15.8802 15.2586 15.9854 14.9964 15.9876C14.7342 15.9899 14.4816 15.8891 14.293 15.707L9.477 10.891C8.57936 11.5293 7.52335 11.9081 6.42468 11.9861C5.326 12.0641 4.22707 11.8381 3.2483 11.3329C2.26953 10.8278 1.44869 10.063 0.875723 9.12232C0.30276 8.18165 -0.000214051 7.10141 1.13461e-07 5.99997Z" fill="#3F3F46"/>
                </svg>
                <button id="toggle">
                    <svg width="21" height="21" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className="fill-current text-primary hover:text-black  dark:hover:text-white " d="M15.293 11.293C13.8115 11.9631 12.161 12.1658 10.5614 11.8742C8.96175 11.5826 7.48895 10.8105 6.33919 9.66079C5.18944 8.51104 4.41734 7.03824 4.12574 5.4386C3.83415 3.83897 4.03691 2.18846 4.70701 0.70697C3.52758 1.23998 2.49505 2.05117 1.69802 3.07093C0.900987 4.09069 0.363244 5.28859 0.130924 6.56186C-0.101395 7.83512 -0.0213565 9.14574 0.364174 10.3813C0.749705 11.6168 1.42922 12.7404 2.34442 13.6556C3.25961 14.5708 4.38318 15.2503 5.61871 15.6358C6.85424 16.0213 8.16486 16.1014 9.43813 15.8691C10.7114 15.6367 11.9093 15.099 12.9291 14.302C13.9488 13.5049 14.76 12.4724 15.293 11.293Z" fill="#3F3F46"/>
                    </svg>
                </button>
                <svg  width="21" height="21" fill="none" viewBox="4 2 16 16" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" stroke-width="2" >
                    <path className="fill-current text-gray-300 hover:text-primary dark:text-primary dark:hover:text-black" stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
            </div>
        </nav>
    );
}

export default Navbar; 