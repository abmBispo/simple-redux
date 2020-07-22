import React from 'react';
import './Interval.css';
import Card from './Card';

export default (props) => {
    return (
        <Card title='Number randomly picked in interval' purple>
            <div className='Random'>
                <span>
                    <strong>Result: </strong>
                    <strong>5</strong>
                </span>
            </div>
        </Card>
    );
};