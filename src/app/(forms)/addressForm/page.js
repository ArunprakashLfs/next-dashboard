'use client'
import * as Yup from 'yup';
import { motion } from 'framer-motion';
import { useFormik } from 'formik';
// import { useNavigate } from 'react-router-dom';
import { useRouter } from 'next/navigation';
// import Feedback from './Feedback';



const page = () => {
  const router = useRouter()
  const formik = useFormik({
    initialValues: {
      address: '',
      addressline: '',
      city :'',
      states : '',
      zipcode :'',
      country :'USA',
    },
    validationSchema: Yup.object({
      address: Yup.string()
        .max(12, "Maximum 12 Characteers")
        .required("Name is required"),
      addressline: Yup.string()
        .max(12, "Maximum 12 Characteers")
        .required("Name is required"),
      city: Yup.string()
        .max(12, "Invalid Email Address")
        .required("Email is required"),
      states: Yup.string()
      .max(12, "Enter proper State")
      .required('State unvalid'),
      zipcode: Yup.string()
      .max(6, "Enter proper code")
      .required("Zipcode is required"),
      country: Yup.string()
      .max(12,"Enter proper Country")
      .required("Contry Required"),

    }),
    onSubmit: (values) => {
      console.log(values);
      router.replace('/feedback')
    },
  })
  return (
    <div className="flex items-center justify-center h-[100vh] bg-whiteColor">
      <motion.form
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        initial="hidden"
        animate="visible"
        onSubmit={formik.handleSubmit}
        className="p-[2rem] rounded-lg bg-shadowColor"
      >

        <h2>Address Of Company</h2>
        <div className="flex flex-col items-start">
          <label htmlFor="address">Company Address</label>
          <motion.input
            transition={{ duration: 0.3 }}
            className="w-full mb-4 rounded-lg p-[0.5rem]"
            type="text"
            name="address"
            value={formik.values.address}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Street Address"
          />

          {formik.touched.address && formik.errors.address && <span className="text-red-500">Enter Proper Address</span>}
          <input
            className="w-full rounded-lg p-[0.5rem]"
            type="text"
            name="addressline"
            value={formik.values.addressline}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Address Line 2"
          />
          {formik.touched.addressline && formik.errors.addressline && <span className="text-red-500">Enter Proper Address</span>}

          <div className="flex gap-2 ">
            <div className="flex flex-col items-start gap-2">
              <label htmlFor="city">City</label>
              <input
                className="rounded-lg p-[0.5rem]"
                name="city"
                value={formik.values.city}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type="text"
                placeholder="Enter City"
              />
              {formik.touched.city && formik.errors.city && <span className="text-red-500">Enter Proper City</span>}

            </div>
            <div className="flex flex-col items-start gap-2">
              <label htmlFor='states'>State/Region</label>
              <input
                className="rounded-lg p-[0.5rem]"
                name='states'
                value={formik.values.states}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type="text"
                placeholder="Enter State/Region"
              />
              {formik.touched.states && formik.errors.states && <span className="text-red-500">Enter Proper City</span>}

            </div>
          </div>
          <div className="flex gap-2">
            <div className="flex flex-col items-start gap-2">
              <label htmlFor='zipcode'>Zipcode</label>
              <input
                className="rounded-lg p-[0.5rem]"
                type='text'
                name='zipcode'
                value={formik.values.zipcode}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter Zipcode"
              />
              {formik.touched.zipcode && formik.errors.zipcode && <span className="text-red-500">Enter Proper City</span>}

            </div>
            <div className="flex flex-col items-start gap-2">
              <label htmlFor='country'>Select Country</label>
              <input
                className="rounded-lg p-[0.5rem]"
                type="text"
                name='country'
                placeholder="Select Country"
              />
              {formik.touched.country && formik.errors.country && <span className="text-red-500">Enter Proper City</span>}

            </div>
          </div>
        </div>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="px-2 py-1 mt-2 ml-40 mx-auto text-center rounded-md text-white bg-blueColor"
          type="submit"
        >
          Submit
        </motion.button>


        <div className="flex justify-between mt-2">
          <button className="px-2 py-1 rounded-md text-white bg-blueColor">
            previous
          </button>
          <button className=" px-2 py-1 rounded-md text-white bg-blueColor">
            Next
          </button>
        </div>
      </motion.form>
    </div>
  );
};

export default page;
