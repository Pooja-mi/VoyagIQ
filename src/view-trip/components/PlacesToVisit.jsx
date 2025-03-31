// import { Button } from "@/components/ui/button";
// import React, { useEffect, useState } from "react";
// import { FaMapLocation } from "react-icons/fa6";
// import { Link } from "react-router-dom";
// import { GetPlaceDetails } from "@/service/GlobalApi";
// import { PHOTO_REF_URL } from "@/service/GlobalApi";

// function PlacesToVisit({ trip }) {
//   const [photoUrl, setPhotoUrl] = useState();

//   useEffect(() => {
//     trip && GetPlacePhoto();
//   }, [trip]);

//   const GetPlacePhoto = async () => {
//     const data = {
//       textQuery: place.placeName,
//     };
//     const result = await GetPlaceDetails(data).then((resp) => {
//       console.log(resp.data.places[0].photos[3].name);

//       const PhotoUrl = PHOTO_REF_URL.replace(
//         "{NAME}",
//         resp.data.places[0].photos[3].name
//       );
//       setPhotoUrl(PhotoUrl);
//     });
//   };
//   return (
//     <div>
//       <h2 className="font-bold text-lg">Places to Visit</h2>
//       <div className="mt-5">
//         {trip?.tripData?.itinerary &&
//           Object.keys(trip.tripData.itinerary).map((dayKey, index) => (
//             <div key={index}>
//               <h3 className="font-semibold text-md">
//                 {trip.tripData.itinerary[dayKey].theme} - {dayKey}
//               </h3>

//               <div className="grid md:grid-cols-2 gap-5">
//                 {trip.tripData.itinerary[dayKey].activities &&
//                   trip.tripData.itinerary[dayKey].activities.map(
//                     (place, idx) => (
//                       <div key={idx} className="p-2 border-b ">
//                         <div className="border rounded-xl p-3 mt-2 flex gap-5 hover:scale-105 transition-all hover:shadow-md cursor-pointer">
//                           <img
//                             src={photoUrl ? photoUrl : "/placeholder.png"}
//                             alt={place.placeName}
//                             className="w-[130px] h-[130px] rounded-xl"
//                           />
//                           <div>
//                             <h4 className="font-bold text-lg">
//                               {place.placeName}
//                             </h4>
//                             <p>{place.placeDetails}</p>
//                             <p className="text-sm text-gray-600">
//                               Rating: {place.rating} ⭐
//                             </p>
//                             <p className="text-sm text-gray-600">
//                               Ticket Price: {place.ticketPricing}
//                             </p>
//                             <Link
//                               to={
//                                 "https://www.google.com/maps/search/?api=1&query=" +
//                                 place.placeName
//                               }
//                               target="_blank"
//                             >
//                               <Button size="sm">
//                                 <FaMapLocation />
//                               </Button>
//                             </Link>
//                           </div>
//                         </div>
//                       </div>
//                     )
//                   )}
//               </div>
//             </div>
//           ))}
//       </div>
//     </div>
//   );
// }

// export default PlacesToVisit;

import React from 'react'
import PlaceCardItem from './PlaceCardItem'

function PlacesToVisit({trip}) {
  return (
    <div>
      <h2 className='font-bold text-xl mt-5'>Places to Visit</h2>

      <div>
        {trip?.tripData?.itinerary.map((item,index)=>(
            <div className='mt-5'>
                <h2 className='font-medium text-lg'>{item.day}</h2>
                <div className='grid md:grid-cols-2 gap-5'>
                {item?.activities.map((place,index)=>(
                    <div className=''>
                        <h2 className='font-medium text-sm text-orange-600'>{place.exactTime}</h2>
                        <PlaceCardItem place={place}/>
                    </div>
                ))}
                 </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default PlacesToVisit
