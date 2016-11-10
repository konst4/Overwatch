/**
 * Created by konstantin on 9/24/16.
 */
import React from "react";

export default class Title extends React.Component{
    render(){
        console.log(this.props);
        return(
           <h1 id="title">{this.props.title}</h1>);
    }
}