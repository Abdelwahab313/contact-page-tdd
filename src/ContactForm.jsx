import React, {component}  from 'react';
import './contact.css';

export default class ContactForm extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			isDisabled:true,
			formValues:{fname:'',email:''}
		}
		this.inputHandleChange = this.inputHandleChange.bind(this) 
		this.handleSubmitDisability = this.handleSubmitDisability.bind(this) 
	}
	inputHandleChange(evt){
		let formValues = Object.assign({}, this.state.formValues);    //creating copy of object
		formValues[evt.target.name] = evt.target.value;
		if(evt.target.name=='email'){
			if(!handleEmailValidation(evt.target.value)){
				formValues[evt.target.name] = "";
			}
			else{
					
			}
		}
		this.setState({formValues:formValues}, () => { 
					this.handleSubmitDisability();
		});
		

	}
	handleSubmitDisability(){
		this.setState({isDisabled:!(this.state.formValues.fname.trim()&&this.state.formValues.email.trim())})
	}

	render() {
		return (
				<form>
					<h2>Contact us</h2>
					<input type="text"  id="fname" onChange={this.inputHandleChange}  name="fname" placeholder="Your name.." />
   					<input type="email" id="lname" onChange={this.inputHandleChange}  name="email" placeholder="Your email.." />
   					<textarea id="subject" name="subject" placeholder="Write something.."></textarea>
    				<input type="submit" value="Submit" disabled={this.state.isDisabled}/>
				</form>
    			);
	}
}


function handleEmailValidation(email){
		 var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    	return re.test(String(email).toLowerCase());
}