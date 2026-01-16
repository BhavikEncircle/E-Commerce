import * as Yup from 'yup'
export const loginSchema = Yup.object({
  username: Yup.string()
    .required('Username is required')
    .min(3, 'Minimum 3 characters'),
  password: Yup.string()
    .required('Password is Required')
    .min(5, 'Password must contain atleast 5 characters'),
})
