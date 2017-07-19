import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
import { fetchMedia } from '../actions/index';
import { connect } from 'react-redux';

class MediaPanel extends Component {
    componentDidMount() {
        this.props.fetchMedia();
    }
    renderMedia(){
        if(!this.props.media){
            console.log('hits if statement');
            return <div>Loading...</div>
        }
        console.log('MediaPanel this.props.media', this.props.media);
        const { title, overview, poster_path } = this.props.media.data;
        return(
            <Panel header="What to Watch" className='text-center'>
                <h2>{title}</h2>
                <img src={'https://image.tmdb.org/t/p/w300_and_h450_bestv2' + poster_path}/>
                <p>{overview}</p>
            </Panel>
        )
    }
    render() {
        return (
            <div>
                {this.renderMedia()}
            </div>
        )
    }
};

function mapStateToProps(state){
    console.log('map state media test', state.media.list);
    return {
        media: state.media.list
    }
}

export default connect(mapStateToProps, {fetchMedia})(MediaPanel);



