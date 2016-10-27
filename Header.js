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
    success(){

    }

        handleClick() {
            // this is for google cloud
            $.ajax({
                type:"POST",
                url:"/upload",
                success: console.log("Uploaded file to Google Cloud"),
                dataType: "*.jpg"
            });
            // this is for firebase.
            $.ajax({
                type:"POST",
                url:"/uploadf",
                success: console.log("Uploaded file to Firebase"),
                dataType: "*.jpg"
            });
    }


    render() {

    if(this.state.searched) {
        return (
            <div >
                <Title title={this.props.title}/>
                <input id="player" value="Arthas-11308" onChange={this.handleChange.bind(this)}/>
                <Button child={this.props.child}> </Button>
                <input type="file" id="myFile"/>
                <form action="./graphs.html">
                    <button type="submit">Hours Played</button>
                </form>
                <button onClick={this.handleClick} type="submit">Submit</button>
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