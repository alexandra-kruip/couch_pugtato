import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
import { fetchMedia } from '../actions/index';
import { connect } from 'react-redux';

class MediaPanel extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {
        this.props.fetchMedia();
    }

    render() {
        return (
            <div>
                <Panel header="What to Watch" className='text-center'>
                    <h2></h2>
                </Panel>
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



