import React from 'react';
import './Interval.css';
import Card from './Card';
import { connect } from 'react-redux';

const random = (props) => {
    const { min, max } = props;
    const random = parseInt(Math.floor(Math.random() * (max - min)) + min);
        
    return (
        <Card title='Number randomly picked in interval' purple>
            <div className='Random'>
                <span>
                    <strong>Result: </strong>
                    <strong>{random}</strong>
                </span>
            </div>
        </Card>
    );
};

const mapStateToProps = (state) => {
    return {
        min: state.numbers.min,
        max: state.numbers.max
    }
}

export default connect(mapStateToProps)(random);