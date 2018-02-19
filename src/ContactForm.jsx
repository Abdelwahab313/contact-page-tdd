import React, {component}  from 'react';
import './contact.css';

export default class ContactForm extends React.Component {
	render() {
		return (
				<form>
					<h2>Contact us</h2>
					<input type="text"  id="fname"  name="fname" placeholder="Your name.." />

   					<input type="email" id="lname" name="email" placeholder="Your email.." />

   					<textarea id="subject" name="subject" placeholder="Write something.."></textarea>
   					
    				<input type="submit" value="Submit" disabled/>
				</form>

    			)

	}
}

