import React from 'react'

function Icon({ size, type, children}) {
    return (
        <i className={`material-icons ${size? `md${size}`: ``}`}>
           {children} 
        </i>
    )
}

export default Icon
