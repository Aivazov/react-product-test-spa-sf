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

export default function FormikForm() {
  return (
    <div>
      <h1>Signup</h1>

      <Formik
        initialValues={{
          productTitle: '',

          author: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          // same shape as initial values

          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div>
              <Field
                name="productTitle"
                className="input__base"
                placeholder="Title"
              />

              {errors.productTitle && touched.productTitle ? (
                <div>{errors.productTitle}</div>
              ) : null}

              <Field
                name="author"
                className="input__base"
                placeholder="Author"
              />

              {errors.author && touched.author ? (
                <div>{errors.author}</div>
              ) : null}
            </div>

            <div>
              <Field
                name="date"
                type="date"
                className="input__base"
                placeholder="Date"
              />

              {errors.date && touched.date ? <div>{errors.date}</div> : null}

              <Field name="price" className="input__base" placeholder="Price" />

              {errors.price && touched.price ? <div>{errors.price}</div> : null}
            </div>

            <div>
              <Field
                name="rating"
                className="input__base"
                placeholder="Rating"
              />

              {errors.rating && touched.rating ? (
                <div>{errors.rating}</div>
              ) : null}

              <Field name="stock" className="input__base" placeholder="Stock" />

              {errors.stock && touched.stock ? <div>{errors.stock}</div> : null}
            </div>

            <Field
              name="category"
              className="input__base"
              placeholder="Category"
            />

            {errors.category && touched.category ? (
              <div>{errors.category}</div>
            ) : null}

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
