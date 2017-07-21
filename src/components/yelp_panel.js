import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
 
class Yelp extends Component {

    renderYelpData() {
        console.log('rendering yelp data');
        return(
            <Panel header="What To Eat" bsStyle="danger">
                <h2>Test</h2>
                Panel Content Test
            </Panel>
        )
    }

    render() {
        return (
            <div>
                { this.renderYelpData() }
            </div>
        )
    }
}

export default Yelp;
