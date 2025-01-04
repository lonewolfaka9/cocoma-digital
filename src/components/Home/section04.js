// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const Section04 = ({ ServicePlatform }) => {
//   const [showMore, setShowMore] = useState(false);

//   // Determine how many items to show based on `showMore`
//   const visibleItems = showMore ? ServicePlatform : ServicePlatform.slice(0, 6);

//   return (
//     <div className="container text-center my-5">
//       <h2>OUR SERVICES BY PLATFORM</h2>
//       <div className="row">
//         {visibleItems.map((service, index) => (
//           <div key={index} className="col-md-4 col-sm-6 mb-4">
//             <div className="card h-100 shadow-sm">
//               <img
//                 src={service.platform_image}
//                 className="card-img-top"
//                 alt={service.title}
//               />
//               <div className="card-body">
//                 <h5 className="card-title">{service.platform_title}</h5>
//                 <Link to="#" className="btn btn-dark">
//                   {service.platform_button_text}
//                 </Link>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//       {/* Show the button only if there are more than 6 items */}
//       {ServicePlatform.length > 6 && (
//         <button
//           className="btn btn-outline-dark mt-3"
//           onClick={() => setShowMore(!showMore)}
//         >
//           {showMore ? "Show Less" : "Show More"} &#8595;
//         </button>
//       )}
//     </div>
//   );
// };

// export default Section04;
