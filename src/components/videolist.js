import React, { Component } from 'react';
import { connect } from 'react-redux';
import { youtubeSearch } from '../actions';

class YoutubeList extends Component {
    displayVideos() {
        if (this.props.video.length <= 0) {
            return <div>Loading...</div>;
        }

        if (!this.props.youtubeBoolean) {
            return (
                <div></div>
            )
        }

        console.log('from videolist', this.props.youtubeBoolean);

        return this.props.video.map((video) => {
            const videoId = video.id.videoId;
            const url = `https://www.youtube.com/embed/${videoId}`;

            return (
                <div className='row'>
                    <div className='col-xs-10 col-xs-offset-1' key={video.snippet.title}>
                        <div className="embed-responsive embed-responsive-16by9">
                            <iframe className="embed-responsive-item" src={url}></iframe>
                        </div>
                        <br/>
                    </div>
                </div>
            )
        });
    };

    render() {
        return (
            <div clasName='container'>
                {this.displayVideos()}
            </div>
        )
    };
};

function mapStateToProps(state) {
    return {
        video: state.youtube.videos,
        youtubeBoolean: state.youtubeBoolean.youtubeBoolean,
    };
};

export default connect(mapStateToProps, { youtubeSearch })(YoutubeList);