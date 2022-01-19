import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { MyTextInput, MyCheckbox, MySelect } from '../components';

export const FormikAbstractPage = () => {
	return (
		<div>
			<h1>Formik Abstract Page</h1>
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
						<MyTextInput
							name="firstname"
							label="First Name"
							placeholder="First Name"
						/>
						<MyTextInput
							name="lastname"
							label="Last Name"
							placeholder="Last Name"
						/>
						<MyTextInput
							name="email"
							label="Email"
							placeholder="Email"
							type="email"
						/>

						<MySelect name="jobType" label="Job Type">
							<option value="">pick something</option>
							<option value="developer">Developer</option>
							<option value="designer">Designer</option>
							<option value="it-senior">IT Senior</option>
							<option value="it-jr">IT Junior</option>
						</MySelect>

						<MyCheckbox name="terms" label="Terms and Conditions" />

						<button type="submit">Submit</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};
