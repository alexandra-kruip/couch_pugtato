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
        const { title, overview, poster_path, vote_average, genre_ids, release_date } = this.props.media.data.results[4];
        return(
            <Panel header="What to Watch" className='text-center'>
                <h2>{title}</h2>
                <img src={'https://image.tmdb.org/t/p/w300_and_h450_bestv2' + poster_path}/>
                <h4>Rating: <i className="glyphicon glyphicon-star"/>{vote_average}</h4>
                <p>{genre_ids}</p>
                <p>Release Date: {release_date}</p>
                <p>{overview}</p>

                <btn className="btn btn-warning"><i className="glyphicon glyphicon-chevron-left"/>Previous</btn>
                <btn className="btn btn-info">Next<i className="glyphicon glyphicon-chevron-right"/></btn>
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



