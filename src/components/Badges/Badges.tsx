'use client';

import { useState } from 'react';
import { classNames } from '@/lib/css/classNames';
import { Badge } from './types';
import Image from 'next/image';
import Link from 'next/link';

export type BadgesProps = {
  badges: Badge[];
};

export default function Badges(props: BadgesProps) {
  const badges = props.badges;

  const [displayedBadge, setDisplayedBadge] = useState(badges[0]);

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
          {badges.map((badge) => (
            <div
              onMouseOver={() => setDisplayedBadge(badge)}
              key={badge.name}
              className={classNames(
                badge.timeAcquired ? '' : 'blur-sm',
                'rounded-full shadow-xl hover:scale-110 hover:cursor-pointer focus:scale-95',
              )}
            >
              <Image
                src={badge.timeAcquired ? badge.imgSrc : '/logo-black.png'}
                width={100}
                height={100}
                title={badge.timeAcquired ? badge.name : '???'}
                alt={badge.name}
                className={classNames(
                  badge.timeAcquired
                    ? 'bg-amber-400 hover:bg-amber-300'
                    : 'bg-gray-400 hover:bg-gray-300',
                  'rounded-full border-black border-4',
                )}
              ></Image>
            </div>
          ))}
        </div>

        {/* Info panel */}
        <div className="flex flex-col my-10 px-4 py-4 max-w-md bg-indigo-100 border-black border-2 rounded-xl shadow-2xl lg:max-w-auto lg:mx-8">
          <h1 className="bg-indigo-600 text-white text-2xl font-bold px-4 rounded-md py-2">
            {displayedBadge.timeAcquired ? displayedBadge.name : '???'}
          </h1>

          <Image
            width={100}
            height={100}
            className="h-32 w-32 self-center"
            src={
              displayedBadge.timeAcquired
                ? displayedBadge.imgSrc
                : '/logo-black.png'
            }
            alt={displayedBadge.name}
          ></Image>

          <table className="table-auto">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-bold text-left px-4 uppercase">For</td>
                <td>{displayedBadge.awardedFor}</td>
              </tr>
              <tr>
                <td className="font-bold text-left px-4 uppercase">Category</td>
                <td>{displayedBadge.category}</td>
              </tr>
              <tr>
                <td className="font-bold text-left px-4 uppercase">Value</td>
                <td>{displayedBadge.value}</td>
              </tr>
              <tr>
                <td className="font-bold text-left px-4 uppercase">Time</td>
                <td suppressHydrationWarning>
                  {displayedBadge.timeAcquired?.toString()}
                </td>
              </tr>
            </tbody>
          </table>

          {displayedBadge.timeAcquired ? (
            ''
          ) : (
            <Link
              href="/classes"
              className="mt-6 self-center font-bold hover:text-indigo-600"
            >
              Continue the course to #pickup this badge!
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
