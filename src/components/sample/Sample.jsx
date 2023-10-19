import React, { useState } from 'react'

const Sample = () => {
    const [embedded, setEmbedded] = useState(false);

    const openPaperform = (embedType) => {
        const script = document.createElement('script');
        script.src = 'https://paperform.co/__embed.min.js';
        script.async = true;

        const div = document.createElement('div');
        div.setAttribute('data-paperform-id', 'soulsync');

        if (embedType === 'fullscreen') {
            div.setAttribute('data-takeover', '1');
        }
        else if (embedType === 'popup') {
            div.setAttribute('data-popup-button', '1');
        }

        document.body.appendChild(div);
        document.body.appendChild(script);
        setEmbedded(true);
    };

    return (
        <h2>
            <h2>Welcome to My Form</h2>
            <h2 onClick={() => openPaperform('inline')}>Inline</h2>
        </h2>
    );
};


export default Sample