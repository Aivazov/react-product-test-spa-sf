import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
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

export default function ProductForm() {
  return (
    <div>
      <h1>Add product</h1>

      <Formik
        initialValues={{
          productTitle: '',
          author: '',
          date: Date,
          price: '',
          rating: '',
          stock: '',
          category: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          // same shape as initial values

          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form className="form">
            <Field
              name="productTitle"
              className="input__base"
              placeholder="Product Title"
            />

            {errors.productTitle && touched.productTitle ? (
              <div>{errors.productTitle}</div>
            ) : null}

            <Field name="author" className="input__base" placeholder="Author" />

            {errors.author && touched.author ? (
              <div>{errors.author}</div>
            ) : null}

            <Field name="date" className="input__base" placeholder="Date" />

            {errors.date && touched.date ? <div>{errors.date}</div> : null}

            <Field name="price" className="input__base" placeholder="Price" />

            {errors.price && touched.price ? <div>{errors.price}</div> : null}

            <Field name="stock" className="input__base" placeholder="Stock" />

            {errors.stock && touched.stock ? <div>{errors.stock}</div> : null}

            <Field
              name="category"
              className="input__base"
              placeholder="Category"
            />

            {errors.category && touched.category ? (
              <div>{errors.category}</div>
            ) : null}

            <button
              type="submit"
              className="w-full bg-black rounded-lg text-white py-3 hover:bg-gray-600 transition-all ease duration-200"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
