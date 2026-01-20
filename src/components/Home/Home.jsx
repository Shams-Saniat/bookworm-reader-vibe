import React from 'react';
import Banner from '../Banner/Banner';
import Books from '../Books/Books';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>BookWorm | Home</title>
            </Helmet>
            <Banner />
            <Books />
        </div>
    );
};

export default Home;