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
	// it('form submit button should be disable when username field is empty',() => {
	// 	var userNameValue = contactWrapper.find('input[name="fname"]').get(0).props.value;
	// 	expect(('disabled' in submitBtn.props)&&(!userNameValue)).to.be.true;
	// })
	it('form submit button should be enabled when username field has value',() => {
		// var userNameValue = contactWrapper.find('input[name="fname"]').get(0).props.value;
		// contactWrapper.find('input[name="fname"]').set(0).props.value="xxxxx";
		var submitBtn = contactWrapper.find('input[type="submit"]').get(0);
		// var userNameValue = contactWrapper.find('input[name="fname"]').get(0).props.value;
		// var userNameValue = contactWrapper.find('input[name="fname"]').get(0).props.value;
		var userNameElm = contactWrapper.find('#errorSp').get(0);
		console.log(userNameElm)
		const event = {target: {name: "fname", value: "spam"}};
		// console.log(contactWrapper.state().values)
		// console.log(contactWrapper.state())
		console.log(contactWrapper.state())

		var xxx = contactWrapper.find('input[name="fname"]').simulate('change', event);
		console.log(contactWrapper.state())

		// console.log(contactWrapper.state().values)
		// console.log(!('disabled' in submitBtn.props))
		// console.log(contactWrapper.state())
		// console.log(userNameElm.props)
		// console.log("VAL:["+userNameElm.props.value+"]")
		// console.log(userNameValue?true:false)
		// expect(!('disabled' in submitBtn.props)&&(userNameValue?true:false)).to.be.true;
		// var submitBtn = contactWrapper.find('input[type="submit"]').get(0);
		// expect(('disabled' in submitBtn.props)&&(!userNameValue)).to.be.true;
	})
});