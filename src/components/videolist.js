import React, { Component } from 'react';
import { connect } from 'react-redux';
import { youtubeSearch } from '../actions';

class YoutubeList extends Component {
    displayVideos() { 
        if(this.props.video.length <= 0) {
            console.log('if hit')
            return <div>Loading...</div>;
        }

        return this.props.video.map((video) => {
            const videoId = video.id.videoId;
            const url = `https://www.youtube.com/embed/${videoId}`;

            return(
                <div>
                    <div className="embed-responsive embed-responsive-16by9">
                        <iframe className="embed-responsive-item" src={url}></iframe>
                    </div>
                    <div className="details">
                        <div>{video.snippet.title}</div>
                        <div>{video.snippet.description}</div>
                    </div>
                </div>
            )
        });
    };

    render() {
        return(
            <div>
                {this.displayVideos()}
            </div>
        )
    };
};

function mapStateToProps(state) {
    return{
        video: state.youtube.videos
    };
};

export default connect(mapStateToProps, { youtubeSearch })(YoutubeList);