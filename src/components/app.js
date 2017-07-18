import React from 'react';
import './app.css';
import Navbar from './navbar';
import Footer from './footer';

const App = () => (
    <div>
        <Navbar />
        <div className="app">
            <h1>Welcome to Couch Pugtato!</h1>
        </div>
        <Footer />
    </div>
);

export default App;
