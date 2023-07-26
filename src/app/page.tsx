import Hero from '@/components/Hero/Hero';
import Classes from '@/components/Classes/Classes';

import dynamic from 'next/dynamic';

// TODO(jared): Figure out why SSR fails when badges is involved.
const Badges = dynamic(() => import('@/components/Badges/Badges'), {
  ssr: false,
});

// index

export default function Home() {
  return (
    <main>
      <Hero />
      <Badges />
      <Classes />
    </main>
  );
}
