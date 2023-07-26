import { Card } from '@/lib/card/types';
import React from 'react';
import Image from 'next/image';

export type CardProps = {
  cards: Card[];
};

export const Cards: React.FC<CardProps> = (props) => {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {props.cards.map((card, index) => (
          <a key={index} href={card.href}>
            <div className="border-2 border-gray-100 w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
              <div>
                <Image
                  alt={card.img.alt}
                  className="object-center object-cover h-auto w-full"
                  src={card.img.src}
                  width={2700}
                  height={1900}
                />
              </div>
              <div className="text-center py-8 sm:py-6">
                <p className="text-xl text-gray-700 font-bold mb-2">
                  {card.title}
                </p>
                <p className="text-base text-gray-500 font-normal">
                  {card.subtitle}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};
