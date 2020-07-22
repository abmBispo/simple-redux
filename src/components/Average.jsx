import React from 'react';
import './Interval.css';
import Card from './Card';

export default (props) => {
    return (
        <Card title='Numbers average' blue>
            <div className='Average'>
                <span>
                    <strong>Result: </strong>
                    <strong>5</strong>
                </span>
            </div>
        </Card>
    );
};