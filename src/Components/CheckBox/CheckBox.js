import React from 'react';
import PropTypes from 'prop-types'
import './CheckBox.css';

//Checkbox with label is most common used component
//Use stateless method to create the component
//Component state should be managed by higher level container

const CheckBox = (props) => {
	// compute component state from props.checked
	let computeComponentState = (checked) => {
		return checked ? 'checkbox checkmark' : 'checkbox';
	}
	return (
		<div className="container" onClick={props.onClick}>
			<div className={computeComponentState(props.checked)}></div>
			<span className="checkbox-label">{props.label}</span>
		</div>
	);
}

CheckBox.propTypes = {
	checked: PropTypes.bool,
	label: PropTypes.string
}

export default CheckBox;