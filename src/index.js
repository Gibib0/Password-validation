'use strict'

const container = document.createElement('div')
container.className = 'container'

const title = document.createElement('h1')
title.textContent = 'CREATE AN ACCOUNT'

const description = document.createElement('p')
description.textContent = 'We always keep your name and email address private.'
description.className = 'description'

const form = document.createElement('form')
form.className = 'signup-form'
form.noValidate = true

const nameRow = document.createElement('div')
nameRow.className = 'form-row'

const firstName = document.createElement('div')
firstName.className = 'form-group'
const firstNameInput = document.createElement('input')
firstNameInput.type = 'text'
firstNameInput.placeholder = 'First name'
firstNameInput.required = true
firstName.appendChild(firstNameInput)

const lastName = document.createElement('div')
lastName.className = 'form-group'
const lastNameInput = document.createElement('input')
lastNameInput.type = 'text'
lastNameInput.placeholder = 'Last name'
lastNameInput.required = true
lastName.appendChild(lastNameInput)

nameRow.append(firstName, lastName)


const displayEmailRow = document.createElement('div')
displayEmailRow.className = 'form-row'

const displayName = document.createElement('div')
displayName.className = 'form-group'
const displayNameInput = document.createElement('input')
displayNameInput.type = 'text'
displayNameInput.placeholder = 'Display Name'
displayNameInput.required = true
displayName.appendChild(displayNameInput)

const email = document.createElement('div')
email.className = 'form-group'
const emailInput = document.createElement('input')
emailInput.type = 'email'
emailInput.placeholder = 'Email Address'
emailInput.required = true
email.appendChild(emailInput)

displayEmailRow.append(displayName, email)


const passwordRow = document.createElement('div')
passwordRow.className = 'form-row'

const password = document.createElement('div')
password.className = 'form-group'
const passwordInput = document.createElement('input')
passwordInput.type = 'password'
passwordInput.placeholder = 'Password'
passwordInput.required = true
password.appendChild(passwordInput)

const passwordConfirm = document.createElement('div')
passwordConfirm.className = 'form-group'
const passwordConfirmInput = document.createElement('input')
passwordConfirmInput.type = 'password'
passwordConfirmInput.placeholder = 'Password Confirmation'
passwordConfirmInput.required = true
passwordConfirm.appendChild(passwordConfirmInput)

passwordRow.append(password, passwordConfirm)


const radioButtonGroup = document.createElement('div')
radioButtonGroup.className = 'radio-group'

const joinBuyer = document.createElement('div')
joinBuyer.className = 'radio-option'

const joinBuyerLabel = document.createElement('label')
const joinBuyerInput = document.createElement('input')
joinBuyerInput.type = 'radio'
joinBuyerInput.name = 'accountType'
joinBuyerInput.value = 'buyer'
joinBuyerInput.checked = true

const joinBuyerText = document.createElement('div')
joinBuyerText.className = 'radio-text'

const joinBuyerTitle = document.createElement('div')
joinBuyerTitle.className = 'radio-title'
joinBuyerTitle.textContent = 'Join As a Buyer'

const joinBuyerDescription = document.createElement('div')
joinBuyerDescription.className = 'radio-description'
joinBuyerDescription.textContent = 'I am looking for a Name, Logic or Tagline for my business, brand or product.'

joinBuyerText.append(joinBuyerTitle, joinBuyerDescription)
joinBuyerLabel.append(joinBuyerInput, joinBuyerText)
joinBuyer.appendChild(joinBuyerLabel)

const joinCreative = document.createElement('div')
joinCreative.className = 'radio-option'

const joinCreativeLabel = document.createElement('label')
const joinCreativeInput = document.createElement('input')
joinCreativeInput.type = 'radio'
joinCreativeInput.name = 'accountType'
joinCreativeInput.value = 'creative'

const joinCreativeText = document.createElement('div')
joinCreativeText.className = 'radio-text'

const joinCreativeTitle = document.createElement('div')
joinCreativeTitle.className = 'radio-title'
joinCreativeTitle.textContent = 'Join As a Creative or Marketplace Seller'

const joinCreativeDescription = document.createElement('div')
joinCreativeDescription.className = 'radio-description'
joinCreativeDescription.textContent = 'I plan to submit some ideas, Logic designs or sell names in Domain Marketplace.'

joinCreativeText.append(joinCreativeTitle, joinCreativeDescription)
joinCreativeLabel.append(joinCreativeInput, joinCreativeText)
joinCreative.appendChild(joinCreativeLabel)

radioButtonGroup.append(joinBuyer, joinCreative)


const checkboxEl = document.createElement('div')
checkboxEl.className = 'checkbox-group'
const checkboxLabel = document.createElement('label')
const checkbox = document.createElement('input')
checkbox.type = 'checkbox'
checkboxLabel.appendChild(checkbox)
checkboxLabel.appendChild(document.createTextNode('Allow Squathelp to send marketing/promotional offers from time to time'))

checkboxEl.appendChild(checkboxLabel)


const submitBtn = document.createElement('button')
submitBtn.type = 'submit'
submitBtn.className = 'submit-btn'
submitBtn.textContent = 'Create account'

const cancelBtn = document.createElement('button')
cancelBtn.type = 'button'
cancelBtn.className = 'cancel-btn'
cancelBtn.textContent = 'Cancel'


form.append(nameRow, displayEmailRow, passwordRow, radioButtonGroup, checkboxEl, submitBtn, cancelBtn)

container.append(title, description, form)
document.body.appendChild(container)


class Person {
	constructor(firstName, lastName, displayName, email) {
		this.firstName = firstName
		this.lastName = lastName
		this.displayName = displayName
		this.email = email
	}
}

form.addEventListener('submit', (e) => {
	e.preventDefault()

	const firstName = firstNameInput.value.trim()
	const lastName = lastNameInput.value.trim()
	const displayName = displayNameInput.value.trim()
	const email = emailInput.value.trim()

	if (!firstName || !lastName || !displayName || !email) {
		console.log('Fields is not filled');
		return
	}

	const person = new Person(firstName, lastName, displayName, email)

	localStorage.setItem(lastName, JSON.stringify(person))

	console.log('Data saved successfully');
	form.reset()
})

cancelBtn.addEventListener('click', () => {
	if (confirm('Clear form?')) {
		form.reset()
	}
})


const emailError = document.createElement('div')
emailError.style.color = 'red'
emailError.style.marginTop = '5px'
emailError.style.fontSize = '13px'
emailError.style.display = 'none'

email.appendChild(emailError)

function validateEmail() {
	const emailValue = emailInput.value.trim()
	const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

	if (!emailReg.test(emailValue)) {
		emailInput.style.border = '3px solid red'
		emailError.textContent = 'Invalid email address'
		emailError.style.display = 'block'
	} else {
		emailInput.style.border = '1px solid #ccc'
		emailError.textContent = ''
		emailError.style.display = 'none'
	}
}

emailInput.addEventListener('input', validateEmail)