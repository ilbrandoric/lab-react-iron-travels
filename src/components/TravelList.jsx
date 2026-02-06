import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";
import TravelCard from "./TravelCard";



// Uses ID to display element + description 

function TravelList() {
  const [travelPlans, setTravelPlans] = useState(travelPlansData);

  return (
    <div>
      {travelPlans.map((plan) => (
        <TravelCard key={plan.id} plan={plan} />
      ))}
    </div>
  );
}


export default TravelList;
