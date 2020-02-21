import React from "react";
import PropTypes from 'prop-types'
import spinner from '../assets/icons/loader.gif';
import { connect } from 'react-redux'

const Loader = ({ message, loading }) => {
    return (
        loading && (
            <div style={loaderStyles}>
                <img src={spinner} alt='Loader' style={{ height: '90vh', width: '100%', objectFit: 'contain' }} />
                <span style={{ position: 'absolute', top: '60%' }}>{message}</span>
            </div>
        )
    );
};

const loaderStyles = { display: 'flex', height: '100%', justifyContent: 'center', alignItems: 'center' }

Loader.propTypes = {
    message: PropTypes.string.isRequired,
}

Loader.defaultProps = {
    message: 'Loading...'
}

const mapStateToProps = ({ loading }) => ({
    loading
})

export default connect(mapStateToProps)(Loader);
