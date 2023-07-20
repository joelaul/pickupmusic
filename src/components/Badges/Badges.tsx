/* eslint-disable @next/next/no-img-element */

import { classNames } from '@/lib/css/classNames';
import { BADGES } from './constants';

{/* TODO: Sort options: newest-oldest first, */}

export default function Badges() {
  return (
    <>
    <br></br>

    {/* Leading text */}
    <div>
      <h1 className="text-center text-3xl font-bold tracking-tight text-black-50 sm:text-4xl">
        ✨ Your Badges
      </h1>
      <p className="mt-6 text-center leading-8 text-gray-900">
          Gaze upon your collection, or explore badges to <span className="font-bold">#pickup</span> next!
      </p>
    </div>
    <br></br> 

    {/* Content area */}
    <div className="flex justify-center">

      {/* Badge grid */}
      <div className="focus:scale-105 max-w-lg grid grid-cols-4 gap-7 content-center">

      {BADGES.map(({ name, src, acquired }) => (
        <div 
          key="name"
          className={classNames(acquired ? "" : "blur", "rounded-full shadow-xl hover:scale-105 hover:cursor-pointer focus:scale-95"
          )}>
          <a>
            <img
              src={src}
              title={name}
              alt={name}
              className="rounded-full border-black border-4 bg-indigo-300"
              ></img>
          </a>
        </div>
      ))}
  
      </div>
    </div>

   <br></br>
   <hr></hr>
</>
  )
}
