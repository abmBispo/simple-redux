import React from 'react';
import './Interval.css';
import Card from './Card';

export default (props) => {
    const { min, max } = props;

    return (
        <Card title='Numbers average' blue>
            <div className='Average'>
                <span>
                    <strong>Result: </strong>
                    <strong>{(min + max)/2}</strong>
                </span>
            </div>
        </Card>
    );
};