import React, { Component } from 'react'

export default class HandleEvent extends Component {


    showMessage = () => {
        alert(123231321);
    }

    showTitle = (tenLop) => {
        console.log(`Hello ${tenLop}`);
    }


    render() {

        const name ='Thuận';
        const handleClick = (event) => {
            alert('Hello cybersoft');
        }


        return (
            <div className="container">
                Xử lý sự kiện trong react
                <br />
                <button id="btnClick" onClick={handleClick}> Click me !!!</button>

                <button onClick={() => {
                    alert(`hello ${name}`);
                    this.showTitle('Front end 66')
                }}> Show message</button>
            </div>
        )
    }
}
