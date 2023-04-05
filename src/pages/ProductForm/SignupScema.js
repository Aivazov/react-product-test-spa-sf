import * as Yup from 'yup';
export const SignupSchema = Yup.object().shape({
  productTitle: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),

  author: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),

  date: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),

  price: Yup.number().required().positive().integer().required('Required'),

  rating: Yup.number().required().positive().integer().required('Required'),

  stock: Yup.number().required().positive().integer().required('Required'),

  category: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});