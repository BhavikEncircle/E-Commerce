import { useFormik } from 'formik'
import React from 'react'
import { loginSchema } from '../../Utils/Validation/loginSchema'
import { useNavigate } from 'react-router-dom'
const Login = () => {
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      if (values.username === 'admin' && values.password === '12345') {
        localStorage.setItem('isAuth', 'true')
        alert('Login Successful')
        navigate('/dashboard')
      } else {
        alert('Invalid Credentials')
      }
    },
  })
  return (
    <div className='flex justify-center items-center min-h-screen bg-gray-50'>
      <div className='bg-white p-8 rounded-lg shadow-lg w-full max-w-md'>
        <h2 className='text-xl font-semibold text-gray-900 flex justify-center mb-6'>
          Login your Account
        </h2>
        <form className='space-y-4' onSubmit={formik.handleSubmit}>
          <div>
            <label className='block font-semibold mb-2 text-gray-900'>
              Username
            </label>
            <input
              type='text'
              value={formik.values.username}
              name='username'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder='Enter your username'
              className='w-full px-4 py-2 bg-white border border-gray-300 text-gray-900 rounded-md '
            />
            {formik.touched.username && formik.errors.username && (
              <p className='text-red-500'>{formik.errors.username} </p>
            )}
          </div>

          <div>
            <label className='block font-semibold mb-2 text-gray-900'>
              Password
            </label>
            <input
              type='password'
              name='password'
              value={formik.values.password}
              placeholder='Enter your password'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className='w-full px-4 py-2 bg-white border border-gray-300 text-gray-900 rounded-md '
            />
            {formik.touched.password && formik.errors.password && (
              <p className='text-red-500'>{formik.errors.password}</p>
            )}
          </div>

          <button
            type='submit'
            className='mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200'
          >
            Next
          </button>
        </form>
        <div>
          <h2 className='flex mt-2 justify-center'>
            Hint : Username - admin | Password : 12345
          </h2>
        </div>
      </div>
    </div>
  )
}

export default Login
