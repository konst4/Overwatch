/**
 * Created by konstantin on 9/24/16.
 */
import React from "react";
import Title from "./Header/Title";
import Button from "./Button";
export default class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            searched: true
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(e) {
        console.log(e.target.value);
        const title = e.target.value;
        this.props.changeTitle(title);
    }

    handleClick() {
        this.context.router.push('/Overwatch/Search');
        //this.context.router.push('/React/Overwatch/Search');
    }


    render() {

    if(this.state.searched) {
        return (
            <div >
                <Title title={this.props.title}/>
                <input id="player" value="Arthas-11308" onChange={this.handleChange.bind(this)}/>
                <Button child={this.props.child}> </Button>
                <form action="./graphs.html">
                    <button type="submit">Hours Played</button>
                </form>
            </div>
        );
    }else{
       return( <div></div>);
    }


    }
}
Header.contextTypes = {
    router: React.PropTypes.object.isRequired
}