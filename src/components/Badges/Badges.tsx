/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

'use client';

import { useState } from 'react';
import { classNames } from '@/lib/css/classNames';
import { BADGES } from './constants';

{/* TODO: Sort options: newest-oldest first, */}

export default function Badges() {

  const [displayedBadge, setDisplayedBadge] = useState(BADGES[0]);

  return (
    <>
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
      <div className="flex justify-center">

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
        <div className="mx-12 flex flex-col items-center">

          <img
            className="h-32 w-32" 
            src={displayedBadge.src}
            alt={displayedBadge.name}
            >
          </img>

          <table>
            {Object.keys(displayedBadge).map((prop) => (
              <tr key={prop}>
                <th>{prop}</th>
                <td>{displayedBadge[prop].toString()}</td>
              </tr>
            ))}
          </table>
        
        </div>
      </div>

      <br></br>
      <hr></hr>
    </>
  )
}