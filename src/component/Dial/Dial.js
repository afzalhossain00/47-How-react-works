import React from 'react';

const Dial = (props) => {
    return (
        <div style={{ border: '2px solid blue', margin: '20px' }}>
            <h3>This is dial: {props.steps} </h3>
        </div>
    );
};

export default Dial;