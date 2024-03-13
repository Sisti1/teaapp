import React from 'react';
import './OvalContainer.css';

const OvalContainer = ({ children }) => {
    return (
        <div className="oval-container">
            <div className="text">{children}</div>
        </div>
    );
}

export default OvalContainer;