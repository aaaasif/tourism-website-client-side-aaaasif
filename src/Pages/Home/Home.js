import React from 'react';
import Banner from './Banner/Banner';
import Revew from './Revew/Revew';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Banner/>
            <br />
            <Revew></Revew>
            <br />
            <Services />
            <br />
        </div>
    );
};

export default Home;