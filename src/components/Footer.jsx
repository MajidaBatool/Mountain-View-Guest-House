
   
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { FaBars, FaTimes } from 'react-icons/fa';

// import { motion } from 'framer-motion';


// function Footer() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const menuItemVariants = {
//     initial: {
//       y: -20,
//       opacity: 0,
//     },
//     animate: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         type: 'spring',
//         stiffness: 300,
//         damping: 24,
//       },
//     },
//     hover: {
//       scale: 1.1,
//       // textShadow: '0 0 10px rgba(255, 255, 255, 0.5)',
//       textShadow: '0 0 10px rgb(172, 162, 162)',
//       transition: {
//         type: 'tween',
//         duration: 0.3,
//       },
//     },
//   };

//   return (
//     <header className="bg-white shadow-md sticky top-0 z-50   bg-gray-100 bg-opacity-75">
//       <div className="container mx-auto px-4 py-4 flex justify-between items-center">
//         <div className="logo">
//           <Link to="/" className="mb-4 flex justify-between items-center">
//             <motion.div
//               initial={{ scale: 0 }}
//               animate={{ scale: 1 }}
//               transition={{
//                 type: 'spring',
//                 stiffness: 260,
//                 damping: 20,
//               }}
//               className="mr-2 text-2xl"
//             >
          
             
//               {/* <FaMountain /> */}
//             </motion.div>
//             <motion.div
//               initial={{ scale: 0 }}
//               animate={{ scale: 1 }}
//               transition={{
//                 type: 'spring',
//                 stiffness: 260,
//                 damping: 20,
//               }}
//               className="mr-2 text-2xl"
//             >

       
//               {/* <FaHome /> */}
//             </motion.div>
            
//             Mountain View Guest House
//           </Link>
//         </div>
      
     
//         <motion.nav
//           className={`${isOpen ? 'block' : 'hidden'} md:block`}
//           initial="initial"
//           animate="animate"
//         >    
//           <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 lg:space-x-6">
//             <motion.li
//               variants={menuItemVariants}
//               whileHover="hover"
//             >
//               <Link to="/" className=" hover:text-primary link text-gray-900">
//                {/* <FaHome /> */}
//                 Home
//               </Link>
//             </motion.li>
//             <motion.li
//               variants={menuItemVariants}
//               whileHover="hover"
//             >
//               <Link to="/rooms" className="hover:text-primary link text-gray-900">
//               {/* <FaHotel /> */}
//                 Rooms
//               </Link>
//             </motion.li>
//             <motion.li
//               variants={menuItemVariants}
//               whileHover="hover"
//             >
//               <Link to="/booking" className=" hover:text-primary link text-gray-900">
//               {/* <FaCalendarCheck /> */}
//                 Booking
//               </Link>
//             </motion.li>
//             <motion.li
//               variants={menuItemVariants}
//               whileHover="hover"
//             >
//               <Link to="/services" className=" hover:text-primary link text-gray-900">
//               {/* <FaServicestack /> */}
//                 Services
//               </Link>
//             </motion.li>
//             <motion.li
//               variants={menuItemVariants}
//               whileHover="hover"
//             >
             
//               <Link to="/contact" className="hover:text-primary link text-gray-900">
//               {/* <FaEnvelope /> */}
//                 Contact
//               </Link>
              
//             </motion.li>
//           </ul>
//         </motion.nav>
//         <button
//           className="md:hidden text-white focus:outline-none"
//           onClick={toggleMenu}
//         >
//           {isOpen ? <FaTimes /> : <FaBars />}
//         </button>
//       </div>
//     </header>
//   );
// }

// export default Footer;

import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-2xl font-bold mb-4">About Us</h3>
          <p className="text-gray-400 mb-6">
            Mountain View Guest House is a cozy and comfortable accommodation located in the heart of Baltistan, Skardu. We offer a peaceful retreat with stunning mountain views.
          </p>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com" className="text-white hover:text-gray-400">
              <FaFacebook size={24} />
            </a>
            <a href="https://www.twitter.com" className="text-white hover:text-gray-400">
              <FaTwitter size={24} />
            </a>
            <a href="https://www.instagram.com" className="text-white hover:text-gray-400">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="mr-4">
                <FaMapMarkerAlt className="text-gray-400" size={24} />
              </div>
              <div>
                <h4 className="text-lg font-medium mb-1">Our Address</h4>
                <p className="text-gray-400">Baltistan, Skardu, Sundus</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="mr-4">
                <FaEnvelope className="text-gray-400" size={24} />
              </div>
              <div>
                <h4 className="text-lg font-medium mb-1">Email Us</h4>
                <p className="text-gray-400">info@MountViewHotel@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="mr-4">
                <FaPhoneAlt className="text-gray-400" size={24} />
              </div>
              <div>
                <h4 className="text-lg font-medium mb-1">Call Us</h4>
                <p className="text-gray-400">+92 3554467392</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="text-white hover:text-gray-400">Home</a>
            </li>
            <li>
              <a href="/rooms" className="text-white hover:text-gray-400">Rooms</a>
            </li>
            <li>
              <a href="/booking" className="text-white hover:text-gray-400">Booking</a>
            </li>
            <li>
              <a href="/services" className="text-white hover:text-gray-400">Services</a>
            </li>
            <li>
              <a href="/contact" className="text-white hover:text-gray-400">Contact</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-8 text-center">
        <p className="text-gray-400">&copy; 2023 Mountain View Guest House. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;


