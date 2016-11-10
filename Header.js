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
            searched: 1
        };
        this.handleClick = this.handleClick.bind(this);
    }
componentDidMount(){};
    handleChange(e) {
        console.log(e.target.value);
        const title = e.target.value;
        this.props.changeTitle(title);
    }

    successs() {
        this.props.searched=0;
        render();
    }

    handleClick() {
        // this is for google cloud
        $.ajax({
            type: "POST",
            url: "/upload",
            success: console.log("Uploaded file to Google Cloud"),
            dataType: "*.jpg"
        });
        // this is for firebase.
        $.ajax({
            type: "POST",
            url: "/uploadf",
            success: console.log("Uploaded file to Firebase"),
            dataType: "*.jpg"
        });

    }

       handleClicks()
        {
            var user = document.getElementById('username');
            var pass = document.getElementById('pass');
            function go(){
                this.props.searched=0;
                render();
            }
            $.ajax({
                type: "POST",
                url: "/login",
                success: function (data) {
                    if(data) {
                        alert("Logged in");
                        $("#title").html("Logged In");
                    }else{
                        alert("There was an error");
                    }
                }
                , error: function () {
                    alert("There was an error");
                },
                data: {'user': user.value, 'pass': pass.value}
            });

        }



    render() {

        if (this.state.searched=1) {
            return (
                <div >
                    <Title  title={this.props.title}/>
                    <input id="player" value="Arthas-11308" onChange={this.handleChange.bind(this)}/>
                    <Button child={this.props.child}> </Button>
                    <input type="file" id="myFile"/>
                    <form action="./graphs.html">
                        <button id="hoursPlayed" type="submit">Hours Played</button>
                    </form>
                    <button  onClick={this.handleClick} type="submit">Submit</button>
                    <br>
                    </br>
                    <input id="username" value="root@gmail.com" onChange={this.handleChange.bind(this)}/>
                    <br>
                    </br>
                    <input type="password" id="pass" value="password" onChange={this.handleChange.bind(this)}/>
                    <button  id="charles" onClick={this.handleClicks} type="submit">Login</button>
                </div>
            );
        } else {
            return ( <div >
                <Title   title={"Logged in as Admin"}/>
                <input id="player" value="Arthas-11308" onChange={this.handleChange.bind(this)}/>
                <Button child={this.props.child}> </Button>
                <input type="file" id="myFile"/>
                <form action="./graphs.html">
                    <button type="submit">Hours Played</button>
                </form>
                <button onClick={this.handleClick} type="submit">Submit</button>

            </div>);
        }


    }
}
Header.contextTypes = {
    router: React.PropTypes.object.isRequired
}