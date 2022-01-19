import { Formik, Form } from 'formik';

import { MyTextInput } from '../components/MyTextInput';
import { MySelect } from '../components';

import formJson from '../data/custom-form.json';
import * as Yup from 'yup';

const initialValues: { [key: string]: any } = {};
const requiredFields: { [key: string]: any } = {};

for (const input of formJson) {
	initialValues[input.name] = input.value;

	if (!input.validations) continue;

	let schema = Yup.string();
	for (const rule of input.validations) {
		if (rule.type === 'required') {
			schema = schema.required('this field is required');
		}

		if (rule.type === 'minLegth') {
			schema = schema.min(
				(rule as any).value || 2,
				`must be greater than ${(rule as any).value}`
			);
		}

		if (rule.type === 'email') {
			schema = schema.email('Invalid format');
		}
		// ...other validations

		requiredFields[input.name] = schema;
	}
}

const validationSchema = Yup.object({ ...requiredFields });

export const DynamicFormPage = () => {
	return (
		<div>
			<h1>Dynamic Formik Page</h1>
			<hr />

			<Formik
				initialValues={initialValues}
				onSubmit={(values) => console.log(values)}
				validationSchema={validationSchema}>
				{(formik) => (
					<Form autoComplete="off">
						{formJson.map(({ name, label, placeholder, type, options }) => {
							if (type === 'input' || type === 'email' || type === 'password') {
								return (
									<MyTextInput
										key={name}
										name={name}
										label={label}
										placeholder={placeholder}
									/>
								);
							} else if (type === 'select') {
								return (
									<MySelect name={name} key={name} label={label}>
										<option value="">Select an option</option>
										{options?.map(({ id, label }) => (
											<option key={id} value={id}>
												{label}
											</option>
										))}
									</MySelect>
								);
							}

							throw new Error(`Type ${type} is not supported`);
						})}

						<button type="submit">Submit</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};
