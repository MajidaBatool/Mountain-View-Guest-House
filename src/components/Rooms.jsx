// components/Rooms.jsx
import React from 'react';
import familyRoom from '../assets/room-8.jpeg';
import doubleRoom from '../assets/room-12.jpeg';
import room10 from '../assets/room-10.jpeg';
import familyRoom2 from '../assets/details-1.jpeg';
import singleRoom2 from '../assets/single-room.jpeg';
import  bedRoom2 from '../assets/details-4.jpeg'
import bedRoom from '../assets/bedroom.jpg'
import room9 from '../assets/room-9.jpeg'
import Hero from './Hero';
import Banner from './Banner';
import { Link } from 'react-router-dom'


function Rooms() {
  return (
    <>

    <Hero  hero='roomsHero'>
        <Banner title='Our Rooms' next='Luxurious Rooms' >
        <Link to='/' className='btn-primary'>
        return home</Link>
        </Banner>
    </Hero>

     <div className="rooms bg-white-100 py-12 md:py-16">
     
     <div className="container mx-auto px-4 sm:px-6 lg:px-8">
     
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">


         <div className="family-room group">
           <img src={familyRoom} alt="Family Room" className="rounded-lg rounded-lg w-full h-58 object-cover group-hover:scale-105 transition-transform duration-400" />
           <h3 className="text-xl font-bold mt-4 text-gray-900">Family Room</h3>
           <p className="text-gray-600">Spacious room for the whole family.</p>
         </div>


         <div className="single-room group">
           <img src={room9} alt="Single Room" className="rounded-lg w-full h-58 object-cover group-hover:scale-105 transition-transform duration-400 " />
           <h3 className="text-xl font-bold mt-4 text-gray-900">Single Room</h3>
           <p className="text-gray-600">Cozy room for solo travelers.</p>
         </div>


         <div className="double-room group">
           <img src={doubleRoom} alt="Double Room" className="rounded-lg w-full h-58 object-cover group-hover:scale-105 transition-transform duration-400 " />
           <h3 className="text-xl font-bold mt-4 text-gray-900">Double Room</h3>
           <p className="text-gray-600">Comfortable room for couples.</p>
         </div>

         <div className="room-10 group">
            <img src={room10} alt="Room 10" className="rounded-lg w-full h-58 object-cover group-hover:scale-105 transition-transform duration-400" />
           <h3 className="text-xl font-bold mt-4 text-gray-900">comfortable Rooms</h3>
            <p className="text-gray-600">Cozy and comfortable room.</p>
         </div>
         <div className="room-10 group">
            <img src={singleRoom2} alt="Room 10" className="rounded-lg w-full h-58 object-cover group-hover:scale-105 transition-transform duration-400" />
           <h3 className="text-xl font-bold mt-4 text-gray-900">Double Room</h3>
            <p className="text-gray-600">Cozy and comfortable room.</p>
         </div>

         <div className="double-room group">
           <img src={bedRoom} alt="Double Room" className="rounded-lg w-full h-58 object-cover group-hover:scale-105 transition-transform duration-400 " />
           <h3 className="text-xl font-bold mt-4 text-gray-900">Double Room</h3>
           <p className="text-gray-600">Comfortable room for couples.</p>
         </div>


         <div className="double-room group">
           <img src={familyRoom2} alt="Double Room" className="rounded-lg w-full h-58 object-cover group-hover:scale-105 transition-transform duration-400 " />
           <h3 className="text-xl font-bold mt-4 text-gray-900">Double Room</h3>
           <p className="text-gray-600">Comfortable room for couples.</p>
         </div>

         <div className="double-room group">
           <img src= {doubleRoom} alt="Double Room" className="rounded-lg w-full h-58 object-cover group-hover:scale-105 transition-transform duration-400 " />
           <h3 className="text-xl font-bold mt-4 text-gray-900">Double Room</h3>
           <p className="text-gray-600">Comfortable room for couples.</p>
         </div>

         
        
         <div className="double-room group">
           <img src={bedRoom2} alt="Double Room" className="rounded-lg w-full h-58 object-cover group-hover:scale-105 transition-transform duration-400 " />
           <h3 className="text-xl font-bold mt-4 text-gray-900">Double Room</h3>
           <p className="text-gray-600">Comfortable room for couples.</p>
         </div>


       </div>
     </div>
   </div>
    
    </>
   
  );
}

export default Rooms;
 






// // components/Rooms.jsx
// import React from 'react';
// import familyRoom from '../assets/details-1.jpeg';
// import singleRoom from '../assets/single-room.jpeg';
// import doubleRoom from '../assets/double-room.jpg';
// import room10 from '../assets/room-10.jpeg';
// import room12 from '../assets/room-12.jpeg';
// import details4 from '../assets/details-4.jpeg';

 
// function Rooms() {
//   return (
//     <div className="rooms bg-gray-400   py-12 md:py-16">

//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">

//         <h2 className="text-3xl font-bold text-center mb-8 md:mb-12">Our Rooms</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//           <div className="family-room group">
//             <img src={familyRoom} alt="Family Room" className="rounded-lg w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300" />
//             <h3 className="text-xl font-bold mt-4">Family Room</h3>
//             <p className="text-gray-600">Spacious room for the whole family.</p>
//           </div>
//           <div className="single-room group">
//             <img src={singleRoom} alt="Single Room" className="rounded-lg w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300" />
//             <h3 className="text-xl font-bold mt-4">Single Room</h3>
//             <p className="text-gray-600">Cozy room for solo travelers.</p>
//           </div>
//           <div className="double-room group">
//             <img src={doubleRoom} alt="Double Room" className="rounded-lg w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300" />
//             <h3 className="text-xl font-bold mt-4">Double Room</h3>
//             <p className="text-gray-600">Comfortable room for couples.</p>
//           </div>
//           <div className="room-10 group">
//             <img src={room10} alt="Room 10" className="rounded-lg w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300" />
//             <h3 className="text-xl font-bold mt-4">Room 10</h3>
//             <p className="text-gray-600">Cozy and comfortable room.</p>
//           </div>
//           <div className="room-12 group">
//             <img src={room12} alt="Room 12" className="rounded-lg w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300" />
//             <h3 className="text-xl font-bold mt-4">Room 12</h3>
//             <p className="text-gray-600">Spacious and modern room.</p>
//           </div>
//           <div className="details-4 group">
//             <img src={details4} alt="Details 4" className="rounded-lg w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300" />
//             <h3 className="text-xl font-bold mt-4">Details 4</h3>
//             <p className="text-gray-600">Luxurious room with premium amenities.</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Rooms;













