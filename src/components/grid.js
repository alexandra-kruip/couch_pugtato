import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import MoviePanel from './media_panel';
import YelpPanel from './yelp_panel';

const grid = () => {
    return (
        <Grid>
            <Row className="show-grid">
                <Col sm={12} md={6} >
                    <MoviePanel />
                </Col>
                <Col sm={12} md={6} >
                    <YelpPanel />
                </Col>
            </Row>
        </Grid>
    )
    
}

export default grid;