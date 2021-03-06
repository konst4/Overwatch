/**
 * Created by konstantin on 10/4/16.
 */
import React from "react";

export default class Button extends React.Component{
    constructor(){
        super();
        this.state = {
            searched: true
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        //this.context.router.push('/React/Overwatch/Search');
        this.context.router.push('/Overwatch/Search');
    }
    render(){
        console.log(this.props);
        return(


            <button id="charles" onClick={this.handleClick}>{this.props.child}</button>
                
        );
    }
}
Button.contextTypes = {
    router: React.PropTypes.object.isRequired
}