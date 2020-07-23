import React from 'react';
import './Interval.css';
import Card from './Card';
import { connect } from "react-redux";

const sum = (props) => {
    const { min, max } = props;

    return (
        <Card title='Sum average' green>
            <div className='Sum'>
                <span>
                    <strong>Result: </strong>
                    <strong>{min + max}</strong>
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

export default connect(mapStateToProps)(sum);