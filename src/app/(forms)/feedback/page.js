'use client'
import React from "react";
import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";
import { useRouter } from "next/navigation";
import { useFormik} from "formik";
import * as Yup from "yup";

const FeedbackSchema = Yup.object().shape({
  supervisorAttitude: Yup.number()
    .typeError("Please provide a number")
    .min(1, "Please rate your supervisor's attitude from 1-10")
    .max(10, "Please rate your supervisor's attitude from 1-10")
    .required("Please rate your supervisor's attitude from 1-10"),
  hrAttitude: Yup.number()
    .typeError("Please provide a number")
    .min(1, "Please rate our HR managers' attitudes from 1-10")
    .max(10, "Please rate our HR managers' attitudes from 1-10")
    .required("Please rate our HR managers' attitudes from 1-10"),
  teamSatisfaction: Yup.string()
    .max(200, "Your response cannot exceed 200 characters")
    .required("Please provide a response"),
});


const page = () => {
  const router = useRouter()
  const formik = useFormik({
    initialValues: {
      picked: '',
      supervisorAttitude: "",
      hrAttitude: "",
      teamSatisfaction: "",
      feedback: "",
    },
    validationSchema: FeedbackSchema,
    onSubmit: (values) => {
      console.log(values);
      router.replace('/')
    },
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex items-center bg-whiteColor justify-center h-[100vh] w-[100vw]"
    >
      <form
        onSubmit={formik.handleSubmit}
        className="p-[2rem] flex flex-col items-start gap-6 content-between bg-shadowColor"
      >
        <div>
          <label htmlFor="supervisorAttitude">
            How would you rate your supervisor's attitude towards you and the
            rest of the team?
          </label>
          <input
            id="supervisorAttitude"
            name="supervisorAttitude"
            type="number"
            min="1"
            max="10"
            value={formik.values.supervisorAttitude}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`${
              formik.touched.supervisorAttitude &&
              formik.errors.supervisorAttitude
                ? "border-red-500"
                : ""
            }`}
          />
          {formik.touched.supervisorAttitude &&
            formik.errors.supervisorAttitude && (
              <div className="text-red-500 text-xs">
                {formik.errors.supervisorAttitude}
              </div>
            )}
        </div>
        <div>
          <label htmlFor="hrAttitude">
            How would you rate our HR managers' attitudes?
          </label>
          <input
            id="hrAttitude"
            name="hrAttitude"
            type="number"
            min="1"
            max="10"
            value={formik.values.hrAttitude}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`${
              formik.touched.hrAttitude && formik.errors.hrAttitude
                ? "border-red-500"
                : ""
            }`}
          />
          {formik.touched.hrAttitude && formik.errors.hrAttitude && (
            <div className="text-red-500 text-xs">
              {formik.errors.hrAttitude}
            </div>
          )}
        </div>
        <div className="flex flex-col">
          <label>How satisfied are you with your team?</label>
          <input
            id="teamSatisfaction"
            name="teamSatisfaction"
            type="text"
            value={formik.values.teamSatisfaction}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`${
              formik.touched.teamSatisfaction && formik.errors.teamSatisfaction
                ? "border-red-500"
                : ""
            }`}
          />
          {formik.touched.teamSatisfaction && formik.errors.teamSatisfaction && (
            <div className="text-red-500 text-xs">
              {formik.errors.teamSatisfaction}
            </div>
            )}
        </div>
        <div id="my-radio-group">Your Collegues are helpful?</div>
          <div role="group" aria-labelledby="my-radio-group">
            <label>
              <input type="radio" name="picked" value="yes" />
              yes
            </label>
            <label>
              <input type="radio" name="picked" value="No" />
              No
            </label>
            <div>Picked: {formik.values.picked}</div>
          </div>
        <div className="flex flex-col">
          <label>Do you have anything else you'd like us to know?</label>
          <textarea />
        </div>
        <button type="submit" className="px-4 py-2 mt-2 text-center rounded-md text-white bg-blueColor">
          Submit
        </button>
        <div className="flex justify-between mt-2">
          <button className="px-4 py-2 rounded-md text-white bg-blueColor">
            previous
          </button>
          <button className="px-4 py-2 rounded-md text-white bg-blueColor">
            Next
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default page;

        