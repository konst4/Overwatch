/**
 * Created by konstantin on 9/24/16.
 */
import React from "react";
import {IndexLink, Link} from "react-router";

export default class Nav extends React.Component {
    constructor() {
        super()
        this.state = {
            collapsed: true,
        };
        this.patchNotes = this.patchNotes.bind(this);
        this.stats=this.stats.bind(this);
    }

    patchNotes() {
        this.context.router.push('/Overwatch/PatchNotes');
        //this.context.router.push('/React/Overwatch/PatchNotes');
    }
    stats(){
        this.context.router.push('Overwatch/Stats');
       // this.context.router.push('React/Overwatch/Stats');
    }
    toggleCollapse() {
        const collapsed = !this.state.collapsed;
        this.setState({collapsed});
    }

    render() {
        const {location} = this.props;
        const {collapsed} = this.state;
        // const featuredClass = location.pathname === "/" ? "active" : "";
        // const archivesClass = location.pathname.match(/^\/archives/) ? "active" : "";
        // const settingsClass = location.pathname.match(/^\/settings/) ? "active" : "";


        return (

            <div className="menu">
                <div className=" nav.bar.element">
                    <ul id="nav">
                        <li><a className="active" href="">Home</a></li>
                        <li id="stats" className="stats" onClick={this.stats.bind(this)}>Stats</li>
                        <li className="stats" id="patchnotes" onClick={this.patchNotes.bind(this)}>Patch Notes</li>
                        <li><a href="contact.html">Contact</a></li>
                        <li><a href="about.html">About</a></li>
                    </ul>
                </div>
            </div>


        );
    }
}
Nav.contextTypes = {
    router: React.PropTypes.object.isRequired
}