export default function Hero() {
  return (
    <div
      className="py-24 sm:py-32"
      style={{
        backgroundImage: 'url(splash.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        boxShadow: 'inset 0 0 0 2000px rgba(0, 0, 0, 0.6)',
      }}
    >
      {/* Overlay */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-left max-w-2xl">
          {/* Leading text */}
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            NEW RELEASE
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-50 sm:text-4xl">
            Groove Learning Pathway
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-100">
            Learn how to sit in the pocket and funk it up.
          </p>

          {/* link - Learn now */}
          <div className="mt-10 flex items-center justify-items-start gap-x-6">
            <a
              href="/classes/todo"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Learn now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
