// // components/Booking.jsx
// import React from 'react';

// function Booking() {;
//   return (



//     <div className="booking bg-gray-100  home-bg py-12 md:py-16 lg:py-20">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="text-3xl font-bold text-center mb-8 md:mb-12">Book Your Stay</h2>
//         <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 md:mb-8 lg:mb-12">
//           <div className="mb-4">
//             <label className="block text-gray-700 font-bold mb-2" htmlFor="check-in-date">
//               Check-in Date:
//             </label>
//             <input
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               id="check-in-date"
//               type="date"
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700 font-bold mb-2" htmlFor="check-out-date">
//               Check-out Date:
//             </label>
//             <input
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               id="check-out-date"
//               type="date"
//             />
//           </div>
//           <div className="mb-6">
//             <label className="block text-gray-700 font-bold mb-2" htmlFor="num-guests">
//               Number of Guests:
//             </label>
//             <input
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               id="num-guests"
//               type="number"
//             />
//           </div>
//           <div className="flex items-center justify-between">
//             <button
//               className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//               type="button"
//             >
//               Book Now
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
 
//   );
// }

// export default Booking;


import React from 'react';

function Booking() {
  return (
    <div className="booking bg-gray-100  py-12 md:py-16 lg:py-20">

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8 md:mb-12">Book Your Stay</h2>
        <form className="bg-gray-200 bg-opacity-75 shadow-md rounded px-8 pt-6 pb-8 mb-4 md:mb-8 lg:mb-12 border border-gray-300 border-opacity-50">
          <div className="mb-4">
            <label className="block text-gray-900 font-bold mb-2" htmlFor="check-in-date">
              Check-in Date:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
              id="check-in-date"
              type="date"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-900 font-bold mb-2" htmlFor="check-out-date">
              Check-out Date:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
              id="check-out-date"
              type="date"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-900 font-bold mb-2" htmlFor="num-guests">
              Number of Guests:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
              id="num-guests"
              type="number"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Book Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Booking;





