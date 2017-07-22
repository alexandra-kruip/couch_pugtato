import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { yelpData, fetchMedia } from '../actions';
import { Link } from 'react-router-dom'

class Splash extends Component {
    onFormSubmit(value) {
        this.props.fetchMedia(value);
        this.props.yelpData(value).then(() => {
            this.props.history.push('/home');
        })
    }
    
    renderField(field) {
        const { meta: {touched, error} } = field;
        const className = `form-group ${touched && error ? 'has-error has-feedback' : ''}`;
        
        return(
            <div className={className}>
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
            <div>
                <Field
                    name='address'
                    placeholder='e.g. 9200 Irvine Center Drive, Irvine, CA'
                    component={this.renderField}
                />
                <Field
                    name='genre'
                    placeholder='Genre'
                    component={this.renderField}
                />
                <button to='/home' className='btn btn-primary' onClick={handleSubmit((value) => this.onFormSubmit(value))}>Submit</button>
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