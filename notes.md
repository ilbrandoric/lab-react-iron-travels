# Project Notes

## Setup

```
npm install
npm run dev

```


npm install
Reads package.json
Downloads all required libraries (React, Vite, etc.)
Stores them in a folder called node_modules

npm run dev  **Run this every session**
What it does
Starts the development server
Compiles your React code
Watches for file changes (hot reload)
Serves the app in the browser:

  VITE v4.4.9  ready in 676 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h to show help

## Using State

import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";

1️⃣ useState(travelPlansData)

This says:

“Create a piece of React state, and start it with the value from travelPlansData.”

At the beginning:

travelPlansData = array from JSON
State starts as that same array

Think:

State = [
  { id: 1, destination: "Paris", ... },
  { id: 2, destination: "Rome", ... },
  ...
]

2️⃣ Destructuring: [travelPlans, setTravelPlans]

useState() returns an array with 2 things:

[
  currentValue,
  functionToUpdateValue
]


We unpack it like this:

travelPlans     // current state value from the JSON import
setTravelPlans  // function to update that state -future state

You never modify travelPlans directly.

3️⃣ Why two variables?

Example:
travelPlans.map(...)


➡️ Reading state

Later:
setTravelPlans(newArray);


➡️ Updating state = React re-renders



---



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

//  This means: “For each trip, show a TravelCard component, give it a unique ID so React can track it, and hand the whole trip’s data to that card so it can display it.”


## Styling

index.css — Global CSS (entire app)
What it is

Loaded once when the app starts
Affects everything
Applies to all components automatically

App.css — App-level / layout styling
What it is

Styling specific to the App component
Imported explicitly in App.jsx
import "./App.css";

Typical use
Header layout
Logo size
App-wide sections
Things that appear once


** We'll stule the element in Index.css