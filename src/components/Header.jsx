
// // components/Header.jsx
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { FaBars, FaTimes } from 'react-icons/fa';

// import { motion } from 'framer-motion';


// function Header() {
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
//     <header className="bg-white shadow-md  top-0 z-50   bg-gray-100 bg-opacity-75">
//       <div className="container mx-auto px-4 py-4 flex justify-between items-center">
//         <div className="logo">
//           <Link to="/" className="mb-4 flex justify-between items-center font-bold text-gray-900">
          
            
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
//               <Link to="/" className=" hover:text-primary link font-bold text-gray-900">
             
//                 Home
//               </Link>
//             </motion.li>
//             <motion.li
//               variants={menuItemVariants}
//               whileHover="hover"
//             >
//               <Link to="/rooms" className="hover:text-primary link font-bold text-gray-900">
           
//                 Rooms
//               </Link>
//             </motion.li>
//             <motion.li
//               variants={menuItemVariants}
//               whileHover="hover"
//             >
//               <Link to="/booking" className=" hover:text-primary link font-bold text-gray-900">
           
//                 Booking
//               </Link>
//             </motion.li>
//             <motion.li
//               variants={menuItemVariants}
//               whileHover="hover"
//             >
//               <Link to="/services" className=" hover:text-primary link font-bold text-gray-900">
             
//                 Services
//               </Link>
//             </motion.li>
//             <motion.li
//               variants={menuItemVariants}
//               whileHover="hover"
//             >
             
//               <Link to="/contact" className="hover:text-primary link font-bold text-gray-900">
            
//                 Contact
//               </Link>
              
//             </motion.li>
//           </ul>
//         </motion.nav>
//         <button
//           className="md:hidden text-gray-900 focus:outline-none"
//           onClick={toggleMenu}
//         >
//           {isOpen ? <FaTimes /> : <FaBars />}
//         </button>
//       </div>
//     </header>
//   );
// }

// export default Header;









import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes,FaHome } from 'react-icons/fa';
import { motion } from 'framer-motion';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItemVariants = {
    initial: {
      y: -20,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 24,
      },
    },
    hover: {
      scale: 1.1,
      textShadow: '0 0 10px rgb(172, 162, 162)',
      transition: {
        type: 'tween',
        duration: 0.3,
      },
    },
  };

  return (
    <header className="bg-white sticky shadow-md top-0 z-50 bg-gray-100 border bg-opacity-75">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="logo">
          {/* Hide the "Mountain View Guest House" logo when the menu is open */}
          {!isOpen && (
            <Link to="/" className="mb-4 flex justify-between items-center link font-bold text-gray-900">
              Mountain View Guest House
            </Link>
          )}
        </div>

        <motion.nav
          className={`${isOpen ? 'block' : 'hidden'} md:block`}
          initial="initial"
          animate="animate"
        >
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 lg:space-x-6">
          {/* <FaHome /> */}
            <motion.li
              variants={menuItemVariants}
              whileHover="hover"
            >
              
              <Link to="/" className="hover:text-primary link font-bold text-gray-900">
                Home
              </Link>
            </motion.li>
            <motion.li
              variants={menuItemVariants}
              whileHover="hover"
            >
              <Link to="/rooms" className="hover:text-primary link font-bold text-gray-900">
                Rooms
              </Link>
            </motion.li>
            <motion.li
              variants={menuItemVariants}
              whileHover="hover"
            >
              <Link to="/booking" className="hover:text-primary link font-bold text-gray-900">
                Booking
              </Link>
            </motion.li>
            <motion.li
              variants={menuItemVariants}
              whileHover="hover"
            >
              <Link to="/services" className="hover:text-primary link font-bold text-gray-900">
                Services
              </Link>
            </motion.li>
            <motion.li
              variants={menuItemVariants}
              whileHover="hover"
            >
              <Link to="/contact" className="hover:text-primary link font-bold text-gray-900">
                Contact
              </Link>
            </motion.li>
          </ul>
        </motion.nav>

        {/* Move the "FaTimes" icon to the position where the "FaBars" icon was previously */}
        <button
          className="md:hidden text-gray-900 focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </header>
  );
}

export default Header;












// function Header() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <header className="bg-white shadow-md  top-0 z-50   bg-gray-100 bg-opacity-75">
//       <div className="container mx-auto px-4 py-4 flex justify-between items-center">
//         <div className="logo">
//           {/* Hide the "Mountain View Guest House" logo when the menu is open */}
//           {!isOpen && (
//             <Link to="/" className="mb-4 flex justify-between items-center font-bold text-gray-900">
//               Mountain View Guest House 
//             </Link>
//           )}
//         </div>

//         <motion.nav
//           className={`${isOpen ? 'block' : 'hidden'} md:block`}
//           initial="initial"
//           animate="animate"
//         >
//           {/* Your menu items */}
//         </motion.nav>

//         {/* Move the "FaTimes" icon to the position where the "FaBars" icon was previously */}
//         <button
//           className="md:hidden text-gray-900 focus:outline-none"
//           onClick={toggleMenu}
//         >
//           {isOpen ? <FaTimesCircle /> : <FaBars />}
//         </button>
//       </div>
//     </header>
//   );
// }

