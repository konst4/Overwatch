/**
 * Created by konstantin on 9/24/16.
 */
import React from "react";
import {render} from 'react-dom'
import {Router, Route, Link, browserHistory} from 'react-router';
import Header from "./Header";
import Footer from "./layout/Footer";
import Nav from "./layout/Nav"
import Body from "./layout/Body";
import Region from "./layout/Region";
var Ajax = require('react-ajax');
require('react-router');
const Users = React.createClass({

    render(){
        document.getElementById("change").setAttribute("background", "./images/tracer.jpg");
        return (<div >
            <Nav/>
            <Header name="Something" title="Welcome!" child="Search"/>
            <Body/>
            <Region/>
            <Footer />
        </div>);
    }
});
var Stats = React.createClass({

    componentWillMount() {
        this.setState({Players: false});
        document.getElementById("change").setAttribute("background", "none");

        console.log(document.getElementById("region").value);
        if (document.getElementById("region").value == "us") {
            var region = "us";
        } else if (document.getElementById("region").value == "korea") {
            var region = "kr";
        } else if (document.getElementById("region").value == "japan") {
            var region = "kr";
        } else if (document.getElementById("region").value == "russia") {
            var region = "eu";
        }

        fetch('https://api.lootbox.eu/pc/' + region + "/" + document.getElementById("player").value + "/quick-play/heroes").then((result) => {
            return result.json();
        }).then((json) => {
            this.setState({
                Text: json.data.name,
                data: json.data.playtime,
            });
        });

    },

    render: function () {


        return (
            document.getElementById("change").setAttribute("background", "/Overwatch/images/killdeath.jpg"),

                <div>
                    <center><img src={'/Overwatch/images/killdeathtext.png'} height="250" width="1000"/></center>


                    <table id="table1">
                        <tbody>
                        <tr>
                            <th>Top players:</th>
                            <th>K/D ratio</th>
                            <th>Country</th>
                        </tr>
                        <tr>
                            <td>Abrafo-4321</td>
                            <td>101/0</td>
                            <td>Germany</td>
                        </tr>
                        <tr>
                            <td>Vehiron-9430</td>
                            <td>99/5</td>
                            <td>Korea</td>
                        </tr>
                        <tr>
                            <td>Dalek-1754</td>
                            <td>99/7</td>
                            <td>United States</td>
                        </tr>
                        <tr>
                            <td>Alyameldir-9846</td>
                            <td>86/5</td>
                            <td>Korea</td>
                        </tr>
                        <tr>
                            <td>Magne-9505</td>
                            <td>85/5</td>
                            <td>Russia</td>
                        </tr>
                        <tr>
                            <td>Alix-9843</td>
                            <td>80/9</td>
                            <td>United States</td>
                        </tr>
                        </tbody>
                    </table>
                    <button className= "myButton" onClick={browserHistory.goBack}>Back</button>
                </div>
        );
    }
});

const Search = React.createClass({
    componentWillMount() {
        this.setState({Players: 1});

        document.getElementById("change").setAttribute("background", "none");

        console.log(document.getElementById("region").value);
        if (document.getElementById("region").value == "us") {
            var region = "us";
        } else if (document.getElementById("region").value == "korea") {
            var region = "kr";
        } else if (document.getElementById("region").value == "japan") {
            var region = "kr";
        } else if (document.getElementById("region").value == "russia") {
            var region = "eu";
        }

        fetch('https://api.lootbox.eu/pc/' + region + "/" + document.getElementById("player").value + "/profile").then((result) => {
            return result.json();
        }).then((json) => {
            console.log(json);
            if (json.statusCode == 404) {
                this.setState({
                    Players: 2,
                    error: json.error
                });

                console.log("hi")
            } else {
                this.setState({
                    Players: json.data,
                    userName: json.data.username,
                    rank: json.data.competitive.rank,
                    wins: json.data.games.competitive.wins
                });
            }
        });
    },


    render(){
        var divStyle = {
            color: "white",
            backgroundColor: "black"
        };
        document.getElementById("change").setAttribute("background", "./images/killdeath.jpg");
        if (this.state.Players == 1) {
            return (<div>
                <h1>Loading player</h1>
                <button className= "myButton" onClick={browserHistory.goBack}>Back</button>
            </div>);
        } else if (this.state.Players == 2) {
            return (
                <div>
                    <h1>{this.state.error}</h1>
                    <button className= "myButton" onClick={browserHistory.goBack}>Back</button>
                </div>
            );

        }

        return (

            <div id="search">
                <div id="header"><img src={this.state.Players.avatar}/>
                    <h1>  {this.state.userName}</h1>
                </div>
                <span style={divStyle}>Current Competitive rank: {this.state.rank}</span>
                <br></br>
                <span style={divStyle}> Total Competitive wins: {this.state.wins}
                </span>
                <br></br>
                <button className= "myButton" onClick={browserHistory.goBack}>Back</button>
            </div>

        );
    }
});

const PatchNotes = React.createClass({

    componentWillMount() {
        this.setState({patchNotes: "Loading the PatchNotes"});
        document.getElementById("change").setAttribute("background", "none");
        fetch('https://api.lootbox.eu/patch_notes').then((result) => {
            return result.json();
        }).then((json) => {
            console.log(json);
            this.setState({patchNotes: json.patchNotes[0].detail});
        });
    },


    render()
    {

        return (<div>
            <div dangerouslySetInnerHTML={{__html: this.state.patchNotes}}>

            </div>
                <button className= "myButton" onClick={browserHistory.goBack}>Back</button>
            </div>

        );
    }
});
const Help = React.createClass({

    componentWillMount() {
        document.getElementById("change").setAttribute("background", "none");

    },




    render()
    {

        return (
            <div >
                <h1>Congratulations you hit the help space</h1>
                <p>Please navigate back to the mainpage and search a players name. The general format will be the
                name '-' then a number.
                </p>
                <button className= "myButton" onClick={browserHistory.goBack}>Back</button>
            </div>

        );
    }
});

export default class Layout extends React.Component {
    constructor() {
        super();
        this.state = {name: "Will"}
        this.name = "Will";
        this.style = {
            color: 'black',
            backgroundImage: 'url(' + './images/tracer.jpg' + ')',


        };
        this.searched = {searched: true};
    }

    changeTitle(title) {
        this.setState({title});
    }

    render() {

        return (
            <Router history={browserHistory}>
                <Route path="/Overwatch" component={Users}>
                </Route>
                <Route path="/Overwatch/Search" component={Search}>
                </Route>
                <Route path="/Overwatch/PatchNotes" component={PatchNotes}>
                </Route>
                <Route path="/Overwatch/Help" component={Help}>
                </Route>
                <Route path="/Overwatch/Stats" component={Stats}>
                </Route>
            </Router>
        );
    }

}

