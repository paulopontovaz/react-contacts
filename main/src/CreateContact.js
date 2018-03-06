import React, { Component } from 'react'
import ImageInput from './ImageInput'
import { Link } from 'react-router-dom'
import serializeForm from 'form-serialize'

class CreateContact extends Component {
	handleSubmit = (event) => {
		event.preventDefault()
		const values = serializeForm(event.target, { hash: true })

		if(this.props.onCreateContact)
			this.props.onCreateContact(values)
	}

	render(){
		return (
			<div>
				<Link className='close-create-contact' to='/'>Close</Link>
				<form className='create-contact-form' onSubmit={this.handleSubmit}>
					<ImageInput
						className='create-contact-avatar-input'
						name='avatarURL' />
					<div className='create-contact-details'>
						<input type='text' name='name' placeholder='Name' />
						<input type='text' name='email' placeholder='Email' />
						<button>Add Contact</button>
					</div>
				</form>
			</div>
		)
	}
}

export default CreateContact;
