import React, { Component } from 'react'

export default class Card extends Component {





    render() {
        //Câu hỏi khi đi phỏng vấn: So sánh giữa this.state và this.props
        /*
            Giống nhau: Đều là thuộc tính có sẵn của react class component để chứa các giá trị cần
            render ra giao diện
            Khác nhau: 
            + State dùng để chứa các giá trị thay đổi khi người dùng thao tác trên giao diện.
            Props dùng để nhận giá trị từ component cha truyền vào
            + State có thể gán lại được giá trị mới bằng phương thức setState
            + Props không thể gán lại giá trị mới
        */
        //this.props là thuộc tính có sẵn của react class component
        // let tenSanPham = this.props.tenSanPham;
        // let gia = this.props.gia;
        let product = this.props.product;


        return (
            <div className="card bg-dark text-white">
                <img src={product.image} alt="..." />
                <div className="card-body">
                    <p className="font-weight-bold">{product.name}</p>
                    <p>{product.price}</p>
                </div>
            </div>
        )
    }
}
