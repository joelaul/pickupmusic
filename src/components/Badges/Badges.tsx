/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

'use client';

import { useState } from 'react';
import { classNames } from '@/lib/css/classNames';
import { BADGES } from './constants';
import { Badge } from './types';

{/* 
TODO
Handle unacquired badges appropriately (null error, goto course)
Lock sizing/overflow
Position red velvet background
Add sort filters (newest, oldest, value)
Modularize
Responsive Design
*/}

export default function Badges() {

  const [displayedBadge, setDisplayedBadge] = useState(BADGES[0]);

  const forInfoPanel = (badge: Badge) => {
    const {description, category, value, timeAcquired} = badge;
    return {description, category, value, timeAcquired};
  };

  return (
    <div className="bg-indigo-200">
      <br></br>

      {/* Leading text */}
      <div>
        <h1 className="text-center text-3xl font-bold tracking-tight text-black-50 sm:text-4xl">
          ✨ Your Badges
        </h1>
        <p className="mt-6 text-center text-lg leading-8 text-gray-900">
            Gaze upon your collection, or explore badges to <span className="font-bold">#pickup</span> next!
        </p>
        
      </div>
      <br></br> 

      {/* Content area */}
      <div className="flex justify-center relative left-12">

        {/* Badge grid */}
        <div className="focus:scale-105 max-w-lg grid grid-cols-4 gap-7 content-center">

          {BADGES.map((badge) => (
            <div 
              key="name"
              onMouseOver={() => setDisplayedBadge(badge)}
              className={
                classNames(badge.acquired ? "" : "blur", "rounded-full shadow-xl hover:scale-105 hover:cursor-pointer focus:scale-95"
              )}>
              <a>
                <img
                  src={badge.src}
                  title={badge.acquired ? badge.name : '???'}
                  alt={badge.name}
                  className="rounded-full border-black border-4 bg-yellow-400"
                  ></img>
              </a>
            </div>
          ))}
    
        </div>

        {/* Info panel */}
        <div className="mx-16 px-4 py-4 w-104 flex flex-col items-center bg-indigo-100 border-black border-2 rounded-xl shadow-xl">
        
          <h1 className="bg-indigo-600 text-white text-2xl font-bold px-4 rounded-md py-2 ">{
            displayedBadge.name}
          </h1>

          <img
            className="h-32 w-32" 
            src={displayedBadge.src}
            alt={displayedBadge.name}
            >
          </img>

          <table>
            {Object.keys((forInfoPanel(displayedBadge))).map((prop) => (
              <tr key={prop}>
                <th className="text-left px-4">{prop.toUpperCase()}</th>
                <td>{displayedBadge[prop].toString()}</td>
              </tr>
            ))}
          </table>
        
        </div>
      </div>

      <br></br>
      <hr></hr>
    </div>
  )
}