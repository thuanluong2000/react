import React, { Component } from 'react'

export default class Cart extends Component {

    renderGioHang = () => {
        //Lấy ra hàm xóa từ component DemoXemChiTiet
        let { xoaGioHang } = this.props;

        //Nhận giá trị giỏ hàng từ component DemoXemChiTiet
        let { gioHang } = this.props;
        return gioHang.map((spGH, index) => {
            return <tr key={index}>
                <td>{spGH.maSP}</td>
                <td>{spGH.tenSP}</td>
                <td><img src={spGH.hinhAnh} width={50} height={50} alt="..." /></td>
                <td>{spGH.giaBan}</td>
                <td>
                    <button className="btn btn-primary mr-2" onClick={() => {
                        this.props.tangGiamSoLuong(spGH.maSP,1)
                    }}>+</button>
                    {spGH.soLuong}
                    <button className="btn btn-primary ml-2" onClick={() => {
                        this.props.tangGiamSoLuong(spGH.maSP,-1)
                    }}>-</button>
                </td>
                <td>{spGH.soLuong * spGH.giaBan}</td>
                <td><button onClick={() => {
                    //this.props.xoaGioHang(spGH.maSP);
                    xoaGioHang(spGH.maSP)
                }} className="btn btn-danger">Xóa</button></td>
            </tr>
        })
    }






    render() {
        return (
            <div>
                {/* Button trigger modal */}

                {/* Modal */}
                <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                    <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Giỏ hàng</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Mã sản phẩm</th>
                                            <th>Tên sản phẩm</th>
                                            <th>Hình ảnh</th>
                                            <th>Đơn giá</th>
                                            <th>Số lượng</th>
                                            <th>Thành tiền</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.renderGioHang()}
                                        {/* <tr>
                                            <td>1</td>
                                            <td>IPHONE</td>
                                            <td><img src="https://picsum.photos/id/99/50/50" alt="..." /></td>
                                            <td>1.000</td>
                                            <td>2</td>
                                            <td>2.000</td>
                                            <td><button className="btn btn-danger">Xóa</button></td>                                   
                                        </tr> */}
                                    </tbody>
                                </table>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
