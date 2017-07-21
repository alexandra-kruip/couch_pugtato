import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Panel } from 'react-bootstrap';
import { yelpData } from '../actions/index';
 
class Yelp extends Component {
    componentDidMount() {
        this.props.yelpData();

    }

    renderYelpData() {
        if(!this.props.yelp) {
            console.log('renderYelpData method hit');
            return <div>Woomp Woomp No Food... </div>
        }
        console.log('yelp data', this.props.yelp.data);
        const { name, display_phone, image_url, price, rating, url } = this.props.yelp.data.businesses[0];
        const { address1, city, state, zip_code } = this.props.yelp.data.businesses[0].location;
        return(
            <Panel header="What To Eat" bsStyle="danger" className="text-center">
                <a href={url} target="_blank"><h2>{name}</h2></a>
                <img src={image_url} className="img-responsive" alt="food_location"/>
                <div className="y-data">
                    <span className="glyphicon glyphicon-map-marker" aria-hidden="true"></span>
                    {`${address1} ${city}, ${state}, ${zip_code}`}
                </div>
                <div className="y-data">
                    <span className="glyphicon glyphicon-phone-alt" aria-hidden="true"></span>
                    {display_phone}
                </div>
                <div className="y-data">
                    <span className="glyphicon glyphicon-heart" aria-hidden="true"></span>
                    {rating}
                </div>                
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

function mapStateToProps(state) {
    console.log('yelp mapStateToProps', state.yelp.data);
    return {
        yelp: state.yelp.data
    }
}

export default connect(mapStateToProps, {yelpData})(Yelp);
