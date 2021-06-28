import React, { Component } from 'react'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'
export default class BaiTapReactBuoi2 extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <Header />
                    </div>
                </div>
                <div className="container">
                    <Body />
                </div>
                <div className="row">
                    <div className="col-12">
                        <Footer />
                    </div>
                </div>
            </div>
        )
    }
}
