import React from 'react';
import './Interval.css';
import Card from './Card';

export default (props) => {
    return (
        <Card title='Number interval' red>
            <div className='Interval'>
                <span>
                    <strong>Minimum</strong>
                    <input type="number" value={0} name='minimum' readOnly />
                </span>
                <span>
                    <strong>Maximum</strong>
                    <input type="number" value={0} name="maximum" readOnly />
                </span>
            </div>
        </Card>
    );
};