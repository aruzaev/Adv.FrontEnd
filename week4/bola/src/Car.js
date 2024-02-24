import React, {Component} from "react";

class Car extends React.Component {
    constructor(crops) {
        super(crops)
        this.state = {color: "red"}
    }
    render() {
        return (
            <div>
                <h1>Car details: color = {this.state.color}</h1>
            </div>
        );
    }
}

export default Car;