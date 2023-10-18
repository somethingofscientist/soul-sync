import React, { useState } from 'react';

const Sample = () => {
    const [embedded, setEmbedded] = useState(false);

    const embedContent = () => {
        const script = document.createElement('script');
        script.src = 'https://paperform.co/__embed.min.js';
        script.async = true;

        const div = document.createElement('div');
        div.setAttribute('data-paperform-id', 'soulsync');
        div.setAttribute('data-takeover', '1');

        document.body.appendChild(div);
        document.body.appendChild(script);
        setEmbedded(true);
    };

    return (
        <div>
            <button onClick={embedContent}>
                <h1>Button</h1>
            </button>
        </div>
    );
};

export default Sample;