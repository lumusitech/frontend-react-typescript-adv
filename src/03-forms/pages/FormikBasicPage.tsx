import { FormikErrors, useFormik } from 'formik';

interface FormValues {
	firstname: string;
	lastname: string;
	email: string;
}

export const FormikBasicPage = () => {
	const validate = ({ firstname, lastname, email }: FormValues) => {
		const errors: FormikErrors<FormValues> = {};

		if (!firstname) errors.firstname = 'Required';
		else if (firstname.length > 15)
			errors.firstname = 'Must be 15 characters or less';

		if (!lastname) errors.lastname = 'Required';
		else if (lastname.length >= 10)
			errors.lastname = 'Must be 10 characters or less';

		if (!email) errors.email = 'Required';
		else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email))
			errors.email = 'Invalid email address';

		return errors;
	};

	const {
		values,
		handleChange,
		handleSubmit,
		errors,
		resetForm,
		touched,
		handleBlur,
	} = useFormik<FormValues>({
		initialValues: { firstname: '', lastname: '', email: '' },
		onSubmit: () => {
			console.log(values);
			resetForm();
		},
		validate,
	});

	return (
		<div>
			<h1>Formik Basic Page</h1>
			<hr />

			<form onSubmit={handleSubmit} noValidate autoComplete="off">
				<label htmlFor="firstname">First Name</label>
				<input
					type="text"
					name="firstname"
					value={values.firstname}
					onChange={handleChange}
					onBlur={handleBlur}
				/>
				{touched.firstname && errors.firstname && (
					<span>{errors.firstname}</span>
				)}

				<label htmlFor="lastname">Last Name</label>
				<input
					type="text"
					name="lastname"
					value={values.lastname}
					onChange={handleChange}
					onBlur={handleBlur}
				/>
				{touched.lastname && errors.lastname && <span>{errors.lastname}</span>}

				<label htmlFor="email">Email</label>
				<input
					type="email"
					name="email"
					value={values.email}
					onChange={handleChange}
					onBlur={handleBlur}
				/>
				{touched.email && errors.email && <span>{errors.email}</span>}

				<button type="submit">Submit</button>
			</form>
		</div>
	);
};
