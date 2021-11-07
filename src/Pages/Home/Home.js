import React from 'react';
import AskedQuestion from '../../AskedQuetion/AskedQuestion';
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
            <AskedQuestion></AskedQuestion>
        </div>
    );
};

export default Home;