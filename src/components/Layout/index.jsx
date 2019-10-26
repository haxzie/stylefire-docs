import React from 'react'
import Header from '../Header';

function Layout({ children }) {
    return (
        <div style={{
            position: `relative`,
            height: `100%`
        }}>
            <Header/>
            { children }
        </div>
    )
}

export default Layout
