import React, {component}  from 'react';
import './contact.css';

export default class ContactForm extends React.Component {
	constructor(props){
		super(props)
		this.state ={
			values:{
				username:"",
			},
			isDisabled:true,

		};
		this.handleUsernameChange = this.handleUsernameChange.bind(this)
	}
	handleUsernameChange(evt){
		if(!evt.target.value){
			this.setState({isDisabled:true})
			// console.log(this.state.isDisabled)
		}
		else{
			// console.log('sdf')
			this.setState({isDisabled:false})

		}
		this.setState({values:{username:evt.target.value}})
	}
	render() {
		return (
				<form>
					<h2>Contact us</h2>
					<input type="text"  id="fname" value={this.state.values.username} onChange={this.handleUsernameChange} name="fname" placeholder="Your name.." />

   					<input type="email" id="lname" name="email" placeholder="Your email.." />

   					<textarea id="subject" name="subject" placeholder="Write something.."></textarea>
   					<span id="errorSp" style={{display:"block"}}>{this.state.isDisabled?"error":"0	"}</span>
    				<input type="submit" value="Submit" disabled={this.state.isDisabled}/>
				</form>

    			)

	}
}

