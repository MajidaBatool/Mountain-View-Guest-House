
//           {/* <div
//   className="bg-cover bg-center bg-no-repeat"
//   style={{ backgroundImage: `url(${firstImage})` }}  ></div> */}

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Rooms from './components/Rooms';
import Booking from './components/Booking';
import Services from './components/Services';
import Contact from './components/Contact';

function App() {     

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;



// import React from 'react';

// const MountainViewGuestHouse = () => {
//   return (
//     <div className="bg-gradient-to-r from-orange-400 to-white min-h-screen">
//       <header className="bg-white shadow-md">
//         <nav className="container mx-auto py-4 flex justify-between items-center">
//           <div className="text-2xl font-bold">Mountain View Guest House</div>
//           <ul className="flex space-x-6">
//             <li><a href="#home" className="hover:text-orange-500">Home</a></li>
//             <li><a href="#rooms" className="hover:text-orange-500">Rooms</a></li>
//             <li><a href="#services" className="hover:text-orange-500">Services</a></li>
//             <li><a href="#booking" className="hover:text-orange-500">Booking</a></li>
//             <li><a href="#contact" className="hover:text-orange-500">Contact</a></li>
//           </ul>
//         </nav>
//       </header>

//       <main>
//         <section id="home" className="container mx-auto py-20">
//           {/* Home section content goes here */}
//         </section>

//         <section id="rooms" className="container mx-auto py-20">
//           <h2 className="text-3xl font-bold mb-8">Our Rooms</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             <div className="bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
//               <img src="room1.jpg" alt="Room 1" className="h-64 w-full object-cover" />
//               <div className="p-4">
//                 <h3 className="text-xl font-bold mb-2">Room 1</h3>
//                 <p>Description of Room 1</p>
//               </div>
//             </div>
//             <div className="bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
//               <img src="room2.jpg" alt="Room 2" className="h-64 w-full object-cover" />
//               <div className="p-4">
//                 <h3 className="text-xl font-bold mb-2">Room 2</h3>
//                 <p>Description of Room 2</p>
//               </div>
//             </div>
//             <div className="bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
//               <img src="room3.jpg" alt="Room 3" className="h-64 w-full object-cover" />
//               <div className="p-4">
//                 <h3 className="text-xl font-bold mb-2">Room 3</h3>
//                 <p>Description of Room 3</p>
//               </div>
//             </div>
//             <div className="bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
//               <img src="room4.jpg" alt="Room 4" className="h-64 w-full object-cover" />
//               <div className="p-4">
//                 <h3 className="text-xl font-bold mb-2">Room 4</h3>
//                 <p>Description of Room 4</p>
//               </div>
//             </div>
//             <div className="bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
//               <img src="room5.jpg" alt="Room 5" className="h-64 w-full object-cover" />
//               <div className="p-4">
//                 <h3 className="text-xl font-bold mb-2">Room 5</h3>
//                 <p>Description of Room 5</p>
//               </div>
//             </div>
//             <div className="bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
//               <img src="room6.jpg" alt="Room 6" className="h-64 w-full object-cover" />
//               <div className="p-4">
//                 <h3 className="text-xl font-bold mb-2">Room 6</h3>
//                 <p>Description of Room 6</p>
//               </div>
//             </div>
//           </div>
//         </section>

//         <section id="services" className="container mx-auto py-20">
//           <h2 className="text-3xl font-bold mb-8">Our Services</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             <div className="bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
//               <img src="service1.jpg" alt="Service 1" className="h-64 w-full object-cover" />
//               <div className="p-4">
//                 <h3 className="text-xl font-bold mb-2">Service 1</h3>
//                 <p>Description of Service 1</p>
//               </div>
//             </div>
//             <div className="bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
//               <img src="service2.jpg" alt="Service 2" className="h-64 w-full object-cover" />
//               <div className="p-4">
//                 <h3 className="text-xl font-bold mb-2">Service 2</h3>
//                 <p>Description of Service 2</p>
//               </div>
//             </div>
//             <div className="bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
//               <img src="service3.jpg" alt="Service 3" className="h-64 w-full object-cover" />
//               <div className="p-4">
//                 <h3 className="text-xl font-bold mb-2">Service 3</h3>
//                 <p>Description of Service 3</p>
//               </div>
//             </div>
//           </div>
//         </section>

//         <section id="booking" className="container mx-auto py-20">
//           <h2 className="text-3xl font-bold mb-8">Book Your Stay</h2>
         
//         </section>

//         <section id="contact" className="container mx-auto py-20">
//           <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
//           <div className="bg-white shadow-md rounded-lg p-8">
//             <form>
//               <div className="mb-4">
//                 <label htmlFor="name" className="block font-bold mb-2">Name</label>
//                 <input type="text" id="name" name="name" className="border-gray-300 border rounded-md p-2 w-full" />
//               </div>
//               <div className="mb-4">
//                 <label htmlFor="email" className="block font-bold mb-2">Email</label>
//                 <input type="email" id="email" name="email" className="border-gray-300 border rounded-md p-2 w-full" />
//               </div>
//               <div className="mb-4">
//                 <label htmlFor="message" className="block font-bold mb-2">Message</label>
//                 <textarea id="message" name="message" rows="5" className="border-gray-300 border rounded-md p-2 w-full"></textarea>
//               </div>
//               <button type="submit" className="bg-orange-500 text-white font-bold py-2 px-4 rounded-md hover:bg-orange-600">Submit</button>
//             </form>
//           </div>
//         </section>
      
//         {/* export default MountainViewGuestHouse; */}

          