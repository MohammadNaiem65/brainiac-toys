import { FcGoogle } from 'react-icons/fc';
import { FaFacebook, FaPinterest, FaApple } from 'react-icons/fa6';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider/AuthProvider';

const SignUp = () => {
	const { createUserWithEmail, successNotification, errorNotification } =
		useContext(AuthContext);
	const handleSignUp = (e) => {
		e.preventDefault();
		const form = e.target;
		const email = form.email.value;
		const password = form.password.value;
		const confirmPassword = form.confirmPassword.value;
		if (password === confirmPassword) {
			createUserWithEmail(email, password)
				.then((userData) => {
					if (userData.user.email) {
						successNotification('User Created Successfully');
					}
				})
				.catch((err) => errorNotification(err.code));
		} else {
			errorNotification('Password did not match!');
		}
	};
	return (
		<div className='w-1/3 mx-auto my-20 px-10 py-5 bg-primary/60 font-bubblegum rounded'>
			<h2 className='text-4xl text-center'>Sign Up</h2>
			<form className='w-fit mx-auto px-5' onSubmit={handleSignUp}>
				{/* Email */}
				<>
					<label
						htmlFor='email'
						className='text-xl block mb-1 mt-5 tracking-wide'>
						Email
					</label>
					<input
						type='email'
						id='email'
						name='email'
						placeholder='Enter your email.'
						className='w-96 px-3 py-1 outline-primary rounded'
					/>
				</>
				{/* Password */}
				<>
					<label
						htmlFor='password'
						className='text-xl block mb-1 mt-5 tracking-wide'>
						Password
					</label>
					<input
						type='password'
						id='password'
						name='password'
						placeholder='Enter your password.'
						className='w-96 px-3 py-1 outline-primary rounded'
					/>
				</>
				{/* Confirm Password */}
				<>
					<label
						htmlFor='confirmPassword'
						className='text-xl block mb-1 mt-5 tracking-wide'>
						Confirm Password
					</label>
					<input
						type='password'
						id='confirmPassword'
						name='confirmPassword'
						placeholder='Confirm your password.'
						className='w-96 px-3 py-1 outline-primary rounded'
					/>
				</>
				<button
					type='submit'
					className='btn btn-primary block mx-auto mt-7'>
					Sign Up
				</button>
				<div className='w-full'>
					<p className='text-xl text-center mt-10 mb-2'>Or</p>
					<div className='text-4xl flex justify-center gap-x-5'>
						<FcGoogle className='cursor-pointer' />
						<FaFacebook className='cursor-pointer text-blue-600' />
						<FaPinterest className='cursor-pointer text-red-600' />
						<FaApple className='cursor-pointer' />
					</div>
				</div>
			</form>
		</div>
	);
};

export default SignUp;
