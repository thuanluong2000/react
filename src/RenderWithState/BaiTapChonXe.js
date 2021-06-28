import React, { Component } from 'react'

//Import 'đường dẫn css': Ảnh hưởng toàn bộ ứng dụng
import './BaiTapChonXe.css'
//Import cách 2
import style from './BaiTapChonXe.module.css';
export default class BaiTapChonXe extends Component {

    /* 
        Các bước thực hành bài tập react
        1/ Dàn layout chia component
        2/ Xác định state: Xác định thành phần thanh đổi trên giao diện là gì ? (src, innerHTML, value,...) ? Dùng kiểu dữ liệu nào để lưu trữ (string, number, array, object,...) nó.
        3/ Xử lý setState làm thay đổi giá trị đó cài đặt vào các event (onclick, onchange, onblur).
    */


    state = {
        imgSrc: "./img/CarBasic/products/red-car.jpg"
    }

    handleChangeColor = (color) => {
        this.setState({
            imgSrc:`./img/CarBasic/icons/${color}-car.jpg`
        })
    }


    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <img className="w-100" src={this.state.imgSrc} alt="..." />
                    </div>
                    <div className="col-6">
                        <div className="card">
                            <div className={`card-header ${style['text-green']}`}>Exterior</div>
                            <div className="card-body">
                                <div className="row mt-2 border border-dark p-2" style={{ cursor: 'pointer' }}>
                                    <div className="col-2">
                                        <img className="w-100" src="./img/CarBasic/icons/icon-black.jpg" />
                                    </div>
                                    <div className="col-10 d-flex" style={{ justifyContent: 'start', alignItems: 'center' }} onClick={() => {
                                        this.setState({
                                            imgSrc: "./img/CarBasic/products/black-car.jpg"
                                        })
                                    }}>
                                        Black Color
                                    </div>
                                </div>

                                <div className="row mt-2 border border-dark p-2" style={{ cursor: 'pointer' }}>
                                    <div className="col-2">
                                        <img className="w-100" src="./img/CarBasic/icons/icon-red.jpg" />
                                    </div>
                                    <div className="col-10 d-flex" style={{ justifyContent: 'start', alignItems: 'center' }} onClick={() => {
                                        this.setState({
                                            imgSrc: "./img/CarBasic/products/red-car.jpg"
                                        })
                                    }}>
                                        Red Color
                                    </div>
                                </div>

                                <div className="row mt-2 border border-dark p-2" style={{ cursor: 'pointer' }}>
                                    <div className="col-2">
                                        <img className="w-100" src="./img/CarBasic/icons/icon-silver.jpg" />
                                    </div>
                                    <div className="col-10 d-flex" style={{ justifyContent: 'start', alignItems: 'center' }} onClick={() => {
                                        this.setState({
                                            imgSrc: "./img/CarBasic/products/silver-car.jpg"
                                        })
                                    }}>
                                        Silver Color
                                    </div>
                                </div>

                                <div className="row mt-2 border border-dark p-2" style={{ cursor: 'pointer' }}>
                                    <div className="col-2">
                                        <img className="w-100" src="./img/CarBasic/icons/icon-steel.jpg" />
                                    </div>
                                    <div className="col-10 d-flex" style={{ justifyContent: 'start', alignItems: 'center' }} onClick={() => {
                                        this.setState({
                                            imgSrc: "./img/CarBasic/products/steel-car.jpg"
                                        })
                                    }}>
                                        Steel Color
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer">Wheels</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
