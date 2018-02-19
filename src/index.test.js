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
	it('form submit button should be disabled when username field is empty',() => {
		var userNameValue = contactWrapper.find('input[name="fname"]').get(0).props.value;
		var submitBtn = contactWrapper.find('input[type="submit"]').get(0);
		expect(('disabled' in submitBtn.props)&&(!userNameValue)).to.be.true;
	});	
	it('form submit button should be disabled when email field is empty', () =>{
		var emailValue = contactWrapper.find('input[name="email"]').get(0).props.value;
		var submitBtn = contactWrapper.find('input[type="submit"]').get(0);
		expect(('disabled' in submitBtn.props)&&(!emailValue)).to.be.true;
	});
	it('form sumbit button should be enabled when username field and email field is not empty', () => {
		var emailValue = contactWrapper.find('input[name="email"]').get(0).props.value;
		var userNameValue = contactWrapper.find('input[name="fname"]').get(0).props.value;

		var emailElement = contactWrapper.find('input[name="email"]');
		var userNameElement = contactWrapper.find('input[name="fname"]');		

		var submitBtn = contactWrapper.find('input[type="submit"]').get(0);

		const eventUsername = {target: {name: "fname", value: "testname"}};
		const eventEmail = {target: {name: "email", value: "test@gmail.com"}};

		userNameElement.simulate('change', eventUsername);
		emailElement.simulate('change', eventEmail);
		
		expect((!('disabled' in submitBtn.props))&&(emailValue&&userNameValue)).to.be.true;
	});


});