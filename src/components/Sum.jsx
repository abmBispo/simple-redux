import React from 'react';
import './Interval.css';
import Card from './Card';

export default (props) => {
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