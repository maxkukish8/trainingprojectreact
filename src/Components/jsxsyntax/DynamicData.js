import React from 'react';

const dynData = () => {
    return (
        <div>
            <p>This is Dynamic Data Component</p>
            <p>Number: <strong>{Math.round(Math.random() * 100)}</strong></p>
            <p><strong>{1 + 1}</strong></p>
        </div>
        )

}

export default dynData;