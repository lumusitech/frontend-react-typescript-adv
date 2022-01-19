import { useFormik } from 'formik';
import * as Yup from 'yup';

export const FormikYupPage = () => {
	const { values, handleSubmit, errors, resetForm, touched, getFieldProps } =
		useFormik({
			initialValues: { firstname: '', lastname: '', email: '' },
			onSubmit: () => {
				console.log(values);
				resetForm();
			},
			validationSchema: Yup.object({
				firstname: Yup.string()
					.max(15, 'Should has 15 characters or less')
					.required('Fist Name is required'),
				lastname: Yup.string()
					.max(10, 'Should has 10 characters or less')
					.required('Last Name is required'),
				email: Yup.string()
					.email('Invalid format')
					.required('Email is required'),
			}),
		});

	return (
		<div>
			<h1>Formik Yup Page</h1>
			<hr />

			<form onSubmit={handleSubmit} noValidate autoComplete="off">
				<label htmlFor="firstname">First Name</label>
				<input type="text" {...getFieldProps('firstname')} />
				{touched.firstname && errors.firstname && (
					<span>{errors.firstname}</span>
				)}

				<label htmlFor="lastname">Last Name</label>
				<input type="text" {...getFieldProps('lastname')} />
				{touched.lastname && errors.lastname && <span>{errors.lastname}</span>}

				<label htmlFor="email">Email</label>
				<input type="email" {...getFieldProps('email')} />
				{touched.email && errors.email && <span>{errors.email}</span>}

				<button type="submit">Submit</button>
			</form>
		</div>
	);
};
