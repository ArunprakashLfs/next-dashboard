import { useFormik } from 'formik'
import React from 'react'
import {motion} from 'framer-motion'
import * as Yup from "yup";
import { useRouter } from 'next/navigation';
import AddressForm from './AddressForm';

const BasicForm = () => {
    const router = useRouter()
    const formik = useFormik({
        initialValues:{
            FirstName: '',
            LastName:'',
            email: '',
            phoneNo:'',
            title:'',
            Department:'',
        },
        validationSchema:Yup.object({
            FirstName:Yup.string()
            .max(12, "Maximum 12 Characteers")
            .required("Name is required"),
            LastName:Yup.string()
            .max(12, "Maximum 12 Characteers")
            .required("Name is required"),
            email:Yup.string()
            .email("Invalid Email Address")
            .required("Email is required"),
            phoneNo:Yup.number()
            .max(9999999999,"Maximum 10 numbers")
            .min(1111111, "minimum 10 degits")
            .required("Enter phone no properly"),
            title:Yup.string()
            .max(20, "max 20 characters")
            .required("Enter Proper Value"),
            Department:Yup.string()
            .max(20, "max 20 characters")
            .required("Enter Proper Value"),

        }),
        onSubmit:(values)=>{
            console.log(values);
            router.replace(<AddressForm/>)
        },
    })
    // console.log(formik.values);
  return (

      
      <motion.div
      className='flex flex-col gap-4 items-center justify-center bg-whiteColor w-[100vw] h-[100vh]'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
         <motion.form
        onSubmit={formik.handleSubmit}
        className='bg-shadowColor px-[2rem] py-2 rounded-lg text-center '
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
              <h2 className='font-semibold text-[20px] mb-3'>Employee Details Verification</h2>
              <div className='flex gap-2'>
                  <div className='flex flex-col items-start gap-2'>
                      <label htmlFor='FirstName'>First Name</label>
                      <input
                          type='text'
                          name='FirstName'
                          value={formik.values.FirstName}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          className='rounded-lg p-2'
                          placeholder='Enter FirstName' />
                          {formik.errors.FirstName && formik.touched.Department && <span className='text-red-500'>max 12 characters</span>}
                  </div>
                  {formik.errors ? formik.errors.FirstName : "max character is 18"}
                  <div className='flex flex-col items-start gap-2'>
                      <label htmlFor='LastName'>Last Name</label>
                      <input
                          type='text'
                          name='LastName'
                          value={formik.values.LastName}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          className='rounded-lg p-2'
                          placeholder='Enter LastName' />
                          {formik.errors.LastName && formik.touched.Department && <span className='text-red-500'>max 12 characters</span>}

                  </div>
              </div>
              <div className='flex items-start flex-col'>
                  <label htmlFor='email'>Enter Email</label>
                  <input
                      value={formik.values.email}
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      className=' w-full border-2 border-white rounded-lg p-2 focus:border-whiteColor focus:border-2 focus:bg-whiteColor focus:ring-whiteColor'
                      type='email'
                      placeholder='Enter Email'
                      name='email'
                  />
                  {formik.errors.email && formik.touched.Department && <span className='text-red-500'>Invalid Email</span>}
              </div>
              <div className='flex items-start flex-col'>
                  <label htmlFor='phoneNo'>Enter phoneNo</label>
                  <input
                      className=' w-full focus:bg-whiteColor rounded-lg p-2 focus:ring-whiteColor'
                      type='number'
                      name='phoneNo'
                      value={formik.values.phoneNo}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      placeholder='Enter phoneNo' />
                      {formik.errors.phoneNo && formik.touched.Department && <span className='text-red-500'>Enter proper No</span>}
              </div>
              <div className='flex items-start flex-col'>
                  <label htmlFor='title'>Title</label>
                  <input
                      value={formik.values.title}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      name='title'
                      className=' w-full rounded-lg p-2 focus:bg-whiteColor focus:ring-whiteColor' type='text' placeholder='Title' />
                      {formik.errors.title && formik.touched.Department && <span className='text-red-500'>Enter proper Value</span>}

              </div>
              <div className='flex flex-col items-start'>
                  <label htmlFor='department'>Department</label>
                  <input
                      name='Department'
                      value={formik.values.Department}
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      className=' w-full focus:bg-whiteColor rounded-lg p-2 focus:ring-whiteColor' type='text' placeholder='Department' />
                      {formik.errors.Department && formik.touched.Department && <span className='text-red-500'>Enter Department</span>}

              </div>

              <button
              type='submit' 
              className='m-auto mt-[1rem] px-2 py-1 text-center  p-2 text-white rounded-lg bg-blueColor'>Submit</button>

              <div className="text-end mt-2">
                  {/* <button className="px-2 py-1 rounded-md text-white bg-blueColor">
                      previous
                  </button> */}
                  <button className=" px-2 py-1 rounded-md text-white bg-blueColor">
                      Next
                  </button>
              </div>
              </motion.form>
      </motion.div>  
  );
};

export default BasicForm;
