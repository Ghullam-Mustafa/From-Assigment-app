"use client"

import React, { useState } from "react"


const initialState = {
  name: "",
  email: "",
  phoneNumber: "",
  dateOfBirth: "",
  gender: "",
  address: "",
  programIntrested: "",
}


export default function Home() {

  const [state, setState] = useState(initialState);
  const [data, setData] = useState([]);

  const handleChange = (e) => {
    setState((s) => ({ ...s, [e.target.name]: e.target.value }))


  }




  // const handleSubmit = (e) => {
  //   let array = []
  //   e.preventDefault();

  //   array.push(state)
  //   setData(array)

  //   console.log(array);
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    setData((prevData) => [...prevData, state]);
    setState(initialState); // Reset the form fields
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

            onChange={handleChange}
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

            onChange={handleChange}
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

            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Enter your phone number"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="dob" className="block text-gray-800 font-semibold mb-2">
            Date of Birtd
          </label>
          <input
            type="date"
            id="dateOfBirtd"

            onChange={handleChange}
            name="dateOfBirth"

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

            onChange={handleChange}
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

            onChange={handleChange}
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

            onChange={handleChange}
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



 
       <div className="container mx-auto p-8">
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="px-6 py-3 border-b border-gray-300 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">#</th>
              <th className="px-6 py-3 border-b border-gray-300 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 border-b border-gray-300 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 border-b border-gray-300 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">Phone Number</th>
              <th className="px-6 py-3 border-b border-gray-300 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">Date Of Birth</th>
              <th className="px-6 py-3 border-b border-gray-300 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">Gender</th>
              <th className="px-6 py-3 border-b border-gray-300 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">Address</th>
              <th className="px-6 py-3 border-b border-gray-300 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">Program of Interest</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, i) => {
              return (
                <tr key={i}>
                  <td className="px-6 py-3 border-b border-gray-300 text-left text-xs leading-4 font-medium text-gray-600">
                    {i + 1}
                  </td>
                  <td className="px-6 py-3 border-b border-gray-300 text-left text-xs leading-4 font-medium text-gray-600">
                    {item.name}
                  </td>
                  <td className="px-6 py-3 border-b border-gray-300 text-left text-xs leading-4 font-medium text-gray-600">
                    {item.email}
                  </td>
                  <td className="px-6 py-3 border-b border-gray-300 text-left text-xs leading-4 font-medium text-gray-600">
                    {item.phoneNumber}
                  </td>
                  <td className="px-6 py-3 border-b border-gray-300 text-left text-xs leading-4 font-medium text-gray-600">
                    {item.dateOfBirth}
                  </td>
                  <td className="px-6 py-3 border-b border-gray-300 text-left text-xs leading-4 font-medium text-gray-600">
                    {item.gender}
                  </td>
                  <td className="px-6 py-3 border-b border-gray-300 text-left text-xs leading-4 font-medium text-gray-600">
                    {item.address}
                  </td>
                  <td className="px-6 py-3 border-b border-gray-300 text-left text-xs leading-4 font-medium text-gray-600">
                    {item.programIntrested}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>



      {/* <div className="bg-dark p-5 flex justify-center">
        {data.map((item, i) => {
          return <div key={i}>
            name:{item.name}
            phoneNumber:{item.phoneNumber}
            address:{item.address}

          </div>
        })}
      </div> */}

    </>
  )
}
