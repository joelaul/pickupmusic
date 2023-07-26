// For https://app.pickupmusic.com/master-classes

import { Cards } from '@/components/Cards/Cards';
import { CARDS } from '@/static/cards';

export default function Classes() {
  return (
    <>
      <br />

      <div className="text-center">
        <h2 className="text-base font-bold text-indigo-600">
          Want to learn something new?
        </h2>
        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900">
          Check out our classes!
        </h1>
      </div>

      <Cards cards={CARDS} />
    </>
  );
}
