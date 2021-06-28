import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div className="footer bg-dark text-white" style={{marginTop:'15px',border:'4px solid blue'}}>
                <div className="text-center" style={{padding:'30px 0'}}>
                    <p>Copyright @ Your Website 2019</p>
                </div>
            </div>
        )
    }
}
