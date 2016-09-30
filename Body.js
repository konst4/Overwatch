import React, { Component } from 'react';
import Switcher from 'switcheroo';
import PatchNotes from './PatchNotes';
import About

export default class Body extends Component {
		render() {
			return(
				<Switcher>
					<PatchNotes path="/patch-notes" />
					<Home path="/.*" />                 //this regular expression covers home
					<About path="/about" />
					
					
				</Switcher>
			);
		}
}