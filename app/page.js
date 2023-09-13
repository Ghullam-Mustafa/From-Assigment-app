import Image from 'next/image'

export default function Home() {
  return (
    <>
  
    <form className="w-1/2 mx-auto mt-8 p-4 bg-gray-100 shadow-md rounded-lg">
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-800 font-semibold mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          placeholder="Enter your name"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="fatherName" className="block text-gray-800 font-semibold mb-2">
          Father's Name
        </label>
        <input
          type="text"
          id="fatherName"
          name="fatherName"
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          placeholder="Enter your father's name"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-800 font-semibold mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          placeholder="Enter your email"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="gender" className="block text-gray-800 font-semibold mb-2">
          Gender
        </label>
        <select
          id="gender"
          name="gender"
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="phoneNumber" className="block text-gray-800 font-semibold mb-2">
          Phone Number
        </label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          placeholder="Enter your phone number"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="age" className="block text-gray-800 font-semibold mb-2">
          Age
        </label>
        <input
          type="number"
          id="age"
          name="age"
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          placeholder="Enter your age"
        />
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




    </>
  )
}
