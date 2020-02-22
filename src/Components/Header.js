import React from 'react';

const Header = () => {

    const headerStyle = {
        width: '100%',
        display: 'flex',
        height: '100px',
        gridColumnEnd: 'span 8',
        backgroundColor: 'brown',
        justifyContent: 'center',
        alignItems: 'center'
    }

    const headerTitleStyle = {
        fontFamily: 'mono45-headline,monospace',
        margin: 0,
        fontSize: '100px',
        fontWeight: '400',
        fontStyle: 'normal',
        color: "white",
        opacity: "0.5",
    }

    return(
        <div style={headerStyle}>
            <h1 style={headerTitleStyle}>EQUIPS</h1>
        </div>
    )
}

export default Header