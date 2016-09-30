/**
 * Created by konstantin on 9/24/16.
 */
import React from "react";
import Title from "./Header/Title";

export default class Header extends React.Component {
    handleChange(e){
        console.log(e.target.value);
        const title=e.target.value;
        this.props.changeTitle(title);
    }



    render() {

        return (
            <div >
                <Title title={this.props.title}/>
                <input value= {this.props.title} onChange={this.handleChange.bind(this)} />
            </div>);
    }
}