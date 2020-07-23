import React from 'react';
import './Interval.css';
import Card from './Card';
import { connect } from 'react-redux';

const average = (props) => {
    const { min, max } = props;

    return (
        <Card title='Numbers average' blue>
            <div className='Average'>
                <span>
                    <strong>Result: </strong>
                    <strong>{(max + min) / 2}</strong >
                </span>
            </div>
        </Card>
    );
};

const mapStateToProps = (state) => {
    return {
        min: state.numbers.min,
        max: state.numbers.max,
    }
}

export default connect(mapStateToProps)(average);