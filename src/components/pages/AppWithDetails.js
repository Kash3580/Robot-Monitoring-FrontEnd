import React from 'react';
import rdata from '../services/realtime-response';
import { forOfStatement } from '@babel/types';

class AppWithDetails extends React.Component {

	constructor(props) {
		super(props)
		this.onFirstNameChange = this.onFirstNameChange.bind(this);
		this.onLastNameChange = this.onLastNameChange.bind(this);
		rdata((err, data) => {

			this.setState(data)

		});

	}

	onFirstNameChange(event) {
		// store value because of react synthetic events
		const value = event.target.x;

		// use callback function in setState because of asynchronous nature of setState
		this.setState(function (state) {
			return {
				details: Object.assign({},
					state.details, {
					x: value,
					y: value

				})
			}
		})
	}

	onLastNameChange(event) {
		// store value because of react synthetic events
		const value = event.target.x;

		// use callback function in setState because of asynchronous nature of setState
		this.setState(function (state) {
			return {
				details: Object.assign({},
					state.details, {
					x: value,
					y: value

				})
			}
		})

	}

	render() {
		return (
			<div>
				<div  onChange={this.onFirstNameChange}>
					State:
			  <pre>{JSON.stringify(this.state)}</pre>



				</div>
				<div onChange={this.onLastNameChange}>
					State:
			<pre>{JSON.stringify(this.state)}</pre>


				</div>
			</div>

		)
	}
}

/*  class AppWithoutDetails extends React.Component {
	constructor(props) {
	  super(props)
	  this.onFirstNameChange = this.onFirstNameChange.bind(this);
	  this.onLastNameChange = this.onLastNameChange.bind(this);
	  this.state = {
		first_name: '',
		last_name: '',
	  }
	}
  
	onFirstNameChange(event) {
	  this.setState({ first_name: event.target.value })
	}
  
	onLastNameChange(event) {
	  this.setState({ last_name: event.target.value })
	}
  
	render() {
	  return (
		<div>
		  State:
		  <pre>{JSON.stringify(this.state)}</pre>
		  <input type="text" onChange={this.onFirstNameChange} value={this.state.first_name} />
		  <input type="text" onChange={this.onLastNameChange} value={this.state.last_name} />
		</div>
	  )
	}
	
  }*/

export default AppWithDetails;