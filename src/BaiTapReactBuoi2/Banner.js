import React, { Component } from 'react'

export default class Banner extends Component {
    render() {
        return (
            <div className="container">
                <div style={{marginTop:'20px'}}>
                    <div style={{ background: '#6c757d45',border: '4px solid #0014ff',padding:'11px'  }}>
                        <h2>A Warn Welcome !</h2>
                        <p style={{color:'#2125299c'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque doloribus, ipsum laboriosam consequuntur corporis expedita architecto ad, quod ipsam quibusdam eaque placeat, in dolore sapiente consectetur dolorum debitis molestiae vitae!</p>
                        <button className="btn btn-primary">Call to action!</button>
                    </div>
                </div>
            </div>
        )
    }
}
