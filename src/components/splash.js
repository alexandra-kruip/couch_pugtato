import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { yelpData, fetchMedia } from '../actions';
import { Link } from 'react-router-dom'
import Pugtato from './imgs/pugtatoOnCouch.png';

class Splash extends Component {
    onFormSubmit(value) {
        this.props.fetchMedia(value);
        this.props.yelpData(value).then(() => {
            this.props.history.push('/home');
        })
    }
    
    renderField(field) {
        const { label, meta: {touched, error} } = field;
        const className = `form-group ${touched && error ? 'has-error has-feedback' : ''}`;
        
        return(
            <div className={className}>
                <label className="form-control-label">{field.label}</label>
                <input
                    type='text'
                    className='form-control '
                    placeholder={field.placeholder}
                    { ...field.input }
                />
            <div className='help-block with-errors'>
                { touched ? error : ''}
            </div>
            </div>
        );
    };
    
    render() {
        const { handleSubmit } = this.props;

        return(
            <div className="container splash-content">
                <div className="row splash-items">
                    <div className="col-sm-12">
                        <img className="pugtato" src={Pugtato} alt="pugtato"/>
                    </div>
                </div>
                <div className="row splash-form">
                    <div className="col-sm-12">
                        <Field
                            name='address'
                            label="Location"
                            placeholder='e.g. 9200 Irvine Center Drive, Irvine, CA'
                            component={this.renderField}
                            
                        />
                        <Field
                            name='genre'
                            placeholder='Enter Movie Type'
                            component={this.renderField}
                            label="Movie Genre"
                        />
                        <button to='/home' type="submit" className='btn btn-primary btn-block' onClick={handleSubmit((value) => this.onFormSubmit(value))}>Submit</button>
                    </div>
                </div>
            </div>    
        );
    };
};

function validate(values) {
    const errors = {};

    if(!values.address) {
        errors.address = 'Please enter a valid address.'
    };
    if(!values.genre) {
        errors.genre = 'Please enter a movie genre.'
    }

    return errors;
};

Splash = reduxForm({
    form: 'location_form',
    validate
})(Splash);

export default connect(null, { yelpData, fetchMedia })(Splash);