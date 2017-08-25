/*
    Module: @mitchallen/react-password-input-field
    Author: Mitch Allen
*/

import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';

const checkboxStyle = {
  block: {
    maxWidth: 250,
  },
  checkbox: {
    marginBottom: 16,
  },
};

const PasswordInputField =  ({ floatingLabelText = 'password', hintText = 'secret', showPasswordOption = false, fieldStyle = {}, ...props }) => (
	<div>
		<TextField  {...props}
			type='password'
			autoCapitalize='off'
			autoComplete='off'
			hintStyle={ fieldStyle.hintStyle }
			hintText={ hintText }
			inputStyle={ fieldStyle.whiteStyle }
			floatingLabelStyle={ fieldStyle.hintStyle }
			floatingLabelFocusStyle={ fieldStyle.floatingLabelFocusStyle }
			floatingLabelText={ floatingLabelText }
			underlineStyle={ fieldStyle.underlineStyle }
		/>
		{ showPasswordOption ? <Checkbox
			label='show password'
			labelPosition='right'
			style={ checkboxStyle }
			iconStyle={{ fill: 'white' }}
			labelStyle={ fieldStyle.hintStyle }
		/> : null }
	</div>
);

PasswordInputField.propTypes = {
  floatingLabelText: PropTypes.string,
  hintText: PropTypes.string,
  showPasswordOption: PropTypes.bool,
  fieldStyle: PropTypes.object
};

export default PasswordInputField;
