import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { motion } from 'framer-motion';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    <div className="form__wrap">
      <h1>Adding of the product</h1>

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
          <Form className="form">
            <div className="inputs__wrap">
              <div className="relative">
                <Field
                  name="productTitle"
                  className="input__base"
                  placeholder="Title"
                />

                {errors.productTitle && touched.productTitle ? (
                  <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute top-2 right-5 text-red-600"
                  >
                    {errors.productTitle}
                  </motion.div>
                ) : null}
              </div>

              <div className="relative">
                <Field
                  name="author"
                  className="input__base"
                  placeholder="Author"
                />

                {errors.author && touched.author ? (
                  <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute top-2 right-5 text-red-600"
                  >
                    {errors.author}
                  </motion.div>
                ) : null}
              </div>
            </div>

            <div className="w-full flex items-center justify-between">
              <div>
                <Field
                  name="date"
                  type="date"
                  className="input__base w-full mr-4"
                  placeholder="Date"
                />

                {errors.date && touched.date ? <div>{errors.date}</div> : null}
              </div>

              <div>
                <Field
                  name="price"
                  className="input__base"
                  placeholder="Price"
                />

                {errors.price && touched.price ? (
                  <div>{errors.price}</div>
                ) : null}
              </div>
            </div>

            <div className="inputs__wrap">
              <div>
                <Field
                  name="rating"
                  className="input__base"
                  placeholder="Rating"
                />

                {errors.rating && touched.rating ? (
                  <div>{errors.rating}</div>
                ) : null}
              </div>

              <div>
                <Field
                  name="stock"
                  className="input__base"
                  placeholder="Stock"
                />

                {errors.stock && touched.stock ? (
                  <div>{errors.stock}</div>
                ) : null}
              </div>
            </div>

            <Field
              name="category"
              className="input__base w-full mx-0"
              placeholder="Category"
            />

            {errors.category && touched.category ? (
              <div>{errors.category}</div>
            ) : null}

            <button
              className="w-full bg-black rounded-lg text-white py-3 hover:bg-gray-600 transition-all ease duration-200"
              type="submit"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
