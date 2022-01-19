import { FormEvent } from 'react';
import { useForm } from '../hooks/useForm';

import '../styles/styles.css';

export const RegisterPage = () => {
	const {
		firstname,
		lastname,
		email,
		password1,
		password2,
		formData,
		onChange,
		reset,
		isValidEmail,
	} = useForm({
		firstname: '',
		lastname: '',
		email: '',
		password1: '',
		password2: '',
	});

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(formData);
	};

	return (
		<div>
			<h1>Register Page</h1>
			<hr />

			<form onSubmit={handleSubmit} noValidate autoComplete="off">
				<input
					type="text"
					placeholder="First Name"
					name="firstname"
					value={firstname}
					onChange={onChange}
					className={`${firstname.trim().length <= 0 && 'has-error'}`}
				/>
				{firstname.trim().length === 0 && <span>firstname is required</span>}

				<input
					type="text"
					placeholder="Last Name"
					name="lastname"
					value={lastname}
					onChange={onChange}
					className={`${lastname.trim().length <= 0 && 'has-error'}`}
				/>
				{lastname.trim().length === 0 && <span>lastname is required</span>}

				<input
					type="text"
					placeholder="Email"
					name="email"
					value={email}
					onChange={onChange}
					className={`${!isValidEmail(email) && 'has-error'}`}
				/>

				{!isValidEmail(email) && <span>email is not valid</span>}

				<input
					type="password"
					placeholder="Password"
					name="password1"
					value={password1}
					onChange={onChange}
					className={`has-error`}
				/>
				{password1.trim().length === 0 && <span>password is required</span>}
				{password1.trim().length < 6 && password1.trim().length > 0 && (
					<span>password is too short</span>
				)}

				<input
					type="password"
					placeholder="Repeat password"
					name="password2"
					value={password2}
					onChange={onChange}
					className={`has-error`}
				/>
				{password2.trim().length === 0 && <span>password 2 is required</span>}
				{password2.trim().length > 0 &&
					password2.trim() !== password1.trim() && (
						<span>passwords must be equals</span>
					)}

				<button type="submit">Submit</button>
				<button type="reset" onClick={reset}>
					Reset
				</button>
			</form>
		</div>
	);
};
