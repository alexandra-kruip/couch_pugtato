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
        console.log('this.prop', this.props);
    }

    render() {
        return (
            <div>
                <Panel header="What to Watch" className='text-center'>
                </Panel>
            </div>
        )
    }
};

function mapStateToProps(state){
    console.log('map state media test', state.media);
    return {
        media: state.media.list
    }
}

export default connect(mapStateToProps, {fetchMedia})(MediaPanel);



