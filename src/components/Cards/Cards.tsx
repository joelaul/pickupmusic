import { Card } from '@/lib/card/types';
import React from 'react';

export type CardProps = {
  cards: Card[];
};

export const Cards: React.FC<CardProps> = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="border-2 border-gray-100 w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
          <div>
            <img
              className="object-center object-cover h-auto w-full"
              src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
              alt="photo"
            />
          </div>
          <div className="text-center py-8 sm:py-6">
            <p className="text-xl text-gray-700 font-bold mb-2">Dany Bailey</p>
            <p className="text-base text-gray-500 font-normal">
              Software Engineer
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
