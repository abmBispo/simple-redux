import React from 'react';
import './Interval.css';
import Card from './Card';

export default (props) => {
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