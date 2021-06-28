import React, { Component } from 'react'

export default class DataBinding extends Component {



    renderProduct = () => {

        return <div>
            abcdef
        </div>

    }



    //Phương thức render
    render() {

        let hoTen = 'Nguyễn Văn A'
        let product = {
            id:1,
            name:'IPHONE X',
            price:1000,
            img:'http://picsum.photos/200/200'
        }



        return (
            <div className="container">
                <p id="txtHoTen">Họ tên: {hoTen}</p>
                <div className="w-25 mt-2">
                    <div className="card">
                        <img src={product.img} alt='...' />
                        <div className="card-body">
                            <p>{product.name}</p>
                            <p>{product.price}</p>
                        </div>
                        <div className="card-footer bg-dark text-white">
                            <button className="btn btn-success">Đặt mua</button>
                        </div>
                    </div>
                </div>
                {this.renderProduct()}
            </div>
        )
    }
}
