import { Card } from '@/lib/card/types';
import React from 'react';
import Image from 'next/image';

export type CardProps = {
  cards: Card[];
};

export const Cards: React.FC<CardProps> = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <a href="TODO">
          <div className="border-2 border-gray-100 w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
            <div>
              <Image
                alt="groove"
                className="object-center object-cover h-auto w-full"
                src="/cards/groove.png"
                width={2700}
                height={1900}
              />
            </div>
            <div className="text-center py-8 sm:py-6">
              <p className="text-xl text-gray-700 font-bold mb-2">GROOVE</p>
              <p className="text-base text-gray-500 font-normal">Kelyn Crapp</p>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};
