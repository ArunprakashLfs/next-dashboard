"use client"

import Swal from "sweetalert2";
import Image from "next/image";
import { useState } from "react";
import { useUser, UserProvider } from "@/context/userContext";
// import { useRouter } from "next/router";
// import { useRouter } from "next/router";
import { useRouter } from "next/navigation";
// import { useState } from "react";
// import { useUser } from "../context/UserContext.";
import { Users } from "@/Components/UserData"
// import Link from "next/link";
// import next from "next/types";

const network =()=>{
  return(
    <Image src='/assets/images/network.png' alt="network" width={50} height={50}/>
  )
}

const page = () => {
  const router = useRouter();

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [userType, setUserType] = useState("")
  const { setUser } = useUser();

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (email === '' || password === '') {
      Swal.fire(
        'Enter Proper value!',
        'You clicked the button!',
        'warning'
      )
    } else {
      const selectedUser = Users[userType].find(
        (user) => user.email === email && user.password === password
      );

      if (selectedUser) {
        // Successful login
        console.log('Logged in as ' + selectedUser.name);
        Swal.fire({
          title: `Successfully Logedin`,
          text: `Welcome ${selectedUser.name}`,
          imageUrl: network,
          imageWidth: 400,
          imageHeight: 200,
          imageAlt: 'Custom image',
        });
        setUser(selectedUser);
        // {userType==="admin"?Navigate('/Admin')
        // :userType==="teamLeader"? Navigate('/FormThree'): Navigate('/FormOne')}
        // {selectedUser.name = "Arun Prakash" ? Navigate("/Admin"): Navigate("/FormOne")}
        if (userType === 'admin') {
          router.replace('/admin')
        } else {
          if (userType === 'teamLeader') {
            router.replace('/admin')
          } else {
            router.replace('/admin')
          }
        }

      } else {
        // Failed login
        Swal.fire(
          'User Doesnot Exit!',
          'You clicked the button!',
          'error'
        )
        // {Error.password && <p>enter your password</p>}
        // if (email === "") {
        //   alert("email is error")
        // }
      }
    };
  }


  return (
    <div className="container bg-whiteColor flex flex-col w-[100vw] h-[100vh] justify-center items-center ">
      <div className=" bg-shadowColor flex flex-col p-[2rem] rounded-lg">
        <form onSubmit={handleSubmit} className="flex flex-col">
          <h1 className="text-2xl text-center mb-[0.5rem]">Login</h1>
          <p className=" text-center">Please enter your credentials to Login!</p>
          <br />
          {/* <label>Username</label>
        <input
          className=" rounded-lg p-[0.5rem]"

          type="Username"
          name="username"
          placeholder="username"
        />
        <br /> */}
          <label>E-mail</label>
          <input
            className=" rounded-lg p-[0.5rem]"
            type="Email"
            name="email"
            placeholder="e-mail"
            value={email} onChange={handleEmailChange}
          />

          <br />
          <label>Password</label>
          <input
            className=" rounded-lg p-[0.5rem]"
            type="Password"
            name="password"
            placeholder="password"
            value={password} onChange={handlePasswordChange}
          />
          {/* {errors.email.required ? (
            <span className="text-danger">Email is required</span>
          ) : null} */}
          <br />
          <label className="mb-4 flex flex-col gap-1">
            User Type
            <select className="rounded-lg p-2 " value={userType} onChange={handleUserTypeChange}>
              <option value="">Select User Type</option>
              <option value="admin">Admin</option>
              <option value="teamLeader">teamLeader</option>
              <option value="Employees">Employees</option>
            </select>
          </label>
          {/* <div>
            {loading ? (
              <div className="text-center">
                <div className="spinner-border">
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            ) : null}
          </div> */}
          <button
            className="bg-blueColor rounded-lg mt-[0.5rem] hover:bg-blue-500 text-white font-semibold p-[0.5rem]">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default page
