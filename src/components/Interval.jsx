import React from 'react';
import './Interval.css';
import Card from './Card';

export default (props) => {
    const { min, max } = props;

    return (
        <Card title='Number interval' red>
            <div className='Interval'>
                <span>
                    <strong>Minimum</strong>
                    <input type="number" value={min} name='minimum' onChange={ (e) => props.onMinChanged(+e.target.value)} />
                </span>
                <span>
                    <strong>Maximum</strong>
                    <input type="number" value={max} name="maximum" onChange={ (e) => props.onMaxChanged(+e.target.value)} />
                </span>
            </div>
        </Card>
    );
};