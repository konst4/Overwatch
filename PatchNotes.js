import React, { Component } from 'react';

export default class PatchNotes extends Component {	
	componentWillMount() {
		this.setState({patchNotes: false});
		
		
		fetch('https://api.lootbox.eu/patch_notes').then((result) => {
			return result.json();
		}).then((json) => {
			console.log(json);
			this.setState({patchNotes: json.patchNotes});
		});
	}
	
	render() {
		var patchNotes = [<div key="1">Loading...</div>];
	
		if(this.state.patchNotes) {
			var patchNotes = []; // your new array
			
		}
		
//use map to iterate through the array
		
		return (
			<div className="PatchNotes">
				{patchNotes}
			</div>
			);
	}
}