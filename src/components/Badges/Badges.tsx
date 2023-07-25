/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

'use client';

import { useState } from 'react';
import { classNames } from '@/lib/css/classNames';
import { BADGES } from './constants';
import { Badge } from './types';

export default function Badges() {
  const [displayedBadge, setDisplayedBadge] = useState(BADGES[0]);

  const setBadgeGrid = (BADGES: Badge[]): React.ReactNode => {
    return BADGES.map((badge) => (
      <div
        onMouseOver={() => setDisplayedBadge(badge)}
        key="name"
        className={classNames(
          badge.timeAcquired ? '' : 'blur-sm',
          'rounded-full shadow-xl hover:scale-110 hover:cursor-pointer focus:scale-95',
        )}
      >
        <img
          src={badge.timeAcquired ? badge.imgSrc : 'logo-black.png'}
          title={badge.timeAcquired ? badge.name : '???'}
          alt={badge.name}
          className={classNames(
            badge.timeAcquired
              ? 'bg-amber-400 hover:bg-amber-300'
              : 'bg-gray-400 hover:bg-gray-300',
            'rounded-full border-black border-4',
          )}
        ></img>
      </div>
    ));
  };

  const setInfoPanel = (badge: Badge): React.ReactNode => {
    const { awardedFor, category, value, timeAcquired } = badge;
    const forInfoPanel = { awardedFor, category, value, timeAcquired };

    return Object.keys(forInfoPanel).map((prop) =>
      prop == 'timeAcquired' && !displayedBadge.timeAcquired ? (
        ''
      ) : (
        <tr key={prop}>
          <th className="text-left px-4">{prop.toUpperCase()}</th>
          <td>{displayedBadge[prop]?.toString() ?? ''}</td>
        </tr>
      ),
    );
  };

  return (
    <div className="pt-6 bg-indigo-200">
      {/* Leading text */}
      <div>
        <h1 className="text-center text-3xl font-bold tracking-tight text-black-50 sm:text-4xl">
          ✨ Your Badges
        </h1>
        <p className="mt-6 text-center text-lg leading-8 text-gray-900">
          Gaze upon your collection, or explore badges to{' '}
          <span className="font-bold">#pickup</span> next!
        </p>
      </div>

      {/* Content area */}
      <div
        className="pt-8 flex flex-col items-center
       lg:flex-row lg:justify-center lg:pt-0"
      >
        {/* Badge grid */}
        <div
          className="focus:scale-105 px-4 max-w-md grid grid-cols-4 gap-4 content-center 
        lg:gap-5 lg:mx-8"
        >
          {setBadgeGrid(BADGES)}
        </div>

        {/* Info panel */}
        <div className="flex flex-col my-10 px-4 py-4 max-w-md bg-indigo-100 border-black border-2 rounded-xl shadow-2xl lg:max-w-auto lg:mx-8">
          <h1 className="bg-indigo-600 text-white text-2xl font-bold px-4 rounded-md py-2">
            {displayedBadge.timeAcquired ? displayedBadge.name : '???'}
          </h1>

          <img
            className="h-32 w-32 self-center"
            src={
              displayedBadge.timeAcquired
                ? displayedBadge.imgSrc
                : 'logo-black.png'
            }
            alt={displayedBadge.name}
          ></img>

          <table>{setInfoPanel(displayedBadge)}</table>

          {displayedBadge.timeAcquired ? (
            ''
          ) : (
            <a
              href="/classes"
              className="mt-6 self-center font-bold hover:text-indigo-600"
            >
              <p>Continue the course to #pickup this badge!</p>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
