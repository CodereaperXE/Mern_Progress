import React from 'react'
import "./Header.css"
function Header() {
    return (
        <div id="box">
            <h1>hello there</h1>
            <img id="image" src="data:image/jpeg;base64,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" alt="" />
        </div>
        
    );
};

export default Header;