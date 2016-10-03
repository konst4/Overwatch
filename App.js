import React, { Component } from 'react';
import banner from './overwatch.jpg';
import './App.css';
//import './Style.css    //background is included in this css

var DisplayMenu = React.createClass({
        render: function() {
            return (
               <div class="menu">
    <div class=" nav.bar.element">
        <ul id="nav">
            <li><a class="active" href="index.html">Home</a></li>
            <li id="stats" class="stats">Stats</li>
            <li class="stats" id="patchnotes">Patch Notes</li>
            <li><a href="contact.html">Contact</a></li>
            <li><a href="about.html">About</a></li>
        </ul>
    </div>
</div>
            );
        }
    });
	
	
var Search = React.createClass({
        render: function() {
            return (
	<div>
    <h1>
        Overwatch Stat search
    </h1>
	  <div id = "playerName"> Search database:</div>
	<form>
        <input id="tags" type="text" name="username" pattern="[A-Za-z0-9].{6,}" placeholder="Arthas-11308"
               title="Please enter at least 6 alphanumeric characters" value="Arthas-11308"/>
        <input id="search" type="button" value="search"/>
    </form>
    </div>
            );
        }
    });
	
	
	var RegionSelect = React.createClass({
        render: function() {
            return (
	<div>
   <select>
        <option value="us">United States</option>
        <option value="korea">Korea</option>
        <option value="japan">Japan</option>
        <option value="russia">Russia</option>
    </select>
    </div>
            );
        }
    });
	
	var Footer = React.createClass({
        render: function() {
            return (
        <footer>
            <img src={banner} className="App-banner"/>
        </footer>
            );
        }
    });
	
	
class App extends Component {
  render() {
    return (
      <div className="App">
	  <DisplayMenu/>
	  <Search/>
	  <RegionSelect/>
	  <Footer/>
      </div>
    );
  }
}

export default App;
