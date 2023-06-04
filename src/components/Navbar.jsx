import React from 'react';
import '../style/normalize.css'
import '../style/Navbar.css'

export function Navbar({titulo}) {
    return (
        <div className='container-nav-people'>
            <h2 className='title'>{titulo}</h2>
        </div>
    )
}
