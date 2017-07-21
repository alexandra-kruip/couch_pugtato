import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

const Footer = () => {
    const year = new Date().getFullYear();

    return(
        <Grid className='text-center'>
            <hr/>
            <Row >
                <Col xs={6}><a href='#' target='_blank'>About Us</a></Col>
                <Col xs={6}><a href='https://github.com/alexandra-kruip/couch_pugtato' target='_blank'>GitHub</a></Col>
            </Row>
            <Row>
                <Col xs={12}>Copyright © {year} Couch Pugtato</Col>
            </Row>
        </Grid>
    )
};

export default Footer;