import {shallow , mount} from 'enzyme';
import React from 'react'
import {expect} from 'chai';


import ContactForm from './ContactForm.jsx';
var contactWrapper = shallow(<ContactForm />);

describe("Form elements existance", () => {
	

	it("a html contact form container exists", () => {
		expect(contactWrapper.find('form').length).to.be.equal(1);
	});

	it("text field for username exists ", () =>{
		expect(contactWrapper.find('input[name="fname"]').length).to.be.equal(1);
	});
	it("email field for user Email exists ", () => {
		expect(contactWrapper.find('input[type="email"]').length).to.be.equal(1);
	});
	it("text area for description of subject exists", () => {
		expect(contactWrapper.find('textarea').length).to.be.equal(1);
	});

	it("form submit button exists", () => {
		expect(contactWrapper.find('input[type="submit"]').length).to.be.equal(1);
	});
});

describe('Form validations',()=>{
	it('form submit button should be disable when username field is empty',() => {
		var userNameValue = contactWrapper.find('input[name="fname"]').get(0).props.value;
		var submitBtn = contactWrapper.find('input[type="submit"]').get(0);
		expect(('disabled' in submitBtn.props)&&(!userNameValue)).to.be.true;
	})
});