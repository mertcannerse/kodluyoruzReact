import React from 'react'

function Footer() {
    const github = () => {
        const href = "https://github.com/mertcannerse";
        window.location.href = href
    }
    return (
        <div className="info">
	        <p>Created by <button onClick={github}>Mertcan Nerse</button></p>
        </div>
    )
}

export default Footer
