import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Panel } from 'react-bootstrap';
import { yelpData } from '../actions/index';
 
class Yelp extends Component {
    constructor(props){
        super(props);
        this.state = {restaurant: 0};
    }

    handlePrevious(decrease) {
        if(decrease === 0){
            decrease = this.props.yelp.data.businesses.length
        }
        this.setState({restaurant: --decrease});
        this.renderYelpData();
    }

    handleNext(increase) {
        if(increase === this.props.yelp.data.businesses.length -1){
            increase = -1;
        }
        this.setState({restaurant: ++increase});
        this.renderYelpData();
    }

    renderYelpData() {
        if(!this.props.yelp) {
            console.log('renderYelpData method hit');
            return <div>Woomp Woomp No Food... </div>
        }
        console.log('yelp data', this.props.yelp.data);
      
        const { name, display_phone, image_url, price, rating, url } = this.props.yelp.data.businesses[this.state.restaurant];
        const { address1, city, state, zip_code } = this.props.yelp.data.businesses[this.state.restaurant].location;
        const { title } = this.props.yelp.data.businesses[this.state.restaurant].categories["0"]
        console.log({title});
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
                    {` Contact Number: ${display_phone}`}
                </div>
                <div className="y-data">
                    {` Yelp Rating: ${rating} | Category: ${title} | Price: ${price} ` } 
                </div>
                <div>
                    
                </div>

                <btn className="btn btn-warning" onClick={() => this.handlePrevious(this.state.restaurant)}><i className="glyphicon glyphicon-chevron-left"/>  Previous</btn>
                <btn className="btn btn-info" onClick={() => this.handleNext(this.state.restaurant)}>  Next<i className="glyphicon glyphicon-chevron-right"/></btn>
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
