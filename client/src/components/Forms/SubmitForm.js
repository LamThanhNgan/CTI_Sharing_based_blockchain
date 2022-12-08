/**
 *    SPDX-License-Identifier: Apache-2.0
 */

import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import { post } from '../../services/request';

const styles = theme => ({
	container: {
		display: 'flex',
		flexWrap: 'wrap'
	},
	form: {
		width: 310
	},
	textField: {
		marginLeft: theme.spacing.unit,
		marginRight: theme.spacing.unit,
		width: 130
	},
	fileField: {
		marginLeft: theme.spacing.unit,
		marginRight: theme.spacing.unit,
		width: 300
	},
	menu: {
		width: 200
	}
});

class SubmitForm extends Component {
	handleOnClick() {
		console.log('Clicked');
		let file = document.getElementById('submit-file').files[0];
		//console.log(file.text())

		( async () =>{ const content = await file.text();
			// console.log(content)

		post('/apiV2/submit/', JSON.parse(content))
			.then(value => console.log(value))
			.catch(err => console.log(err));
		})()
	}

	render() {
		const { classes } = this.props;

		return (
			// TODO : Replace with liform-react
			<div>
				<br /> SUBMIT FORM
				<form className={classes.form}>
					<TextField
						type="file"
						id="submit-file"
						label="Submit"
						className={classes.fileField}
						helperText="Json File submit"
						margin="normal"
					/>
					<Button size="small" color="primary" onClick={this.handleOnClick}>
						Submit
					</Button>
				</form>
			</div>
		);
	}
}

export default withStyles(styles)(SubmitForm);
