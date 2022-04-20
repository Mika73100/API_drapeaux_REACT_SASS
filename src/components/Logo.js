import React from 'react';

const Logo = () => {
    return (
        <div className='logo'>
        {/* Les images importer depuis la balise img sont accessobles dans public , chemin d acces */}
            <img src='./logo192.png' alt='logo react'   />
            <h3>React World</h3>
        </div>
    );
};

export default Logo;