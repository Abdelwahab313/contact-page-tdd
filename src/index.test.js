import {shallow , mount} from 'enzyme';
import React from 'react'
import {expect} from 'chai';

var request = require('request');

var chai = require('chai')
  , chaiHttp = require('chai-http');

chai.use(chaiHttp);
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
	it("form span should exists ", () => {
		expect(contactWrapper.find('span').length).to.be.equal(1);
	});
	it("form span should be hidden default ", () => {
		expect(contactWrapper.find('span').get(0).props.style.display).to.be.equal('none');
	});

});

describe('Form validations',()=>{
	var submitBtn = contactWrapper.find('input[type="submit"]').get(0);
  	var userNameElement= contactWrapper.find('input[name="fname"]');
  	var emailElement= contactWrapper.find('input[type="email"]');  	


	it('form submit button should be disabled when username field is empty',() => {
		var userNameValue = contactWrapper.find('input[name="fname"]').get(0).props.value;
		submitBtn = contactWrapper.find('input[type="submit"]').get(0);
		expect(('disabled' in submitBtn.props)&&(!userNameValue)).to.be.true;
	});	
	it('form submit button should be disabled when email field is empty', () =>{
		var emailValue = contactWrapper.find('input[name="email"]').get(0).props.value;
		var submitBtn = contactWrapper.find('input[type="submit"]').get(0);
		expect(('disabled' in submitBtn.props)&&(!emailValue)).to.be.true;
	});
	it('form sumbit button should be enabled when username field and email field is not empty', () => {
		userNameElement= contactWrapper.find('input[name="fname"]');		
		emailElement = contactWrapper.find('input[name="email"]');
		var submitBtnBeforeEventTrigger = contactWrapper.find('input[type="submit"]').get(0);
		const eventUsername = {target: {name: "fname", value: "testname"}};
		const eventEmail = {target: {name: "email", value: "test@gmail.com"}};
		userNameElement.simulate('change', eventUsername);
		emailElement.simulate('change', eventEmail);
		var submitBtnAfterTrigger = contactWrapper.find('input[type="submit"]').get(0);
		expect(!submitBtnAfterTrigger.props.disabled).to.be.true;
	});

	it('form sumbit button should be disabled if user tried to input a whitespace', () => {
		userNameElement= contactWrapper.find('input[name="fname"]');		
		emailElement = contactWrapper.find('input[name="email"]');
		var submitBtnBeforeEventTrigger = contactWrapper.find('input[type="submit"]').get(0);
		const eventUsername = {target: {name: "fname", value: "		"}};
		const eventEmail = {target: {name: "email", value: "       "}};
		userNameElement.simulate('change', eventUsername);
		emailElement.simulate('change', eventEmail);
		var submitBtnAfterTrigger = contactWrapper.find('input[type="submit"]').get(0);
		expect(submitBtnAfterTrigger.props.disabled).to.be.true;
	});


	it('form sumbit button should be disabled if user tried to input a data and removed it again', () => {
		userNameElement= contactWrapper.find('input[name="fname"]');		
		emailElement = contactWrapper.find('input[name="email"]');
		var submitBtnBeforeDataInput = contactWrapper.find('input[type="submit"]').get(0);
		userNameElement.simulate('change',{target: {name: "fname", value: "testname"}});
		emailElement.simulate('change', {target: {name: "email", value: "test@gmail.com"}});
		userNameElement.simulate('change',{target: {name: "fname", value: ""}});
		emailElement.simulate('change', {target: {name: "email", value: ""}});
		var submitBtnAfterDataInput = contactWrapper.find('input[type="submit"]').get(0);
		var submitBtnAfterDataRemoval = contactWrapper.find('input[type="submit"]').get(0);
		expect(submitBtnAfterDataRemoval.props.disabled).to.be.true;
	});

	it('reject email invalid format', () => {
		userNameElement= contactWrapper.find('input[name="fname"]');	
		emailElement = contactWrapper.find('input[name="email"]');
		var submitBtnBeforeDataInput = contactWrapper.find('input[type="submit"]').get(0);
		emailElement.simulate('change', {target: {name: "email", value: "invalidmail"}});
		expect(!contactWrapper.state().formValues.email).to.be.true;
	});


	afterEach(() => {
		contactWrapper = shallow(<ContactForm />);
  		userNameElement.props.value=""
  		emailElement.props.value=""
	});
});

describe("Form submission", () => {
	it("should display the span 'Successful' on submitting the form", () => {
		var userNameElement= contactWrapper.find('input[name="fname"]');		
		var emailElement = contactWrapper.find('input[name="email"]');
		var submitBtnBeforeEventTrigger = contactWrapper.find('input[type="submit"]').get(0);
		const eventUsername = {target: {name: "fname", value: "Test"}};
		const eventEmail = {target: {name: "email", value: "test@gmail.csad"}};
		
		userNameElement.simulate('change', eventUsername);
		emailElement.simulate('change', eventEmail);
		var submitBtnAfterTrigger = contactWrapper.find('input[type="submit"]');
		var formElement = contactWrapper.find('form')
		// formElement.simulate('submit');

		const event = {target: {name: "fname", value: "testname"}};
		formElement.simulate('submit', );
		var submitSpan = contactWrapper.find('.submitted').get(0);
		expect(contactWrapper.find('span').get(0).props.style.display).to.be.equal('block');
	})
})
