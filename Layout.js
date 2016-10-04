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
                        <td>Abrafo</td>
                        <td>101/0</td>
                        <td>Germany</td>
                    </tr>
                    <tr>
                        <td>Vehiron</td>
                        <td>99/5</td>
                        <td>Korea</td>
                    </tr>
                    <tr>
                        <td>Dalek</td>
                        <td>99/7</td>
                        <td>United States</td>
                    </tr>
                    <tr>
                        <td>Alyameldir</td>
                        <td>86/5</td>
                        <td>Korea</td>
                    </tr>
                    <tr>
                        <td>Magne</td>
                        <td>85/5</td>
                        <td>Russia</td>
                    </tr>
                    <tr>
                        <td>Alix</td>
                        <td>80/9</td>
                        <td>United States</td>
                    </tr>
                    </tbody>
                </table>

            </div>
        );
    }
});
const Search = React.createClass({

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
        fetch('https://api.lootbox.eu/pc/' + region + "/" + document.getElementById("player").value + "/profile").then((result) => {
            return result.json();
        }).then((json) => {
            console.log(json);
            this.setState({
                Players: json.data,
                userName: json.data.username,
                rank: json.data.competitive.rank,
                wins: json.data.games.competitive.wins
            });
        });
    },
    render(){
        var divStyle = {
            color: "white"
        };
        document.getElementById("change").setAttribute("background", "./images/killdeath.jpg");
        return (<div id="search">
                <div id="header"><img src={this.state.Players.avatar}/>
                    <h1>  {this.state.userName}</h1>
                </div>
                <span style={divStyle}>Current Competitive rank: {this.state.rank}</span>
                <div style={divStyle}> Total Competitive wins: {this.state.wins}
                </div>

            </div>

        );
    }
});

const PatchNotes = React.createClass({

    componentWillMount() {
        this.setState({patchNotes: false});
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

        return (
            <div dangerouslySetInnerHTML={{__html: this.state.patchNotes}}>

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
                <Route path="/Overwatch/Stats"component={Stats}>
                </Route>
            </Router>
        );
    }
}
