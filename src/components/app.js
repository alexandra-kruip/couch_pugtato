import React from 'react';
import './app.css';
import Navbar from './navbar';
import Footer from './footer';
import MediaPanel from './media_panel';
import VideoList from './videolist';

const App = () => (
    <div>
        <Navbar />
        <div className="app">
            <h1>Welcome to Couch Pugtato!</h1>
        </div>
        <MediaPanel />
        <VideoList />
        <Footer />
    </div>
);

export default App;