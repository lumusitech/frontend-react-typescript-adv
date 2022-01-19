import { Form, Formik } from 'formik';
// import { FormEvent } from 'react';
// import { useForm } from '../hooks/useForm';

import '../styles/styles.css';
import * as Yup from 'yup';
import { MyTextInput } from '../components';

export const RegisterFormikPage = () => {
	return (
		<div>
			<h1>Register Formik</h1>
			<hr />

			<Formik
				initialValues={{
					firstname: '',
					lastname: '',
					email: '',
					password1: '',
					password2: '',
				}}
				onSubmit={(values) => console.log(values)}
				validationSchema={Yup.object({
					firstname: Yup.string()
						.required('Required')
						.max(15, 'must has 15 characters or less')
						.min(2, 'must has two or more characters'),

					lastname: Yup.string()
						.required('Required')
						.max(10, 'must has 15 characters or less')
						.min(2, 'must has two or more characters'),

					email: Yup.string().required('Required').email(),

					password1: Yup.string()
						.required('Required')
						.min(6, 'must has six or more characters'),

					password2: Yup.string()
						.required('Required')
						.oneOf([Yup.ref('password1')], 'Paswwords must be equals'),
				})}>
				{({ handleReset }) => (
					<Form>
						<MyTextInput name="firstname" label="First Name" />
						<MyTextInput name="lastname" label="Last Name" />
						<MyTextInput name="email" label="Email" type="email" />
						<MyTextInput name="password1" label="Password" type="password" />
						<MyTextInput
							name="password2"
							label="Repeat Password"
							type="password"
						/>

						<button>Submit</button>
						<button onClick={handleReset}>Reset</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};
