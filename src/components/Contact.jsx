

import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="bg-gray-100  py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Contact Us</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mr-4">
                  <FaMapMarkerAlt className="text-gray-500" size={30} />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1 text-gray-800">Our Address</h3>
                  <p className="text-gray-800">Baltistan, Skardu, Sundus</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mr-4">
                  <FaEnvelope className="text-gray-500" size={30} />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1 text-gray-800">Email Us</h3>
                  <p className="text-gray-800">info@MountViewHotel@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mr-4">
                  <FaPhone className="text-gray-500" size={30} />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1 text-gray-800">Call Us</h3>
                  <p className="text-gray-800">+92 3554467392</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Get in Touch</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="border border-gray-300 rounded-md px-4 py-2"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="border border-gray-300 rounded-md px-4 py-2"
                />
              </div>
              <textarea
                placeholder="Your Message"
                className="border border-gray-300 rounded-md px-4 py-2 w-full"
                rows={5}
              ></textarea>
              <button
                type="submit"
                className="bg-gray-800 text-white rounded-md px-6 py-2 hover:bg-gray-900"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
        <div className="mt-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Location</h2>
          <div className="rounded-md overflow-hidden">
            <iframe
              title="hotel-location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434508812!2d-122.41941518468183!3d37.77492977975882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085815c5b935fbd%3A0x76c3f4b3e0eae3a4!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1641310203728!5m2!1sen!2s"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;


