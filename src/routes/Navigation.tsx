import {
	BrowserRouter,
	Navigate,
	NavLink,
	Route,
	Routes,
} from 'react-router-dom';
import logo from '../logo.svg';
import {
	RegisterPage,
	FormikAbstractPage,
	FormikBasicPage,
	FormikComponentsPage,
	FormikYupPage,
	RegisterFormikPage,
	DynamicFormPage,
} from '../03-forms/pages';

export const Navigation = () => {
	return (
		<BrowserRouter>
			<div className="main-layout">
				<nav>
					<img src={logo} alt="React logo" />

					<ul>
						<li>
							<NavLink
								to="/register"
								className={({ isActive }) => (isActive ? 'nav-active' : '')}>
								Register
							</NavLink>
						</li>

						<li>
							<NavLink
								to="/formik-basic"
								className={({ isActive }) => (isActive ? 'nav-active' : '')}>
								Formik Basic
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/formik-yup"
								className={({ isActive }) => (isActive ? 'nav-active' : '')}>
								Formik Yup
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/formik-components"
								className={({ isActive }) => (isActive ? 'nav-active' : '')}>
								Formik Components
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/formik-abstract"
								className={({ isActive }) => (isActive ? 'nav-active' : '')}>
								Formik Abstract
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/register-formik"
								className={({ isActive }) => (isActive ? 'nav-active' : '')}>
								Register with Formik
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/dynamic-formik"
								className={({ isActive }) => (isActive ? 'nav-active' : '')}>
								Dynamic Formik
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/users"
								className={({ isActive }) => (isActive ? 'nav-active' : '')}>
								Users
							</NavLink>
						</li>
					</ul>
				</nav>

				<Routes>
					<Route path="register" element={<RegisterPage />} />
					<Route path="formik-basic" element={<FormikBasicPage />} />
					<Route path="formik-yup" element={<FormikYupPage />} />
					<Route path="formik-components" element={<FormikComponentsPage />} />
					<Route path="formik-abstract" element={<FormikAbstractPage />} />
					<Route path="register-formik" element={<RegisterFormikPage />} />
					<Route path="dynamic-formik" element={<DynamicFormPage />} />
					<Route path="users" element={<h1>Users Page</h1>} />
					<Route path="/*" element={<Navigate to="/register" replace />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
};
