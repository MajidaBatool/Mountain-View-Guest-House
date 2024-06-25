// components/Home.jsx
import React from 'react';
import Rooms from './Rooms';
import Services from './Services';
import Booking from './Booking';
import Contact from './Contact';
import Banner from './Banner';
import { Link } from 'react-router-dom'
function Home() {
  return (       <>
    <div className="home bg-gray-100 home-bg py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">

      {/* <h1 className="text-4xl -mt-12 mountain font-bold text-gray-900 mb-4 md:text-5xl lg:text-4xl animate__animated animate__fadeInDown absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 px-4 bg-white/40 py-2 rounded-md">
              Welcome to Mountain View Guest House
            </h1>
            <br />
            <br />
            
            <p className="mt-8 text-xl text-gray-800 mb-8 md:text-2xl lg:text-3xl absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 px-4 bg-white/60 py-2 rounded-md mt-4">
              Enjoy your stay in our beautiful guest house.
             </p> */}
          
          <Banner title='Welcome' next='to Mountain View Guest House' subtitle='Enjoy breathtaking views and cozy accommodations.'>
          <Link to='/rooms' className='btn-primary'>
          our rooms</Link>
          </Banner>
      
      </div>
    </div>
    <hr style={{font:'bold', color:'white', height:15}} />
    <Services/>
    <hr style={{font:'bold', color:'white', height:15}} />
    <Rooms/> 
    <hr style={{font:'bold', color:'white', height:15}} />    
  
    <Booking/>
    <hr style={{font:'bold', color:'white', height:15}} />
    <Contact/>

        </>
  );
}

export default Home;

// npm install react-slick slick-carousel


























// import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// import pic1 from './../assets/first-1.jpg';
// import pic2 from './../assets/mountains-1.jpg'
// import pic3 from './../assets/mountain-4.jpg'
// import pic4 from './../assets/mountains-1.jpg'
// import pic5 from './../assets/mountain-5.jpg'
// import pic6 from './../assets/defaultBcg.jpeg'
// import pic7 from './../assets/mountain-3800239_1920 (1).jpg'


// function Home() {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//   };

//   return (    
//           <div className='homeBackground'>
//     <div className="home bg-gray-100  py-16 md:py-20 lg:py-24">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
//         <h1 className="text-4xl font-bold text-gray-800 mb-4 md:text-5xl lg:text-6xl">
//           Welcome to Mountain View Guest House
//         </h1>
//         <p className="text-xl text-gray-600 mb-8 md:text-2xl lg:text-3xl">
//           Enjoy your stay in our beautiful guest house.
//         </p>
//         <div className="mt-8 relative h-64 sm:h-80 md:h-96 lg:h-128">


//           <Slider {...settings}>
//             <div className="bg-cover bg-center bg-no-repeat">
//                         <img src={pic1} alt='home'/>
//             </div>

//             <div className="bg-cover bg-center bg-no-repeat" >
//                     <img src={pic2} alt='home'/>
//             </div>

//             <div className="bg-cover bg-center bg-no-repeat">
//                      <img src={pic3} alt='home'/>
//             </div>

//             <div className="bg-cover bg-center bg-no-repeat">
//                     <img src={pic4} alt='home'/>
//             </div>
//             <div className="bg-cover bg-center bg-no-repeat" >
//                         <img src={pic5} alt='home'/>
//             </div>

//             <div className="bg-cover bg-center bg-no-repeat">
//                    <img src={pic6} alt='home'/>
//             </div>

//             <div className="bg-cover bg-center bg-no-repeat">
//                      <img src={pic7} alt='home'/>
//             </div>
//           </Slider>
//         </div>
//       </div>
//     </div>
//     </div>
//   );
// }

// export default Home;











// import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// import pic1 from './../assets/first-1.jpg';
// import pic2 from './../assets/mountains-1.jpg';
// import pic3 from './../assets/mountain-4.jpg';
// import pic4 from './../assets/mountains-1.jpg';
// import pic5 from './../assets/mountain-5.jpg';
// import pic6 from './../assets/defaultBcg.jpeg';
// import pic7 from './../assets/mountain-3800239_1920 (1).jpg';


// function Home() {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           infinite: true,
//           dots: true,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <>
//       <div className="homeBackground flex flex-col justify-center items-center w-full h-screen">
//         <div className="home bg-gray-100 py-16 md:py-20 lg:py-24 w-full">
//           <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
//             <h1 className="text-4xl font-bold text-gray-800 mb-4 md:text-5xl lg:text-6xl animate__animated animate__fadeInDown absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 px-4 bg-white/70 py-2 rounded-md">
//               Welcome to Mountain View Guest House
//             </h1>
//             <p className="text-xl text-gray-600 mb-8 md:text-2xl lg:text-3xl absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 px-4 bg-white/70 py-2 rounded-md">
//               Enjoy your stay in our beautiful guest house.
//             </p>
//             <div className="mt-8 relative h-full">
//               <Slider {...settings}>
//                 <div className="bg-cover bg-center bg-no-repeat h-full">
//                   <img
//                     src={pic1}
//                     alt="home"
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//                 <div className="bg-cover bg-center bg-no-repeat h-full">
//                   <img
//                     src={pic2}
//                     alt="home"
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//                 <div className="bg-cover bg-center bg-no-repeat h-full">
//                   <img
//                     src={pic3}
//                     alt="home"
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//                 <div className="bg-cover bg-center bg-no-repeat h-full">
//                   <img
//                     src={pic4}
//                     alt="home"
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//                 <div className="bg-cover bg-center bg-no-repeat h-full">
//                   <img
//                     src={pic5}
//                     alt="home"
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//                 <div className="bg-cover bg-center bg-no-repeat h-full">
//                   <img
//                     src={pic6}
//                     alt="home"
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//                 <div className="bg-cover bg-center bg-no-repeat h-full">
//                   <img
//                     src={pic7}
//                     alt="home"
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//               </Slider>
//             </div>
//           </div>
//         </div>
//       </div>
   
//     </>
//   );
// }

// export default Home;

  {/* <h1 className="text-4xl font-bold text-gray-800 mb-4 md:text-5xl lg:text-6xl">
          Welcome to Mountain View Guest House
        </h1>
        <p className="text-xl text-gray-600 mb-8 md:text-2xl lg:text-3xl">
          Enjoy your stay in our beautiful guest house.
        </p> */}









