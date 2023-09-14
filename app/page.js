"use client"

import React,{ useState } from "react"

export default function Home() {

  const [dstail , setDetail] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    dateOfBirth: "" ,
    gender: "",
    address: "",
    programIntrested:"",
  });

  const handleChange = (e) =>{
    const {name ,value} = e.target;
  }

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [dateOfBirth, setDateOfBirth] = useState();
  const [gender, setGender] = useState();
  const [address, setAddress] = useState();
  const [programIntrested, setProgrameIntrested] = useState();


  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Phone Number:', phoneNumber);
    console.log('Date of Birth:', dateOfBirth);
    console.log('Gender:', gender);
    console.log('Address:', address);
    console.log('Program of Interest:', programIntrested);
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="w-1/2 mx-auto mt-8 p-4 bg-gray-100 shadow-md rounded-lg">
        <h1 className="text-2xl text-center font-semibold mb-6">Admission Form</h1>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-800 font-semibold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={(e)=> setName(e.target.value) }
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-800 font-semibold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            onChange={(e)=> setEmail(e.target.value) }
            name="email"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phoneNumber" className="block text-gray-800 font-semibold mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            onChange={(e)=> setPhoneNumber(e.target.value) }
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Enter your phone number"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="dob" className="block text-gray-800 font-semibold mb-2">
            Date of Birth
          </label>
          <input
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            onChange={(e)=> setDateOfBirth(e.target.value) }
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="gender" className="block text-gray-800 font-semibold mb-2">
            Gender
          </label>
          <select
            id="gender"
            name="gender"
            onChange={(e)=> setGender(e.target.value) }
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="block text-gray-800 font-semibold mb-2">
            Address
          </label>
          <textarea
            id="address"
            name="address"
            onChange={(e)=> setAddress(e.target.value) }
            rows="3"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Enter your address"
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="program" className="block text-gray-800 font-semibold mb-2">
            Program of Interest
          </label>
          <select
            id="programIntrested"
            name="programIntrested"
            onChange={(e) => setProgrameIntrested(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          >
            <option value="computer-science">Computer Science</option>
            <option value="business-administration">Business Administration</option>
            <option value="engineering">Engineering</option>
          </select>
        </div>
        <div className="text-center">
          <button
            type="submit"
           
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Submit
          </button>
        </div>
      </form>

<div className="">
  <p>{name}</p>
  <p>{email}</p>
  <p>{phoneNumber}</p> 
  <p>{dateOfBirth}</p>
  <p>{gender}</p>
  <p>{address}</p>
  <p>{programIntrested}</p>

</div>


    </>
  )
}
