import { Cards } from '@/components/Cards/Cards';

// TODO(jared): Only show a few classes?
export default function Classes() {
  return (
    <>
      <br />

      <div className="text-center pb-12">
        <h2 className="text-base font-bold text-indigo-600">
          We have the best equipment in the market
        </h2>
        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900">
          Check our awesome team members
        </h1>
      </div>

      <Cards cards={[]} />
    </>
  );
}
