import { ChangeEvent, useState } from 'react';

export const useForm = <T>(initState: T) => {
	const [formData, setFormData] = useState<T>(initState);

	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const isValidEmail = (email: string) => {
		const re =
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(email);
	};

	const reset = () => {
		setFormData(initState);
	};

	return { formData, ...formData, onChange, reset, isValidEmail };
};
