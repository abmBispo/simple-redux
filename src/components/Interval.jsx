import React from 'react';
import './Interval.css';
import Card from './Card';
import { connect } from "react-redux";
import { setMin, setMax } from '../store/actions/numbers';

const interval = (props) => {
    const { min, max } = props;

    return (
        <Card title='Number interval' red>
            <div className='Interval'>
                <span>
                    <strong>Minimum</strong>
                    <input
                        type="number"
                        name='minimum'
                        value={min}
                        onChange={(e) => props.changeMin(+e.target.value)} />
                </span>
                <span>
                    <strong>Maximum</strong>
                    <input
                        type="number"
                        value={max}
                        name="maximum"
                        onChange={(e) => props.changeMax(+e.target.value)} />
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

const mapDispatchToProps = (dispatch) => {
    return {
        changeMin: (newNumber) => {
            const action = setMin(newNumber);
            dispatch(action);
        },
        changeMax: (newNumber) => {
            const action = setMax(newNumber);
            dispatch(action);
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(interval);