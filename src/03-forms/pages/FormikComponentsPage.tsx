import { Formik, ErrorMessage, Field, Form } from 'formik';
import * as Yup from 'yup';

export const FormikComponentsPage = () => {
	return (
		<div>
			<h1>Formik Components Page</h1>
			<hr />
			<Formik
				initialValues={{
					firstname: '',
					lastname: '',
					email: '',
					terms: false,
					jobType: '',
				}}
				onSubmit={(values) => console.log(values)}
				validationSchema={Yup.object({
					firstname: Yup.string()
						.max(15, 'Should has 15 characters or less')
						.required('Fist Name is required'),
					lastname: Yup.string()
						.max(10, 'Should has 10 characters or less')
						.required('Last Name is required'),
					email: Yup.string()
						.email('Invalid format')
						.required('Email is required'),
					terms: Yup.boolean().oneOf(
						[true],
						'Should acept Terms and Conditions'
					),
					jobType: Yup.string()
						.required('Job Type is required')
						.notOneOf(['it-jr'], 'should not select IT Junior'),
				})}>
				{(formik) => (
					<Form autoComplete="off">
						<label htmlFor="firstname">First Name</label>
						<Field name="firstname" type="text" />
						<ErrorMessage name="firstname" component="span" />

						<label htmlFor="lastname">Last Name</label>
						<Field name="lastname" type="text" />
						<ErrorMessage name="lastname" component="span" />

						<label htmlFor="email">Email</label>
						<Field name="email" type="text" />
						<ErrorMessage name="email" component="span" />

						<label htmlFor="jobType">Job Type</label>
						<Field name="jobType" as="select">
							<option value="">pick something</option>
							<option value="developer">Developer</option>
							<option value="designer">Designer</option>
							<option value="it-senior">IT Senior</option>
							<option value="it-jr">IT Junior</option>
						</Field>
						<ErrorMessage name="jobType" component="span" />

						<label>
							<Field name="terms" type="checkbox" />
							Terms and Conditions
						</label>
						<ErrorMessage name="terms" component="span" />

						<button type="submit">Submit</button>
					</Form>
				)}
			</Formik>
			;
		</div>
	);
};
