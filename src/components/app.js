import React, { Component } from 'react';
import { connect } from 'react-redux';
import './app.css';
import Navbar from './navbar';
import Footer from './footer';
import Grid from './grid';
import VideoList from './videolist';

class App extends Component {
    render() {
        console.log('from app', this.props.youtubeBoolean)
        return(
            <div>
                <Navbar /> 
                <div className="app">
                    <h1>Welcome to Couch Pugtato!</h1>
                </div>
                <Grid />
                <VideoList show={!this.props.youtubeBoolean} />
                <Footer /> 
            </div>
        )
    }
};

function mapStateToProps(state) {
    return{
        youtubeBoolean: state.youtubeBoolean.youtubeBoolean,
    }
}

export default connect(mapStateToProps)(App);