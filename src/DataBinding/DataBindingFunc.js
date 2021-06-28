import React from 'react'

export default function DataBindingFunc() {

    const title = 'Cybersoft';
    const renderImage = () =>{
        return <img src="http://picsum.photos/200/200" alt="..." />
    }
    return (
        <div className="container">
            <p>Tiêu đề: {title}</p>
            {renderImage()}
        </div>
    )
}
