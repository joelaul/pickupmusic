import Badges from '@/components/Badges/Badges';

export default function Home() {
  return (
    <main>
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">
              NEW RELEASE
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Groove Learning Pathway
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Learn how to sit in the pocket and funk it up.
            </p>
          </div>
        </div>
      </div>

      <hr />

      <Badges />
    </main>
  );
}
