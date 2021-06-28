import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div className="bg-dark text-white" style={{border:'4px solid yellow'}}>
                <p style={{marginLeft: '17px',marginBottom: '-30px',paddingTop:'10px'}} >Start Bootstrap</p>
                <ul className="nav justify-content-end">
                    <li className="nav-item">
                        <a className="nav-link active text-white" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" style={{color:'#6c757d'}} href="#">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" style={{color:'#6c757d'}} href="#">Services</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#">Contact</a>
                    </li>
                </ul>
            </div>
        )
    }
}
