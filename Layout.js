/**
 * Created by konstantin on 9/24/16.
 */
import React from "react";
import Header from "./Header";
import Footer from "./layout/Footer";
import Nav from "./layout/Nav"
import Body from "./layout/Body";
import Region from "./layout/Region";
export default class Layout extends React.Component {
    constructor() {
        super();
        this.state={name: "Will"}
        this.name = "Will";
        this.style= {
            color: 'black',
            backgroundImage: 'url(' + './images/tracer.jpg' + ')',

        };
    }
    changeTitle(title){
        this.setState({title});
    }

    render() {
       const title="Welcome !";
        return (
            <div >
                <Nav/>
                <Header name="Something" title={title} />
                <Body/>
                <Region/>
                <Footer />
            </div>
        );
    }
}