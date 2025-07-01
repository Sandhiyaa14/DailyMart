import React from 'react'
import { Clock, Mail, MapPin, Phone } from 'lucide-react'
const Contact = () => {
  return (
    <div className='bg-gray-50 pt-5 pb-15 mx-auto px-5 lg:px-48 flex gap-10 flex-col md:flex-row md:justify-center  mt-30'>
      <div className='lg:w-1/2 w-full max-w-112 mx-auto rounded-lg shadow-lg p-5 md:h-130 bg-white'>
        <h1 className='text-2xl font-semibold mb-1 text-green-600 text-center'>Contact DailyMart</h1>
        <p className='text-center text-gray-600 mb-5'>We would love to hear from you!</p>
        <form action="">
           <div className='mb-5'>
          <label className='block' htmlFor="">Name</label>
          <input type="text" required className='focus:outline-green-400 border-gray-300 mt-1 border w-full p-2 rounded' placeholder='Your Name'/>
        </div>
        <div className='mb-5'>
           <label className='block' htmlFor="">Email</label>
          <input type="text" required className='border-gray-300 focus:outline-green-400 mt-1 border w-full p-2 rounded' placeholder='Your Email'/>
        </div>
        <div className='mb-5'>
      <label className='block' htmlFor="">Message</label>
          <textarea type="text" required className='border-gray-300 focus:outline-green-400 h-20 mt-1 border w-full p-2 rounded' placeholder='Your Message'/>
        </div>
      <button className='bg-green-500 text-white w-full py-2 mt-1 cursor-pointer'>Send Message</button>
        </form>
           </div>


            <div className="bg-white shadow-lg rounded-lg p-6 w-full lg:w-1/2 max-w-md mb-6 mx-auto md:h-130">
          <h2 className="text-2xl font-semibold mb-6 text-green-600 text-center">Contact Information</h2>

          <div className="space-y-6">
            <div className="flex items-start">
              <Phone className="h-5 w-5 text-green-600 mt-1 mr-3" />
              <div>
                <h3 className="font-medium">Phone</h3>
                <p className="text-gray-600">(555) 123-4567</p>
                <p className="text-gray-600">(555) 765-4321 (Customer Service)</p>
              </div>
            </div>

            <div className="flex items-start">
              <Mail className="h-5 w-5 text-green-600 mt-1 mr-3" />
              <div>
                <h3 className="font-medium">Email</h3>
                <p className="text-gray-600">info@dailymart.com</p>
                <p className="text-gray-600">orders@dailymart.com</p>
              </div>
            </div>

            <div className="flex items-start">
              <MapPin className="h-5 w-5 text-green-600 mt-1 mr-3" />
              <div>
                <h3 className="font-medium">Address</h3>
                <p className="text-gray-600">123 Fresh Avenue</p>
                <p className="text-gray-600">Produce City, PC 12345</p>
              </div>
            </div>

            <div className="flex items-start">
              <Clock className="h-5 w-5 text-green-600 mt-1 mr-3" />
              <div>
                <h3 className="font-medium">Store Hours</h3>
                <div className="grid grid-cols-2 gap-x-4 text-gray-600">
                  <p>Monday - Friday:</p>
                  <p>7:00 AM - 9:00 PM</p>
                  <p>Saturday:</p>
                  <p>8:00 AM - 8:00 PM</p>
                  <p>Sunday:</p>
                  <p>9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>       
        </div>
    </div>
  )
}

export default Contact
