import * as yup from 'yup';

export const LOGIN_VALIDATION_SCHEMA = yup.object({
  firstName: yup
    .string()
    .min(2)
    .max(64)
    .matches(/^[A-Z]/, 'Name must starts with capital letter ')
    .matches(/^.[a-z]*$/, 'Second+ characters must be lower letter')
    .required(),
  lastName: yup
    .string()
    .min(2)
    .max(64)
    .matches(/^[A-Z]/, 'Lastname must starts with capital letter ')
    .matches(/^.[a-z]*$/, 'Second+ characters must be lower letter')
    .required(),
  name: yup.string().trim().min(6).max(64).required(),
  email: yup
    .string()
    .email()
    .matches(/^.+@.+$/)
    .required(),
  password: yup
    .string()
    .min(8, 'password must contain 8 or more characters')
    .max(64)
    .matches(
      /^(?=.*[A-Z].*)(?=.*[a-z].*)(?=.*\d.*)(?=.*[!@#$%^&*.].*).{8,20}$/,
      'Password must contain at least one of each: uppercase, lowercase, number'
    )
    .required(),
});
