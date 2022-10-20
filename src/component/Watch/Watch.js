import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Display from '../Display/Display';

const Watch = () => {
    const [steps, setSteps] = useState(0);

    const increaseSteps = () => {
        const newSteps = steps + 1;
        setSteps(newSteps)
    }

    useEffect(() => {
        console.log(steps);
    }, [steps])

    return (
        <div style={{ border: '2px solid red', margin: '20px' }}>
            <h2>This is my smart Watch</h2>
            <h3>My current steps: {steps}</h3>
            <button onClick={increaseSteps}>Run Man</button>
            <Display name="Titan" steps={steps}></Display>
        </div>
    );
};

export default Watch;