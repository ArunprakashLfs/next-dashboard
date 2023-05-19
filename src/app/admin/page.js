

"use client"
import React from 'react'
// import Image from 'next/image'
import { motion } from 'framer-motion'
import { cards } from '@/Components/Card'
import Link from 'next/link'
// import developer from '../../../public/images/webdeveloper.png'
// import network from '../../../public/images/network.png'
// import techlead from '../../../public/images/teamleader.png'
import TeamLeaderDashboard from '@/Components/TeamLeaderDashboard'
import EmployeeDashboard from '@/Components/Employees'
import { useUser } from '@/context/userContext'
import { useRouter } from "next/navigation";
// import BasicForm from '@/Components/forms/BasicForm'


const page = () => {

  // const techlead = () =>{
  //   return(
  //     <div>
  //       <Image src="/assets/images/teamleader.png" alt='teamleader' width={50} height={50} />
  //     </div>
  //   )
  // }
  const Router = useRouter()
  const {user, setUser} = useUser()

  const handleLogout = () => {
    // Set the user data to null
    Router.push('/')
    // setUser(null);
  
  };

  
  {
    if (user.email === 'arun@gmail.com') {
      return (
        <div className="flex flex-col h-screen bg-whiteColor">
      <div className="flex items-center justify-between px-4 py-2 bg-shadowColor shadow-md">
        <div className="flex items-center space-x-4">
          <img
            src={user.avatar}
            alt={user.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h1 className="text-lg font-bold">{user.name}</h1>
            <p className="text-sm text-gray-600">{user.email}</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Link href='/basicForm' className="text-blue-600 hover:text-blue-800">
            Edit Profile
          </Link>
          <button
            onClick={handleLogout}
            className="px-4 py-2 text-white bg-red-600 rounded hover:bg-red-700"
          >
            Logout
          </button>
        </div>
      </div>
      <div className="grid grid-cols-4 space-x-3 gap-1 p-[2rem]">
        {cards.map((card) => (
          <motion.div
            key={card.title}
            className={`md:w-4/6 rounded-lg ${card.color} flex items-center gap-2 p-2 flex-col text-white shadow-lg`}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center space-x-2">
              <h2 className="text-xl font-bold">{card.title}</h2>
            </div>
            <img src={card.icon} alt={card.title}  className='h-[3rem] w-[4rem]'/>
            <p className="text-4xl font-bold">{card.value}</p>
            </motion.div>
        ))}
        </div>
        <TeamLeaderDashboard/>
        <EmployeeDashboard/>
        </div>
)
    }
  }
  {
    if (user.email==='manoj@gmail.com' || user.email === 'vishnu@gmail.com') {
      return (
        <div className="flex flex-col h-screen bg-whiteColor">
      <div className="flex items-center justify-between px-4 py-2 bg-shadowColor shadow-md">
        <div className="flex items-center space-x-4">
          <img
            src={user.avatar}
            alt={user.name}
            className="h-[3rem] w-[3rem]  rounded-full"
          />
          <div>
            <h1 className="text-lg font-bold">{user.name}</h1>
            <p className="text-sm text-gray-600">{user.email}</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Link href='/basicForm' className="text-blue-600 hover:text-blue-800" >
            Edit Profile
          </Link>
          <button
            onClick={handleLogout}
            className="px-4 py-2 text-white bg-red-600 rounded hover:bg-red-700"
          >
            Logout
          </button>
        </div>
      </div>
        <TeamLeaderDashboard/>
        <EmployeeDashboard/>
        </div>
)
    }
  }
  {
    if (user.email === 'kesavan@gmail.com' || user.email === 'naveen@gmail.com') {
      return (
        <div className="flex flex-col h-screen bg-whiteColor">
      <div className="flex items-center justify-between px-4 py-2 bg-shadowColor shadow-md">
        <div className="flex items-center space-x-4">
          <img
            src={user.avatar}
            alt={user.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h1 className="text-lg font-bold">{user.name}</h1>
            <p className="text-sm text-gray-600">{user.email}</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Link href={<EmployeeDashboard/>} className="text-blue-600 hover:text-blue-800">
            Edit Profile
          </Link>
          <button
            onClick={handleLogout}
            className="px-4 py-2 text-white bg-red-600 rounded hover:bg-red-700"
          >
            Logout
          </button>
        </div>
      </div>
      
        <EmployeeDashboard/>
        </div>
)
    }
  }
 
}

export default page
