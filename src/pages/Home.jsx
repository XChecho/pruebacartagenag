import React from "react";

//components
import Banner from '@components/Banner';
import AboutUs from '@components/AboutUs';

//Containers
import HomeList from '@containers/HomeList';

const Home = () => {
    return (
        <div >
            <Banner />
            <HomeList />
            <AboutUs />
        </div>
    );
}

export default Home;