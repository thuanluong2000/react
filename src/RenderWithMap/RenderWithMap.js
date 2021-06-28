import React, { Component } from 'react'

export default class RenderWithMap extends Component {

    arrProduct = [
        { id: 1, name: 'IPHONE XS MAX', price: 1000, img: 'https://picsum.photos/id/10/200/200' },
        { id: 2, name: 'IPHONE 11', price: 2000, img: 'https://picsum.photos/id/20/200/200' },
        { id: 3, name: 'IPHONE 11 PRO', price: 3000, img: 'https://picsum.photos/id/30/200/200' },
        { id: 4, name: 'IPHONE 11 PRO MAX', price: 4000, img: 'https://picsum.photos/id/40/200/200' },
    ]

    renderProduct = () => {


        //Cách 1:
        // let arrTagProduct = [];

        // for (let i=0;i<this.arrProduct.length;i++){
        //     let product = this.arrProduct[i];

        //     let tagJSX = <tr>
        //         <td>{product.id}</td>
        //         <td>{product.name}</td>
        //         <td>{product.price}</td>
        //         <td><img src={product.img} width={50} height={50} alt="..." /></td>
        //     </tr>;
        //     arrTagProduct.push(tagJSX); //[<tr></tr>,<tr></tr>,<tr></tr>,<tr></tr>]
        // }
        // console.log();
        // return arrTagProduct; //[<tr></tr>,<tr></tr>,<tr></tr>,<tr></tr>]

        //Cách 2:
        let arrResult = this.arrProduct.map((product, index) => {
            return <tr key={index}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td><img src={product.img} width={50} height={50} alt="..." /></td>
            </tr>
        });
        return arrResult;
    }

    render() {

        return <div className="container">
            <h3>Danh sách sản phẩm</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>Mã sp</th>
                        <th>Tên sp</th>
                        <th>Giá sp</th>
                        <th>Hình ảnh</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderProduct()}
                </tbody>
            </table>
        </div>
    }
}
