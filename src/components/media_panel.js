import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
import { fetchMedia } from '../actions/index';
import { connect } from 'react-redux';
import { genre_decoder } from './helper_functions';
import { youtubeSearch, youtubeToggleTrue, youtubeToggleFalse } from '../actions/index'

class MediaPanel extends Component {
    componentDidMount() {
        this.props.fetchMedia();
    }

    constructor(props){
        super(props);
        this.state = {movie: 0};
    }

    handlePrevious(decrease) {
        if(decrease <= 0){
            return;
        }
        this.setState({movie: --decrease});
        this.props.youtubeToggleFalse();
        this.renderMedia();
    }

    handleNext(increase) {
        if(increase === 19){
            increase = 0;
        }
        this.setState({movie: ++increase});
        this.props.youtubeToggleFalse();
        this.renderMedia();
    }

    renderMedia(){
        if(!this.props.media){
            return <div>Loading...</div>
        }
        const resultsArr = this.props.media.data.results;
        console.log('this.props.media.data.results', resultsArr);


        const { title, overview, poster_path, vote_average, genre_ids, release_date } = resultsArr[this.state.movie];

        this.props.youtubeSearch({title});

        return(
            <Panel header="What to Watch" bsStyle="primary" className='text-center'>
                <h2>{title}</h2>
                <img src={'https://image.tmdb.org/t/p/w300_and_h450_bestv2' + poster_path}/>
                <h4>Rating: <i className="glyphicon glyphicon-star"/>{vote_average}</h4>
                <btn className="btn btn-primary" onClick={() => this.props.youtubeToggleTrue()}><i className="glyphicon glyphicon-play"/>  Show Trailers</btn>
                <p>Genres: {`${genre_decoder(genre_ids)}`}</p>
                <p>Release Date: {release_date}</p>
                <p>{overview}</p>

                <btn className="btn btn-warning" onClick={() => this.handlePrevious(this.state.movie)}><i className="glyphicon glyphicon-chevron-left"/>  Previous</btn>
                <btn className="btn btn-info" onClick={() => this.handleNext(this.state.movie)}>  Next<i className="glyphicon glyphicon-chevron-right"/></btn>
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

export default connect(mapStateToProps, {fetchMedia, youtubeSearch, youtubeToggleTrue, youtubeToggleFalse })(MediaPanel);



